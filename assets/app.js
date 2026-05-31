"use strict";
// Shared assessment engine. Per-test data is provided by data/<id>.js, which
// sets window.ASSESSMENT and calls window.__bootAssessment().
let TEST_ID, CONFIG, BANK, BAND_TEXT;
function hexToRgb(h){
  h=(h||"").replace("#","");
  if(h.length===3) h=h.split("").map(x=>x+x).join("");
  const n=parseInt(h,16);
  return [(n>>16)&255,(n>>8)&255,n&255].join(",");
}



function barChart(labels, values, unit){
  const W=480,H=180,pad=30,gap=14;
  const max=Math.max(...values);
  const bw=(W-pad*2-gap*(values.length-1))/values.length;
  let bars="", lbls="";
  values.forEach((v,i)=>{
    const h=Math.max(4,(v/max)*(H-pad*2));
    const x=pad+i*(bw+gap), y=H-pad-h;
    bars+=`<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="5" fill="#4f9cf9"/>`+
          `<text x="${x+bw/2}" y="${y-6}" fill="#cfe3ff" font-size="12" text-anchor="middle">${v}</text>`;
    lbls+=`<text x="${x+bw/2}" y="${H-pad+16}" fill="#9aa7b4" font-size="12" text-anchor="middle">${labels[i]}</text>`;
  });
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="bar chart">`+
    `<line x1="${pad}" y1="${H-pad}" x2="${W-pad}" y2="${H-pad}" stroke="#2a3340"/>`+
    bars+lbls+`<text x="${pad}" y="16" fill="#6b7785" font-size="11">${unit||""}</text></svg>`;
}
function lineChart(values, unit){
  const W=480,H=180,pad=30;
  const max=Math.max(...values),min=Math.min(...values);
  const span=Math.max(1,max-min);
  const step=(W-pad*2)/(values.length-1);
  const pts=values.map((v,i)=>{
    const x=pad+i*step, y=H-pad-((v-min)/span)*(H-pad*2);
    return [x,y];
  });
  const path=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
  const dots=pts.map(p=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.5" fill="#7c5cff"/>`).join("");
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="line chart">`+
    `<line x1="${pad}" y1="${H-pad}" x2="${W-pad}" y2="${H-pad}" stroke="#2a3340"/>`+
    `<path d="${path}" fill="none" stroke="#4f9cf9" stroke-width="2.5"/>`+dots+
    `<text x="${pad}" y="16" fill="#6b7785" font-size="11">${unit||""}</text></svg>`;
}



const APP = {user:null, questions:[], resp:[], idx:0, startedAt:0, timerId:null, deadline:0, remaining:0, enterPerf:0};
const now = ()=>performance.now();
const $ = sel => document.querySelector(sel);
const views = ["login","intro","test","report","admin"];

function show(view){
  views.forEach(v=>$("#view-"+v).classList.toggle("hidden", v!==view));
  window.scrollTo(0,0);
}

$("#login-form").addEventListener("submit", e=>{
  e.preventDefault();
  const u=$("#u").value.trim(), p=$("#p").value;
  const rec=CONFIG.credentials[u];
  const err=$("#login-error");
  if(!rec || rec.password!==p){
    err.textContent="Incorrect username or password.";
    err.classList.remove("hidden");
    return;
  }
  err.classList.add("hidden");
  APP.user={username:u, role:rec.role, name:rec.name};
  if(rec.role==="admin"){
    show("admin");
  } else {
    $("#intro-hi").textContent="Signed in as "+rec.name;
    $("#intro-count").textContent=BANK.length;
    show("intro");
  }
});

document.querySelectorAll("[data-logout]").forEach(b=>b.addEventListener("click",()=>{
  stopTimer();
  APP.user=null;
  APP.resp=[];
  APP.idx=0;
  APP.questions=[];
  $("#u").value="";
  $("#p").value="";
  show("login");
}));

$("#start-btn").addEventListener("click", startTest);

function startTest(){
  APP.questions = selectQuestionsForAttempt();
  APP.resp = APP.questions.map(q=>({
    qid:q.id, dim:q.dim, answer:null, firstShownPerf:0,
    firstAnswerPerf:0, totalMs:0, visits:0, changes:[], timedOut:false, answeredNearDeadline:false
  }));
  APP.idx=0;
  APP.startedAt=Date.now();
  show("test");
  renderQuestion();
}

function renderQuestion(){
  const q=APP.questions[APP.idx], r=APP.resp[APP.idx];
  r.visits++;
  if(!r.firstShownPerf) r.firstShownPerf=now();
  APP.enterPerf=now();
  $("#t-dim").innerHTML=CONFIG.dims[q.dim].label;
  $("#t-count").textContent=`Q ${APP.idx+1} / ${APP.questions.length}`;
  $("#t-prog").style.width=((APP.idx)/APP.questions.length*100)+"%";
  $("#t-tag").textContent="Choose the best answer.";
  $("#t-prompt").innerHTML=q.prompt;
  const codeEl=$("#t-code");
  if(q.code){
    codeEl.textContent=q.code;
    codeEl.classList.remove("hidden");
  } else {
    codeEl.classList.add("hidden");
  }
  const chartEl=$("#t-chart");
  if(q.chart){
    chartEl.innerHTML=q.chart;
    chartEl.style.display="block";
  } else {
    chartEl.style.display="none";
  }
  const keys=["A","B","C","D","E","F"];
  const opts=$("#t-opts");
  opts.innerHTML="";
  q.options.forEach((opt,i)=>{
    const div=document.createElement("div");
    div.className="opt"+(r.answer===i?" sel":"");
    div.innerHTML=`<span class="key">${keys[i]}</span><span>${opt}</span>`;
    div.addEventListener("click",()=>selectOption(i));
    opts.appendChild(div);
  });
  $("#t-back").disabled = APP.idx===0;
  $("#t-next").textContent = (APP.idx===APP.questions.length-1) ? "Finish ✓" : "Next →";
  startTimer(q.timer||CONFIG.defaultTimerSec);
}

function selectOption(i){
  const r=APP.resp[APP.idx];
  if(r.answer===i) return;
  const tAt=Math.round(now()-r.firstShownPerf);
  if(!r.firstAnswerPerf) r.firstAnswerPerf=now();
  if(r.answer!==null) r.changes.push({from:r.answer, to:i, atMs:tAt});
  r.answer=i;
  const els=document.querySelectorAll("#t-opts .opt");
  els.forEach((el,k)=>el.classList.toggle("sel", k===i));
  if(APP.remaining<=CONFIG.nearDeadlineSec) r.answeredNearDeadline=true;
}

$("#t-next").addEventListener("click", ()=>{
  leaveQuestion();
  if(APP.idx===APP.questions.length-1){
    finishTest();
  } else {
    APP.idx++;
    renderQuestion();
  }
});

$("#t-back").addEventListener("click", ()=>{
  if(APP.idx===0) return;
  leaveQuestion();
  APP.idx--;
  renderQuestion();
});

function leaveQuestion(){
  const r=APP.resp[APP.idx];
  r.totalMs += Math.round(now()-APP.enterPerf);
  stopTimer();
}

function startTimer(sec){
  stopTimer();
  APP.remaining=sec;
  renderTimer();
  APP.timerId=setInterval(()=>{
    APP.remaining--;
    renderTimer();
    if(APP.remaining<=0){
      const r=APP.resp[APP.idx];
      r.timedOut=true;
      stopTimer();
      const saveMs=APP.resp[APP.idx].totalMs;
      APP.resp[APP.idx].totalMs += Math.round(now()-APP.enterPerf);
      if(APP.idx===APP.questions.length-1){
        finishTest();
      } else {
        APP.idx++;
        renderQuestion();
      }
    }
  },1000);
}

function renderTimer(){
  const m=Math.floor(Math.max(0,APP.remaining)/60), s=Math.max(0,APP.remaining)%60;
  const el=$("#t-timer");
  el.textContent=`${m}:${String(s).padStart(2,"0")}`;
  el.classList.toggle("low", APP.remaining<=CONFIG.nearDeadlineSec);
}

function stopTimer(){
  if(APP.timerId){
    clearInterval(APP.timerId);
    APP.timerId=null;
  }
}

function computeScores(){
  const byDim={};
  Object.keys(CONFIG.dims).forEach(d=>byDim[d]={correct:0,total:0});
  APP.questions.forEach((q,i)=>{
    const r=APP.resp[i];
    const correct = r.answer===q.answer;
    byDim[q.dim].total++;
    if(correct) byDim[q.dim].correct++;
  });
  const dimScores={};
  let sum=0,count=0,minPct=100;
  Object.keys(byDim).forEach(d=>{
    const {correct,total}=byDim[d];
    const pct= total? Math.round(correct/total*100):0;
    dimScores[d]={correct,total,pct};
    sum+=pct;
    count++;
    minPct=Math.min(minPct,pct);
  });
  const overall=Math.round(sum/count);
  let band;
  if(overall>=CONFIG.bands.strong && minPct>=50) band="strong";
  else if(overall>=CONFIG.bands.promising || (overall>=CONFIG.bands.strong && minPct<50)) band="promising";
  else band="gaps";
  return {dimScores, overall, band, minPct};
}



function rate(pct){ return pct>=70?"good":pct>=45?"warn":"bad"; }

// ---- Behavioral analysis -------------------------------------------------
// Derives "how you worked" patterns from the per-question telemetry that is
// already captured during the sitting (timing, answer changes, timeouts).
function computeBehavior(pq){
  const total=pq.length;
  let answered=0, rapid=0, deliberate=0, timedOut=0, nearDeadline=0;
  let sumTTF=0, ttfCount=0, rapidCorrect=0, deliberateCorrect=0;
  let switched=0, helped=0, hurt=0, changesTotal=0;
  pq.forEach(q=>{
    if(q.timedOut) timedOut++;
    if(q.answeredNearDeadline) nearDeadline++;
    if(q.timeToFirstMs!=null){ sumTTF+=q.timeToFirstMs; ttfCount++; }
    if(q.answer!==null){
      answered++;
      if(q.wasRapid){ rapid++; if(q.isCorrect) rapidCorrect++; }
      else { deliberate++; if(q.isCorrect) deliberateCorrect++; }
    }
    const ch=q.changes||[];
    changesTotal+=ch.length;
    if(ch.length){
      switched++;
      const firstCorrect = ch[0].from===q.correctAnswer;
      if(!firstCorrect && q.isCorrect) helped++;
      else if(firstCorrect && !q.isCorrect) hurt++;
    }
  });
  return {
    total, answered,
    avgTimeToFirstMs: ttfCount? Math.round(sumTTF/ttfCount): null,
    rapid, deliberate, timedOut, nearDeadline,
    rapidCorrectPct: rapid? Math.round(rapidCorrect/rapid*100): null,
    deliberateCorrectPct: deliberate? Math.round(deliberateCorrect/deliberate*100): null,
    switched, helped, hurt, changesTotal
  };
}

// Cross-pass "learn and apply" signal: did the dimensions the student was weak
// on last time improve on a FRESH set of questions this time? attempts[] is the
// stored history with the current attempt already appended as the last item.
function computeLearningAgility(attempts){
  if(attempts.length<2) return null;
  const cur=attempts[attempts.length-1], prev=attempts[attempts.length-2];
  if(!cur.dimScores || !prev.dimScores) return null;
  const deltas=[];
  Object.keys(CONFIG.dims).forEach(d=>{
    const p=prev.dimScores[d], c=cur.dimScores[d];
    if(!p || !c || !c.total) return;
    if(p.pct<70) deltas.push({dim:d, prevPct:p.pct, curPct:c.pct, delta:c.pct-p.pct});
  });
  if(!deltas.length) return null;
  const avgDelta=Math.round(deltas.reduce((s,x)=>s+x.delta,0)/deltas.length);
  return {deltas, avgDelta};
}

function paceText(b){
  if(b.answered && (b.rapid/b.answered)>=0.4)
    return "You moved quickly — a good share of your answers came in within the first few seconds.";
  if((b.timedOut+b.nearDeadline) >= Math.ceil(b.total*0.25))
    return "You used most of the clock — several answers landed right near the time limit.";
  return "You kept a steady, balanced pace through the questions.";
}
function switchText(b){
  if(b.switched===0) return "You rarely changed an answer once you'd chosen it — decisive.";
  if(b.helped>b.hurt) return `Changing your mind tended to help — it turned ${b.helped} answer${b.helped!==1?"s":""} from wrong to right.`;
  if(b.hurt>b.helped) return `Your first instinct was often the better one — switching cost you ${b.hurt} time${b.hurt!==1?"s":""}.`;
  return `You revised your answer on ${b.switched} question${b.switched!==1?"s":""}, with mixed results.`;
}
function confidenceText(b){
  if(b.rapidCorrectPct==null || b.deliberateCorrectPct==null)
    return "A mix of quick and considered answers — not enough of one kind to read a clear pattern.";
  if(b.rapidCorrectPct>=b.deliberateCorrectPct)
    return `Your quick answers were just as accurate as your slower ones (${b.rapidCorrectPct}% vs ${b.deliberateCorrectPct}%) — trust those instincts.`;
  return `Slowing down paid off — your considered answers scored higher than your snap ones (${b.deliberateCorrectPct}% vs ${b.rapidCorrectPct}%).`;
}

function finishTest(){
  saveToLocalStorage();
  show("report");
  renderStudentReport();
}

function renderStudentReport(){
  const s=computeScores();
  const bt=BAND_TEXT[s.band];
  const _att=loadStoredAttempts();
  const _attemptNum=_att.length;
  const _cur=_att[_att.length-1];
  const _beh=_cur && _cur.behavior;
  const _agility=computeLearningAgility(_att);
  const _seen=new Set(_att.flatMap(a=>a.questionsShown||[]));
  const _remaining=Math.max(0,BANK.length-_seen.size);
  const _attemptLabel=_attemptNum>1
    ?(_remaining>0?`Attempt ${_attemptNum} · ${_remaining} fresh question${_remaining!==1?"s":""} remaining`
      :`Attempt ${_attemptNum} · All questions covered — pool will reset`)
    :`Attempt ${_attemptNum}`;
  let dimHtml="";
  Object.keys(CONFIG.dims).forEach(d=>{
    const ds=s.dimScores[d], meta=CONFIG.dims[d], cls=rate(ds.pct);
    const weak = ds.pct<70;
    dimHtml+=`<div class="dimrow">
      <div class="head"><b>${meta.label}</b>
        <span class="pill ${cls}">${ds.pct}% &middot; ${ds.correct}/${ds.total}</span></div>
      <div class="bar ${cls}"><i style="width:${ds.pct}%"></i></div>
      <div class="next">${weak
        ? `<b>How to grow this:</b> ${meta.improve}`
        : `Solid here — this is a strength to build on. <span class="faint">(${meta.means})</span>`}</div>
    </div>`;
  });

  let behHtml="";
  if(_beh){
    behHtml=`<h2>How you worked</h2>
      <div class="dimgrid">
        <div class="dimrow"><div class="head"><b>Pace</b></div><div class="next">${paceText(_beh)}</div></div>
        <div class="dimrow"><div class="head"><b>Changing answers</b></div><div class="next">${switchText(_beh)}</div></div>
        <div class="dimrow"><div class="head"><b>Quick vs considered</b></div><div class="next">${confidenceText(_beh)}</div></div>
      </div>`;
  }

  let agHtml="";
  if(_agility){
    const items=_agility.deltas.map(x=>
      `<li>${CONFIG.dims[x.dim].label}: <b>${x.delta>=0?"+":""}${x.delta}%</b> <span class="faint">(${x.prevPct}% → ${x.curPct}%)</span></li>`).join("");
    const head=_agility.avgDelta>0
      ? `You lifted your weaker areas by an average of <b>+${_agility.avgDelta}%</b> on a fresh set of questions — a good sign you take feedback on board and apply it quickly.`
      : `Your weaker areas held about the same or dipped slightly on fresh questions this time. That's normal — new questions test whether an idea really transfers. Keep practising and watch them climb.`;
    agHtml=`<h2>Learning agility</h2>
      <div class="notice ${_agility.avgDelta>0?"good":"warn"}">
        <p style="margin:0 0 6px">${head}</p>
        <ul style="margin:6px 0 0;padding-left:18px">${items}</ul>
        <p class="faint" style="margin:8px 0 0">Compared with your previous attempt. A growth snapshot — not a fixed rating.</p>
      </div>`;
  }

  $("#report-card").innerHTML=`
    <div class="brand"><div class="dot">AI</div>
      <div><strong>Your Aptitude Report</strong>
        <small>AI/ML readiness · ${new Date(APP.startedAt).toLocaleDateString()} · ${_attemptLabel}</small></div></div>

    <div class="scorehero">
      <div class="ring" style="--p:${s.overall}"><div><b>${s.overall}%</b></div><small>overall</small></div>
      <div>
        <span class="pill ${bt.pill}" style="font-size:.9rem">${bt.title}</span>
        <p style="margin:10px 0 0;max-width:48ch">${bt.blurb}</p>
      </div>
    </div>

    <h2>Area by area</h2>
    <div class="dimgrid">${dimHtml}</div>

    ${behHtml}
    ${agHtml}

    <div class="notice" style="margin-top:18px">
      <b>How this kind of test works.</b> A good assessment doesn't only tally right and wrong —
      it can also read <i>how</i> you work: your pace, when you change your mind, and how you
      bounce back after reviewing. The patterns above are some of those signals. Knowing they
      exist is part of the point — but this is still a friendly snapshot, not a verdict on you.
    </div>

    <div class="notice good" style="margin-top:14px">
      <b>Your next round.</b>
      <p style="margin:6px 0 10px">Want your next set to lean into the areas you found tricky, or keep a balanced mix? Your choice is saved for next time you start.</p>
      <div class="btn-row" style="justify-content:flex-start">
        <button class="btn sm" id="focus-weak">Focus on my weak areas</button>
        <button class="btn ghost sm" id="focus-balanced">Balanced mix</button>
      </div>
      <p id="focus-confirm" class="faint" style="margin:8px 0 0"></p>
    </div>

    <div class="notice good" style="margin-top:14px">
      <b>What this is — and isn't.</b> This is an informal, just-for-fun snapshot of how
      you answered a short set of questions today. It is <b>not</b> an official test and
      <b>not</b> a measure of your ability, intelligence, or readiness for any course or
      career. These thinking skills grow a lot with practice — use the "how to grow this"
      notes above as a warm-up, then try again and watch the areas move.
    </div>

    <p class="faint" style="margin-top:14px">A friendly snapshot for you. Your mentor can
      load the same results file to talk it through with you.</p>
  `;

  const fw=$("#focus-weak"), fb=$("#focus-balanced"), fc=$("#focus-confirm");
  function paintFocus(v){ fw.classList.toggle("ghost", v!=="weak"); fb.classList.toggle("ghost", v!=="balanced"); }
  paintFocus(localStorage.getItem(`aptitude-focus:${TEST_ID}`) || "balanced");
  if(fw) fw.addEventListener("click",()=>{ localStorage.setItem(`aptitude-focus:${TEST_ID}`,"weak"); paintFocus("weak"); fc.textContent="Saved — your next round will focus on your weaker areas. Log out and back in to start it."; });
  if(fb) fb.addEventListener("click",()=>{ localStorage.setItem(`aptitude-focus:${TEST_ID}`,"balanced"); paintFocus("balanced"); fc.textContent="Saved — your next round will be a balanced mix. Log out and back in to start it."; });
}

function buildResultsObject(){
  const s=computeScores();
  const perQuestion = APP.questions.map((q,i)=>{
    const r=APP.resp[i];
    return {
      qid:q.id, dim:q.dim, prompt:q.prompt,
      answer:r.answer, correctAnswer:q.answer,
      isCorrect: r.answer===q.answer,
      totalMs:r.totalMs,
      timeToFirstMs: r.firstAnswerPerf? Math.round(r.firstAnswerPerf-r.firstShownPerf): null,
      visits:r.visits,
      changes:r.changes,
      wasRapid: r.firstAnswerPerf? (r.firstAnswerPerf-r.firstShownPerf) < CONFIG.rapidMs : false,
      timedOut:r.timedOut,
      answeredNearDeadline:r.answeredNearDeadline
    };
  });
  return {
    schema:"aptitude-readiness/v1", testId:TEST_ID,
    attemptNumber: loadStoredAttempts().length + 1,
    focusChoice: localStorage.getItem(`aptitude-focus:${TEST_ID}`) || "balanced",
    questionsShown: APP.questions.map(q=>q.id),
    student: APP.user ? APP.user.name : "Student",
    startedAt: new Date(APP.startedAt).toISOString(),
    finishedAt: new Date().toISOString(),
    overall: s.overall, band: s.band,
    dimScores: s.dimScores,
    perQuestion,
    behavior: computeBehavior(perQuestion)
  };
}

function checksum(str){
  let h=5381;
  for(let i=0;i<str.length;i++){ h=((h<<5)+h+str.charCodeAt(i))>>>0; }
  return h.toString(16);
}

function b64encode(str){ return btoa(unescape(encodeURIComponent(str))); }
function b64decode(b64){ return decodeURIComponent(escape(atob(b64))); }

function loadStoredAttempts(){
  const raw=localStorage.getItem(`aptitude-result:${TEST_ID}`);
  if(!raw) return [];
  try{
    const parsed=JSON.parse(raw);
    const arr=Array.isArray(parsed)?parsed:[parsed];
    return arr
      .filter(w=>w && w.payload)
      .map(w=>{ try{ return JSON.parse(b64decode(w.payload)); }catch(e){ return null; } })
      .filter(Boolean);
  }catch(e){ return []; }
}
function shuffle(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function selectQuestionsForAttempt(){
  const attempts=loadStoredAttempts();
  const seen=new Set(attempts.flatMap(a=>a.questionsShown||[]));
  const unseen=BANK.filter(q=>!seen.has(q.id));
  const pool=unseen.length>=30?unseen:BANK;
  const focus=localStorage.getItem(`aptitude-focus:${TEST_ID}`);
  if(focus==="weak" && attempts.length){
    const weighted=selectWeightedToWeak(pool, attempts[attempts.length-1].dimScores);
    if(weighted && weighted.length>=Math.min(30,pool.length)) return weighted;
  }
  return shuffle(pool).slice(0,30);
}

// Over-samples the dimensions the student scored lowest on last time, while
// still drawing at least a few from every dimension. Falls back to filling
// from the rest of the pool if a weak dimension has run low on fresh items.
function selectWeightedToWeak(pool, lastDimScores){
  if(!lastDimScores) return null;
  const dims=Object.keys(CONFIG.dims);
  const order=dims.slice().sort((a,b)=>
    ((lastDimScores[a]&&lastDimScores[a].pct)??50) - ((lastDimScores[b]&&lastDimScores[b].pct)??50));
  const weights=[9,8,5,4,4]; // weakest → strongest; sums to 30 across 5 dims
  const byDim={};
  dims.forEach(d=>byDim[d]=shuffle(pool.filter(q=>q.dim===d)));
  const result=[];
  order.forEach((d,i)=>{ result.push(...byDim[d].splice(0, weights[i]||4)); });
  if(result.length<30){
    const used=new Set(result.map(q=>q.id));
    result.push(...shuffle(pool.filter(q=>!used.has(q.id))).slice(0,30-result.length));
  }
  return shuffle(result).slice(0,30);
}

function downloadResultsFile(){
  const obj=buildResultsObject();
  const json=JSON.stringify(obj);
  const file={ format:"aptitude-readiness-result", checksum:checksum(json), payload:b64encode(json) };
  const blob=new Blob([JSON.stringify(file,null,2)],{type:"application/json"});
  const safe=(obj.student||"student").replace(/[^a-z0-9]+/gi,"-").toLowerCase();
  triggerDownload(blob, `aptitude-result-${TEST_ID}-${safe}.json`);
}

function triggerDownload(blob, name){
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download=name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url),1500);
}

function saveToLocalStorage(){
  const obj=buildResultsObject();
  const json=JSON.stringify(obj);
  const wrapper={ format:"aptitude-readiness-result", checksum:checksum(json), payload:b64encode(json) };
  const raw=localStorage.getItem(`aptitude-result:${TEST_ID}`);
  let arr=[];
  try{ const parsed=JSON.parse(raw); if(Array.isArray(parsed)) arr=parsed; else if(parsed) arr=[parsed]; }catch(e){}
  arr=arr.filter(w=>w && w.payload);
  arr.push(wrapper);
  localStorage.setItem(`aptitude-result:${TEST_ID}`, JSON.stringify(arr));
}

$("#dl-json").addEventListener("click", downloadResultsFile);
$("#dl-pdf").addEventListener("click", ()=>window.print());

const dz=$("#dropzone");
const fileInput=$("#file-input");

// Prevent the browser from hijacking the drop (opening/navigating to the file)
// so the dropzone reliably receives the event.
["dragenter","dragover","drop"].forEach(t=>
  document.addEventListener(t, e=>{ e.preventDefault(); }, false));

dz.addEventListener("click", ()=>fileInput.click());
dz.addEventListener("dragenter", e=>{e.preventDefault();dz.classList.add("over");});
dz.addEventListener("dragover", e=>{e.preventDefault();dz.classList.add("over");});
dz.addEventListener("dragleave", ()=>dz.classList.remove("over"));
dz.addEventListener("drop", e=>{
  e.preventDefault();
  dz.classList.remove("over");
  if(e.dataTransfer.files.length) readResultsFile(e.dataTransfer.files[0]);
});

fileInput.addEventListener("change", e=>{
  if(e.target.files.length) readResultsFile(e.target.files[0]);
});

function adminError(msg){
  const el=$("#admin-error");
  el.textContent=msg;
  el.classList.remove("hidden");
  $("#admin-report").classList.add("hidden");
}

function readResultsFile(file){
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const outer=JSON.parse(reader.result);
      if(outer.format!=="aptitude-readiness-result" || !outer.payload)
        return adminError("This doesn't look like an aptitude results file.");
      const json=b64decode(outer.payload);
      const tampered = checksum(json)!==outer.checksum;
      const data=JSON.parse(json);
      $("#admin-error").classList.add("hidden");
      renderAdminReport(data, tampered);
    }catch(err){
      adminError("Could not read this file — it may be corrupted or the wrong file. ("+err.message+")");
    }
  };
  reader.onerror=()=>adminError("Failed to read the file.");
  reader.readAsText(file);
}

function renderAdminReport(data, tampered){
  $("#admin-report").classList.remove("hidden");
  const s=data.dimScores;
  let pqHtml="";
  data.perQuestion.forEach(pq=>{
    const ans=pq.answer!==null ? ["A","B","C","D","E","F"][pq.answer] : "—";
    const corr=["A","B","C","D","E","F"][pq.correctAnswer];
    const status=pq.isCorrect?"✓":"✗";
    pqHtml+=`<tr><td>${pq.qid.toUpperCase()}</td><td>${pq.dim}</td><td>${ans}</td><td>${corr}</td><td>${status}</td><td>${pq.totalMs}ms</td></tr>`;
  });

  let dimHtml="";
  Object.keys(s).forEach(d=>{
    dimHtml+=`<tr><td>${CONFIG.dims[d].label}</td><td>${s[d].pct}%</td><td>${s[d].correct}/${s[d].total}</td></tr>`;
  });

  const b=data.behavior;
  const behHtml = b ? `
    <h3 style="margin-top:18px">Behavioral Analysis</h3>
    <table style="width:100%;border-collapse:collapse;font-size:.85rem">
      <tr><td style="padding:6px">Answered</td><td>${b.answered}/${b.total}</td></tr>
      <tr><td style="padding:6px">Avg time to first answer</td><td>${b.avgTimeToFirstMs!=null?b.avgTimeToFirstMs+"ms":"—"}</td></tr>
      <tr><td style="padding:6px">Rapid answers</td><td>${b.rapid} (${b.rapidCorrectPct!=null?b.rapidCorrectPct+"% correct":"—"})</td></tr>
      <tr><td style="padding:6px">Considered answers</td><td>${b.deliberate} (${b.deliberateCorrectPct!=null?b.deliberateCorrectPct+"% correct":"—"})</td></tr>
      <tr><td style="padding:6px">Questions revised</td><td>${b.switched} · helped ${b.helped} / hurt ${b.hurt}</td></tr>
      <tr><td style="padding:6px">Timed out</td><td>${b.timedOut}</td></tr>
      <tr><td style="padding:6px">Answered near deadline</td><td>${b.nearDeadline}</td></tr>
    </table>` : "";

  $("#admin-report").innerHTML=`
    <h2>Strict Analysis</h2>
    <p><b>Overall:</b> ${data.overall}% (${data.band})${data.focusChoice?` · <b>Next-round focus:</b> ${data.focusChoice}`:""}</p>
    <table style="width:100%;border-collapse:collapse;font-size:.9rem">
      <tr style="border-bottom:1px solid var(--line)"><th style="text-align:left;padding:8px">Dimension</th><th>Score</th><th>Result</th></tr>
      ${dimHtml}
    </table>

    <h3 style="margin-top:18px">Per-Question Breakdown</h3>
    <table style="width:100%;border-collapse:collapse;font-size:.85rem">
      <tr style="border-bottom:1px solid var(--line)"><th style="text-align:left;padding:8px">Q</th><th>Dim</th><th>Ans</th><th>Correct</th><th>✓</th><th>Time</th></tr>
      ${pqHtml}
    </table>
    ${behHtml}

    ${tampered ? `<div class="notice bad" style="margin-top:14px"><b>⚠️ Integrity Check Failed:</b> This file appears to have been edited. The checksum does not match.</div>` : `<p class="faint" style="margin-top:14px">✓ File integrity verified.</p>`}
  `;
}


function init(){
  const A=window.ASSESSMENT;
  if(!A){ document.getElementById("app").innerHTML="<div class='card'>Could not load this assessment.</div>"; return; }
  TEST_ID=A.id; CONFIG=A.config; BANK=A.bank; BAND_TEXT=A.bandText;
  const root=document.documentElement.style;
  root.setProperty("--accent", A.theme.accent);
  root.setProperty("--accent-2", A.theme.accent2);
  root.setProperty("--accent-rgb", hexToRgb(A.theme.accent));
  document.title = A.title;
  document.querySelectorAll(".dot").forEach(d=>{ d.textContent=A.dot; });
  const bn=$("#brand-name"); if(bn) bn.textContent=A.brandName;
  const li=$("#login-intro"); if(li) li.innerHTML=A.loginIntro;
  const ll=$("#learn-link"); if(ll) ll.href="learn.html?test="+A.id;
  show("login");
}
window.__bootAssessment = init;
(function(){
  const p=new URLSearchParams(location.search);
  // ?test= wins; fall back to the pathname segment (e.g. /ai-ml from a
  // Vercel rewrite) so the browser URL doesn't need the query string.
  const pathId=location.pathname.replace(/^\/+/,"").split("/")[0];
  const id=(p.get("test")||pathId||"ai-ml").replace(/[^a-z0-9-]/gi,"");
  const s=document.createElement("script");
  s.src="data/"+id+".js";
  s.onerror=function(){ document.getElementById("app").innerHTML="<div class='card'>Unknown assessment: "+id+"</div>"; };
  document.body.appendChild(s);
})();
