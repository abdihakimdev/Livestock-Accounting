const state={currency:localStorage.getItem('currency')||'ETB',openingCapital:Number(localStorage.getItem('openingCapital'))||0,animals:JSON.parse(localStorage.getItem('animals')||'[]'),transactions:JSON.parse(localStorage.getItem('transactions')||'[]'),dark:localStorage.getItem('dark')==='1',lang:localStorage.getItem('lang')||'en',user:localStorage.getItem('user')||'Admin'};
const t={en:{dashboard:'Dashboard',animals:'Animals',transactions:'Transactions',expenses:'Expenses',capital:'Capital',reports:'Reports',settings:'Settings',subtitle:'Livestock, capital and profit management',addAnimal:'Add Animal',overview:'Business overview',welcome:'Your livestock at a glance',overviewText:'Track animals, money movement, current value and profit in one place.',currentAnimals:'Current Animals',liveAnimals:'Live animals',livestockValue:'Livestock Value',currentValuation:'Current valuation',currentCapital:'Current Capital',assetsMinus:'Cash plus livestock value',netProfit:'Net Profit',profitToDate:'Profit to date',financialSnapshot:'Financial Snapshot',financialSnapshotText:'Money in, money out and current livestock value',inflow:'Inflow',outflow:'Outflow',value:'Livestock Value',capitalSummary:'Capital Summary',capitalSummaryText:'How your capital has moved',openingCapital:'Opening capital',purchases:'Purchases',sales:'Sales',expenses:'Expenses',recentAnimals:'Recent Animals',recentAnimalsText:'Latest animals added to the system',viewAll:'View all',recentTransactions:'Recent Transactions',recentTransactionsText:'Latest money and animal activity',animalsText:'Use one ID for an individual animal or a group with the same price.',animalId:'Animal ID',type:'Type',gender:'Gender',qty:'Qty',purchase:'Purchase',currentValue:'Current Value',status:'Status',transactionsText:'Every purchase, sale, birth, death and transfer.',addExpense:'Add Expense',expenseText:'Record tax, feed, transport and other operating costs.',category:'Category',amount:'Amount',date:'Date',note:'Note',saveExpense:'Save Expense',expenseBreakdown:'Expense Breakdown',expenseBreakdownText:'Where your money is going.',openingCapitalTitle:'Opening Capital',openingCapitalText:'Set the capital you had before starting this system.',currency:'Currency',saveCapital:'Save Capital',profitLoss:'Profit & Loss',animalMovement:'Animal Movement',language:'Language',darkMode:'Dark mode',darkModeText:'Use a darker interface',dataTools:'Data & Export',account:'Account',logoutText:'Sign out of this local demo session.',logout:'Logout',saveAnimal:'Save Animal',tabDashboard:'Dashboard',tabAnimals:'Animals',tabTransactions:'Activity',tabExpenses:'Expenses',tabCapital:'Capital',tabReports:'Reports',tabSettings:'Settings',boughtFrom:'Bought from',by:'By',actions:'Manage',security:'Security',yourName:'Your name',yourNameText:'Saved on every record you add',pinText:'Asked whenever data is deleted or imported',allPlaces:'All places'},so:{dashboard:'Dashboard',animals:'Xoolaha',transactions:'Dhaqdhaqaaqyada',expenses:'Kharashaadka',capital:'Raasumaal',reports:'Warbixinno',settings:'Settings',subtitle:'Maamulka xoolaha, raasumaalka iyo faa’iidada',addAnimal:'Ku dar Xoolo',overview:'Guudmar ganacsi',welcome:'Xoolahaaga hal meel ka eeg',overviewText:'La soco xoolaha, lacagta, qiimaha hadda iyo faa’iidada.',currentAnimals:'Xoolaha Hadda',liveAnimals:'Xoolo nool',livestockValue:'Qiimaha Xoolaha',currentValuation:'Qiimeynta hadda',currentCapital:'Raasumaalka Hadda',assetsMinus:'Lacag + qiimaha xoolaha',netProfit:'Faa’iido Saafi ah',profitToDate:'Faa’iidada ilaa hadda',financialSnapshot:'Muuqaalka Maaliyadda',financialSnapshotText:'Lacagta soo gasha, baxda iyo qiimaha xoolaha',inflow:'Soo galay',outflow:'Baxay',value:'Qiimaha Xoolaha',capitalSummary:'Koobka Raasumaalka',capitalSummaryText:'Sida raasumaalku isu beddelay',openingCapital:'Raasumaalkii hore',purchases:'Iibsiyo',sales:'Iib',expenses:'Kharashyo',recentAnimals:'Xoolihii Ugu Dambeeyay',recentAnimalsText:'Xoolihii ugu dambeeyay ee lagu daray',viewAll:'Dhammaan eeg',recentTransactions:'Dhaqdhaqaaqyadii Ugu Dambeeyay',recentTransactionsText:'Dhaqdhaqaaqii ugu dambeeyay',animalsText:'ID gaar ah u isticmaal neef ama koox isku qiimo ah.',animalId:'Animal ID',type:'Nooc',gender:'Jinsi',qty:'Tiro',purchase:'Iibsi',currentValue:'Qiimaha Hadda',status:'Xaalad',transactionsText:'Iibsi, iib, dhalasho, dhimasho iyo wareejin.',addExpense:'Ku dar Kharash',expenseText:'Diiwaangeli canshuur, raac, gaadiid iyo kharashyo kale.',category:'Qaybta',amount:'Lacag',date:'Taariikh',note:'Faallo',saveExpense:'Kaydi Kharash',expenseBreakdown:'Kala Qaybinta Kharashaadka',expenseBreakdownText:'Meesha lacagtu ku baxday.',openingCapitalTitle:'Raasumaalkii Hore',openingCapitalText:'Geli raasumaalkii aad lahayd ka hor system-kan.',currency:'Lacagta',saveCapital:'Kaydi Raasumaal',profitLoss:'Faa’iido & Khasaaro',animalMovement:'Dhaqdhaqaaqa Xoolaha',language:'Luqad',darkMode:'Dark mode',darkModeText:'Isticmaal muuqaal madow',dataTools:'Xog & Export',account:'Account',logoutText:'Ka bax session-kan.',logout:'Logout',saveAnimal:'Kaydi Xoolaha',tabDashboard:'Dashboard',tabAnimals:'Xoolaha',tabTransactions:'Dhaqaaq',tabExpenses:'Kharash',tabCapital:'Raasumaal',tabReports:'Warbixin',tabSettings:'Settings',boughtFrom:'Laga soo iibiyay',by:'Qofka',actions:'Maamul',security:'Amni',yourName:'Magacaaga',yourNameText:'Waxaa lagu kaydiyaa diiwaan kasta oo aad ku darto',pinText:'Waa la weydiiyaa marka xog la tirtiro ama la soo geliyo',allPlaces:'Meel kasta'}};
const $=id=>document.getElementById(id);
const newId=()=>crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2);
const todayISO=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
const DAYS={en:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],so:['Axad','Isniin','Talaado','Arbaco','Khamiis','Jimce','Sabti']};
function dayName(iso,short,lang){const m=/^(\d{4})-(\d{2})-(\d{2})/.exec(iso||'');if(!m)return'';const d=new Date(+m[1],+m[2]-1,+m[3]);if(isNaN(d))return'';const n=(DAYS[lang||state.lang]||DAYS.en)[d.getDay()];return short?n.slice(0,3):n}
const ICON_EDIT='<svg class="i" viewBox="0 0 24 24"><path d="M4 20l1.2-4.2L16.5 4.5a2.1 2.1 0 0 1 3 3L8.2 18.8z"/><path d="M14.5 6.5l3 3"/></svg>';
const ICON_DEL='<svg class="i" viewBox="0 0 24 24"><path d="M5 7h14M10 7V4.5h4V7M7 7l.8 12.5h8.4L17 7M10.5 11v5M13.5 11v5"/></svg>';
function actionBtns(kind,id){return `<span class="row-actions"><button type="button" class="icon-sm" data-act="edit" data-kind="${kind}" data-id="${esc(id)}" aria-label="Edit">${ICON_EDIT}</button><button type="button" class="icon-sm del" data-act="delete" data-kind="${kind}" data-id="${esc(id)}" aria-label="Delete">${ICON_DEL}</button></span>`}
function dateCell(d){return d?`${esc(d)} <small class="day">${esc(dayName(d))}</small>`:'—'}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>`${state.currency} ${Number(n||0).toLocaleString(undefined,{maximumFractionDigits:2})}`; const save=()=>{localStorage.setItem('currency',state.currency);localStorage.setItem('openingCapital',state.openingCapital);localStorage.setItem('animals',JSON.stringify(state.animals));localStorage.setItem('transactions',JSON.stringify(state.transactions));localStorage.setItem('dark',state.dark?'1':'0');localStorage.setItem('lang',state.lang);localStorage.setItem('user',state.user)};
function totals(){const live=state.animals.filter(a=>a.status!=='dead');const qty=live.reduce((s,a)=>s+a.qty,0),value=live.reduce((s,a)=>s+a.qty*a.currentValue,0),purchaseValue=live.reduce((s,a)=>s+a.qty*a.purchasePrice,0),purchases=state.transactions.filter(x=>x.type==='PURCHASE').reduce((s,x)=>s+x.amount,0),sales=state.transactions.filter(x=>x.type==='SALE').reduce((s,x)=>s+x.amount,0),expenses=state.transactions.filter(x=>x.type==='EXPENSE').reduce((s,x)=>s+x.amount,0),costSold=state.transactions.filter(x=>x.type==='SALE').reduce((s,x)=>s+x.costAmount,0),valuation=value-purchaseValue,profit=sales-costSold-expenses+valuation,currentCapital=state.openingCapital+sales-purchases-expenses+value;return{qty,value,purchaseValue,purchases,sales,expenses,costSold,valuation,profit,currentCapital}}
let currentPage='dashboard';
function setTitle(){document.getElementById('pageTitle').textContent=t[state.lang][currentPage]||currentPage}
function go(p){currentPage=p;document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.page===p));document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===p));setTitle();window.scrollTo({top:0})}
function syncCapitalForm(){document.getElementById('currency').value=state.currency;document.getElementById('openingInput').value=state.openingCapital}
function applyLang(){document.querySelectorAll('[data-i18n]').forEach(e=>{const v=t[state.lang][e.dataset.i18n];if(!v)return;if(e.children.length){const tn=[...e.childNodes].find(n=>n.nodeType===3&&n.nodeValue.trim());if(tn)tn.nodeValue=v}else e.textContent=v});setTitle();document.documentElement.lang=state.lang;document.getElementById('language').value=state.lang}
function render(){const x=totals();document.getElementById('statAnimals').textContent=x.qty;document.getElementById('statLivestockValue').textContent=money(x.value);document.getElementById('statCapital').textContent=money(x.currentCapital);document.getElementById('statProfit').textContent=money(x.profit);document.getElementById('openingCapital').textContent=money(state.openingCapital);document.getElementById('purchaseTotal').textContent=money(x.purchases);document.getElementById('salesTotal').textContent=money(x.sales);document.getElementById('expenseTotal').textContent=money(x.expenses);document.getElementById('currentCapital').textContent=money(x.currentCapital);document.getElementById('reportSales').textContent=money(x.sales);document.getElementById('reportCostSold').textContent=money(x.costSold);document.getElementById('reportExpenses').textContent=money(x.expenses);document.getElementById('reportValuation').textContent=money(x.valuation);document.getElementById('reportProfit').textContent=money(x.profit);const count=k=>state.transactions.filter(a=>a.type===k).reduce((s,a)=>s+a.qty,0);document.getElementById('movePurchased').textContent=count('PURCHASE');document.getElementById('moveBorn').textContent=count('BIRTH');document.getElementById('moveSold').textContent=count('SALE');document.getElementById('moveDied').textContent=count('DEATH');document.getElementById('moveCurrent').textContent=x.qty;
const search=(document.getElementById('animalSearch')?.value||'').trim().toUpperCase(),placeSel=$('placeFilter').value,visible=state.animals.filter(a=>(!search||a.code.toUpperCase().includes(search))&&(!placeSel||a.place===placeSel));document.getElementById('animalsTable').innerHTML=visible.map(a=>`<tr data-id="${esc(a.id||a.code)}"><td><strong>${esc(a.code)}</strong></td><td>${esc(a.type)}</td><td>${esc(a.gender)}</td><td>${a.qty}</td><td>${esc(a.place)||'—'}</td><td>${dateCell(a.date)}</td><td>${money(a.purchasePrice)}</td><td>${money(a.currentValue)}</td><td><span class="pill ${esc(a.status)}">${esc(a.status)}</span></td><td>${actionBtns('animal',a.id||a.code)}</td></tr>`).join('')||`<tr><td colspan="10">${search||placeSel?'No matching animals.':'No animals added yet.'}</td></tr>`;document.querySelectorAll('#animalsTable tr[data-id]').forEach(r=>r.onclick=e=>{if(e.target.closest('[data-act]'))return;openProfile(r.dataset.id)});
document.getElementById('transactionsTable').innerHTML=state.transactions.slice().reverse().map(a=>`<tr><td>${dateCell(a.date)}</td><td>${esc(a.type)}</td><td>${esc(a.ref||'-')}</td><td>${a.qty||0}</td><td>${money(a.amount||0)}</td><td>${esc(a.place)||'—'}</td><td>${esc(a.by)||'—'}</td><td>${esc(a.note)}</td><td>${actionBtns('tx',a.id)}</td></tr>`).join('')||'<tr><td colspan="9">No transactions yet.</td></tr>';
document.getElementById('recentAnimals').innerHTML=state.animals.slice(-5).reverse().map(a=>`<div class="mini-item" data-id="${esc(a.id||a.code)}"><span><b>${esc(a.code)}</b><small>${esc(a.type)} · ${esc(a.gender)}</small></span><span class="mini-value">${money(a.qty*a.currentValue)}</span></div>`).join('')||'<div class="mini-item">No animals yet.</div>';document.querySelectorAll('#recentAnimals .mini-item[data-id]').forEach(r=>r.onclick=()=>openProfile(r.dataset.id));document.getElementById('recentTransactions').innerHTML=state.transactions.slice(-5).reverse().map(a=>`<div class="mini-item"><span><b>${esc(a.type)}</b><small>${esc(a.date)} · ${esc(a.note)}</small></span><span class="mini-value">${money(a.amount||0)}</span></div>`).join('')||'<div class="mini-item">No transactions yet.</div>';
const cats={};state.transactions.filter(a=>a.type==='EXPENSE').forEach(a=>cats[a.category]=(cats[a.category]||0)+a.amount);document.getElementById('expenseBreakdown').innerHTML=Object.entries(cats).map(([k,v])=>`<div class="metric-row"><span>${esc(k)}</span><b>${money(v)}</b></div>`).join('')||'<div class="metric-row"><span>No expenses recorded</span><b>—</b></div>';const exp=state.transactions.filter(a=>a.type==='EXPENSE');const catSum=k=>exp.filter(a=>a.category===k).reduce((s,a)=>s+a.amount,0);document.getElementById('expensePageTotal').textContent=money(x.expenses);document.getElementById('expenseTax').textContent=money(catSum('TAX'));document.getElementById('expenseFeed').textContent=money(catSum('FEED'));document.getElementById('expenseOther').textContent=money(exp.filter(a=>!['TAX','FEED'].includes(a.category)).reduce((s,a)=>s+a.amount,0));document.getElementById('expensesTable').innerHTML=exp.slice().reverse().map(a=>`<tr><td>${dateCell(a.date)}</td><td>${esc(a.category)}</td><td>${money(a.amount)}</td><td>${esc(a.by)||'—'}</td><td>${esc(a.note)||'—'}</td><td>${actionBtns('tx',a.id)}</td></tr>`).join('')||'<tr><td colspan="6">No expenses recorded.</td></tr>';
const max=Math.max(x.sales,x.expenses,x.value,1);document.getElementById('bars').innerHTML=[['in',x.sales,'Sales'],['out',x.expenses,'Expenses'],['value',x.value,'Value']].map(a=>`<div class="bar-col"><div class="bar ${a[0]}" style="height:${Math.max(5,a[1]/max*150)}px"></div><label>${a[2]}</label></div>`).join('');document.getElementById('today').textContent=new Date().toLocaleDateString(state.lang==='so'?'so-SO':'en-US',{weekday:'short',year:'numeric',month:'short',day:'numeric'});renderExtras();applyLang()}
function nextId(){const nums=state.animals.map(a=>{const m=String(a.code||'').match(/(\d+)$/);return m?+m[1]:0});return`SH-${String(Math.max(0,...nums)+1).padStart(3,'0')}`}
function openProfile(id){const a=state.animals.find(x=>(x.id||x.code)===id);if(!a)return;document.getElementById('profileTitle').textContent=a.code;document.getElementById('profileSub').textContent=`${a.type} · ${a.gender} · ${a.status}${a.place?' · from '+a.place:''}${a.date?' · '+a.date+' ('+dayName(a.date)+')':''}`;document.getElementById('pQty').textContent=a.qty;document.getElementById('pValue').textContent=money(a.qty*a.currentValue);document.getElementById('pPurchase').textContent=money(a.qty*a.purchasePrice);document.getElementById('pChange').textContent=money(a.qty*(a.currentValue-a.purchasePrice));const h=state.transactions.filter(x=>x.ref===a.code).slice().reverse();document.getElementById('profileHistory').innerHTML=h.map(x=>`<div class="history-item"><span><b>${esc(x.type)}</b><small>${esc(x.date)} · ${esc(x.note)}</small></span><b>${x.amount?money(x.amount):x.qty+' qty'}</b></div>`).join('')||'<div class="history-item">No activity recorded yet.</div>';$('pEdit').onclick=()=>{$('profileDialog').close();openEditAnimal(a.id||a.code)};$('pDelete').onclick=()=>{$('profileDialog').close();deleteAnimal(a.id||a.code)};document.getElementById('profileDialog').showModal()}
const stamp=todayISO;
function download(name,content,type){const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function dataMsg(text,ok=true){const m=document.getElementById('dataMessage');m.textContent=text;m.classList.toggle('error',!ok)}
const moveCount=k=>state.transactions.filter(a=>a.type===k).reduce((s,a)=>s+(+a.qty||0),0);

/* ---------- CSV: animals, transactions and summary in one Excel-friendly file ---------- */
function exportCSV(){
  const x=totals(),q=v=>{if(typeof v==='number')return String(v);let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return `"${s.replaceAll('"','""')}"`},line=r=>r.map(q).join(',');
  const rows=[['Animals'],['Animal ID','Type','Gender','Quantity','Purchase Price','Current Value','Status','Bought From','Date','Day','Recorded By'],...state.animals.map(a=>[a.code,a.type,a.gender,a.qty,a.purchasePrice,a.currentValue,a.status,a.place||'',a.date||'',dayName(a.date,false,'en'),a.by||'']),[],
    ['Transactions'],['Date','Day','Type','Reference','Quantity','Amount','Cost Amount','Category','Bought From','Recorded By','Note'],...state.transactions.map(a=>[a.date,dayName(a.date,false,'en'),a.type,a.ref||'',a.qty||0,a.amount||0,a.costAmount||0,a.category||'',a.place||'',a.by||'',a.note||'']),[],
    ['Summary'],['Currency',state.currency],['Opening capital',state.openingCapital],['Purchases',x.purchases],['Sales',x.sales],['Expenses',x.expenses],['Livestock value',x.value],['Current capital',x.currentCapital],['Net profit',x.profit]];
  download(`livestock-report-${stamp()}.csv`,'\ufeff'+rows.map(line).join('\r\n'),'text/csv;charset=utf-8');dataMsg('CSV downloaded.')
}

/* ---------- JSON backup ---------- */
function exportJSON(){
  const data={app:'livestock-accounting-system',version:4,exportedAt:new Date().toISOString(),currency:state.currency,openingCapital:state.openingCapital,animals:state.animals,transactions:state.transactions};
  download(`livestock-backup-${stamp()}.json`,JSON.stringify(data,null,2),'application/json');dataMsg('JSON backup downloaded.')
}
function cleanImport(d){
  if(!d||typeof d!=='object'||(!Array.isArray(d.animals)&&!Array.isArray(d.transactions)))throw new Error('This file is not a Livestock backup.');
  const num=v=>Number.isFinite(Number(v))?Number(v):0,str=v=>v==null?'':String(v);
  const animals=(d.animals||[]).filter(a=>a&&str(a.code)).map(a=>({id:str(a.id)||(crypto.randomUUID?crypto.randomUUID():Date.now()+Math.random()+''),code:str(a.code),type:str(a.type)||'Other',gender:str(a.gender),qty:num(a.qty),purchasePrice:num(a.purchasePrice),currentValue:num(a.currentValue),status:str(a.status)||'live',place:str(a.place),date:str(a.date),by:str(a.by)}));
  const transactions=(d.transactions||[]).filter(x=>x&&str(x.type)).map(x=>({id:str(x.id)||newId(),place:str(x.place),by:str(x.by),date:str(x.date),type:str(x.type),ref:str(x.ref),qty:num(x.qty),amount:num(x.amount),costAmount:num(x.costAmount),category:str(x.category),note:str(x.note)}));
  const currency=['ETB','USD','SLSH'].includes(d.currency)?d.currency:state.currency;
  return{animals,transactions,currency,openingCapital:typeof d.openingCapital==='undefined'?state.openingCapital:Math.max(0,num(d.openingCapital))}
}
function importJSONFile(file){
  const r=new FileReader();
  r.onerror=()=>dataMsg('Could not read this file.',false);
  r.onload=async()=>{let d;try{d=cleanImport(JSON.parse(r.result))}catch(err){dataMsg(err instanceof SyntaxError?'Invalid JSON file.':err.message,false);return}
    const ok=await askPin({title:'Import data?',message:`This replaces all current data with ${d.animals.length} animals and ${d.transactions.length} transactions from the file.`,action:'Import',danger:true});
    if(!ok){dataMsg('Import cancelled.');return}
    Object.assign(state,d);normalizeData();save();render();syncCapitalForm();dataMsg(`Imported ${d.animals.length} animals and ${d.transactions.length} transactions.`)};
  r.readAsText(file)
}

/* ---------- PDF: real, data-only report built without any library ---------- */
function pdfData(o){
  const inR=d=>(!o.from||(d&&d>=o.from))&&(!o.to||(d&&d<=o.to)),byOk=x=>!o.user||(o.user==='__none'?!x.by:x.by===o.user),plOk=x=>!o.place||x.place===o.place;
  return{animals:state.animals.filter(a=>inR(a.date)&&plOk(a)&&byOk(a)),movement:state.transactions.filter(x=>inR(x.date)&&(!o.type||x.type===o.type)&&plOk(x)&&byOk(x)),expenses:state.transactions.filter(x=>x.type==='EXPENSE'&&inR(x.date)&&byOk(x))}
}
function buildPDF(o){
  const x=totals(),d=pdfData(o),W=595.28,H=841.89,M=42,pages=[];
  const HW=[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];
  const norm=s=>String(s??'').replace(/[‘’‚′]/g,"'").replace(/[“”„]/g,'"').replace(/[–—]/g,'-').replace(/…/g,'...').replace(/[^\x20-\x7e\xa0-\xff]/g,'?');
  const pe=s=>norm(s).replace(/[\\()]/g,'\\$&');
  const tw=(s,size,bold)=>norm(s).split('').reduce((a,c)=>{const k=c.charCodeAt(0);return a+(k>=32&&k<=126?HW[k-32]:556)},0)*size/1000*(bold?1.06:1);
  const fit=(s,w,size,bold)=>{s=norm(s);if(tw(s,size,bold)<=w)return s;while(s.length>1&&tw(s+'...',size,bold)>w)s=s.slice(0,-1);return s+'...'};
  const C={ink:'0.08 0.13 0.10',muted:'0.40 0.47 0.43',line:'0.86 0.89 0.86',deep:'0.06 0.23 0.15',tag:'0.95 0.77 0.19'};
  let ops,y;
  const text=(px,top,s,size,bold,col,align)=>{const w=tw(s,size,bold),X=align==='right'?px-w:align==='center'?px-w/2:px;ops.push(`BT /F${bold?2:1} ${size} Tf ${C[col||'ink']} rg ${X.toFixed(2)} ${(H-top).toFixed(2)} Td (${pe(s)}) Tj ET`)};
  const rule=(top,col,wd)=>ops.push(`${wd||.6} w ${C[col||'line']} RG ${M} ${(H-top).toFixed(2)} m ${W-M} ${(H-top).toFixed(2)} l S`);
  const newPage=()=>{ops=[];pages.push(ops);y=M;if(pages.length>1){text(M,y+8,'Livestock Accounting Report',9,false,'muted');rule(y+16);y+=34}};
  const need=h=>{if(y+h>H-M-24)newPage()};
  const pm=n=>`${state.currency} ${Number(n||0).toLocaleString('en-US',{maximumFractionDigits:2})}`;
  const dt=s=>s?`${s} ${dayName(s,true,'en')}`:'-';
  const section=(t,note)=>{need(90);y+=30;text(M,y,t,13,true,'deep');y+=8;rule(y,'deep',1);y+=4;if(note){y+=12;text(M,y,note,8.5,false,'muted');y+=2}};
  const kv=rows=>rows.forEach(([k,v,b])=>{need(20);y+=17;text(M,y,k,10,!!b,b?'ink':'muted');text(W-M,y,v,10,!!b,'ink','right');rule(y+5)});
  const table=(cols,rows,total)=>{
    const fs=8.5,head=()=>{need(40);y+=16;let px=M;cols.forEach(c=>{text(c.r?px+c.w-6:px+6,y,c.h,fs,true,'muted',c.r?'right':'left');px+=c.w});rule(y+5,'muted',.8)};
    const cells=(r,bold)=>{let px=M;cols.forEach((c,i)=>{const s=r[i]==null?'':String(r[i]);text(c.r?px+c.w-6:px+6,y,c.r?s:fit(s,c.w-12,fs,bold),fs,bold,'ink',c.r?'right':'left');px+=c.w})};
    head();
    if(!rows.length){y+=18;text(M+6,y,'No records.',9,false,'muted');return}
    rows.forEach(r=>{if(y+20>H-M-24){newPage();head()}y+=18;cells(r,false);rule(y+5)});
    if(total){if(y+22>H-M-24){newPage();head()}y+=18;cells(total,true);rule(y+5,'deep',1)}
  };
  const filters=[];if(o.from||o.to)filters.push(`Period: ${o.from||'start'} to ${o.to||'today'}`);if(o.type)filters.push(`Movement: ${o.type}`);if(o.place)filters.push(`Bought from: ${o.place}`);if(o.user)filters.push(`User: ${o.user==='__none'?'(no user)':o.user}`);
  newPage();
  y=M+14;text(M,y,'Livestock Accounting Report',22,true,'deep');
  y+=20;text(M,y,`Generated ${todayISO()} ${dayName(todayISO(),true,'en')}  |  Currency: ${state.currency}`,10,false,'muted');
  y+=14;text(M,y,filters.length?filters.join('  |  '):'All records',10,false,'muted');
  y+=12;ops.push(`${C.tag} rg ${M} ${(H-y-3).toFixed(2)} 48 3 re f`);y+=6;
  const S=o.sections;
  if(S.summary){
    section('Capital summary',filters.length?'Summary figures cover all records, not only the filtered ones.':'');
    kv([['Opening capital',pm(state.openingCapital)],['Purchases',pm(x.purchases)],['Sales',pm(x.sales)],['Expenses',pm(x.expenses)],['Livestock value',pm(x.value)],['Current capital',pm(x.currentCapital),1]]);
    section('Profit & loss');
    kv([['Sales revenue',pm(x.sales)],['Cost of animals sold',pm(x.costSold)],['Operating expenses',pm(x.expenses)],['Valuation change',pm(x.valuation)],['Net profit',pm(x.profit),1]]);
    section('Animal movement');
    kv([['Purchased',String(moveCount('PURCHASE'))],['Born',String(moveCount('BIRTH'))],['Sold',String(moveCount('SALE'))],['Died',String(moveCount('DEATH'))],['Current animals',String(x.qty),1]]);
  }
  if(S.animals){
    section('Animals');
    const q=d.animals.reduce((s,a)=>s+a.qty,0),pv=d.animals.reduce((s,a)=>s+a.qty*a.purchasePrice,0),cv=d.animals.reduce((s,a)=>s+a.qty*a.currentValue,0);
    table([{h:'Animal ID',w:52},{h:'Type',w:42},{h:'Gender',w:42},{h:'Qty',w:24,r:1},{h:'Bought from',w:72},{h:'Date',w:82},{h:'Purchase',w:82,r:1},{h:'Value',w:82,r:1},{h:'Status',w:33}],d.animals.map(a=>[a.code,a.type,a.gender,a.qty,a.place||'-',dt(a.date),pm(a.qty*a.purchasePrice),pm(a.qty*a.currentValue),a.status]),d.animals.length?['Total','','',q,'','',pm(pv),pm(cv),'']:null);
  }
  if(S.movement){
    section('Movement');
    table([{h:'Date',w:82},{h:'Type',w:54},{h:'Reference',w:62},{h:'Qty',w:26,r:1},{h:'Amount',w:80,r:1},{h:'Bought from',w:60},{h:'By',w:45},{h:'Note',w:102}],d.movement.map(a=>[dt(a.date),a.type,a.ref||'-',a.qty||0,pm(a.amount),a.place||'-',a.by||'-',a.note||'']),o.type&&d.movement.length?['Total','','',d.movement.reduce((s,a)=>s+(+a.qty||0),0),pm(d.movement.reduce((s,a)=>s+a.amount,0)),'','','']:null);
  }
  if(S.expenses){
    section('Expenses');
    table([{h:'Date',w:86},{h:'Category',w:80},{h:'Amount',w:90,r:1},{h:'By',w:60},{h:'Note',w:195}],d.expenses.map(a=>[dt(a.date),a.category||'',pm(a.amount),a.by||'-',a.note||'']),d.expenses.length?['Total','',pm(d.expenses.reduce((s,a)=>s+a.amount,0)),'','']:null);
  }
  pages.forEach((p,i)=>{ops=p;rule(H-M+6);text(M,H-M+20,'Livestock Accounting System',8,false,'muted');text(W-M,H-M+20,`Page ${i+1} of ${pages.length}`,8,false,'muted','right')});
  const objs=[],add=s=>objs.push(s)&&objs.length;
  add('<< /Type /Catalog /Pages 2 0 R >>');
  add(`<< /Type /Pages /Kids [${pages.map((_,i)=>`${6+i*2} 0 R`).join(' ')}] /Count ${pages.length} >>`);
  add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  add('<< /Title (Livestock Accounting Report) /Producer (Livestock Accounting System) >>');
  pages.forEach((p,i)=>{const c=p.join('\n');add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${7+i*2} 0 R >>`);add(`<< /Length ${c.length} >>\nstream\n${c}\nendstream`)});
  let out='%PDF-1.4\n',offs=[];
  objs.forEach((ob,i)=>{offs.push(out.length);out+=`${i+1} 0 obj\n${ob}\nendobj\n`});
  const xr=out.length;
  out+=`xref\n0 ${objs.length+1}\n0000000000 65535 f \n${offs.map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('')}trailer\n<< /Size ${objs.length+1} /Root 1 0 R /Info 5 0 R >>\nstartxref\n${xr}\n%%EOF`;
  const bytes=new Uint8Array(out.length);for(let i=0;i<out.length;i++)bytes[i]=out.charCodeAt(i)&255;
  return bytes
}
function exportPDF(o){download(`livestock-report-${todayISO()}.pdf`,buildPDF(o),'application/pdf');dataMsg('PDF downloaded.');showToast('PDF downloaded')}


document.getElementById('addAnimalBtn').onclick=openAnimalDialog;document.getElementById('addAnimalBtn2').onclick=openAnimalDialog;document.getElementById('profileClose').onclick=()=>document.getElementById('profileDialog').close();document.getElementById('animalSearch').oninput=render;
let generatedAnimalRows=[];
function nextAnimalNumber(){const nums=state.animals.map(a=>{const m=String(a.code||'').match(/(\d+)$/);return m?+m[1]:0});return Math.max(0,...nums)+1}
function makeAnimalCode(n){return `SH-${String(n).padStart(3,'0')}`}
const genderOpts=v=>['Female','Male'].map(g=>`<option${g===v?' selected':''}>${g}</option>`).join('');
function setDay(input){const chip=input.closest('label')?.querySelector('.day-chip');if(chip)chip.textContent=input.value?dayName(input.value):''}
function generateAnimalInputs(){
  const old=[...document.querySelectorAll('#animalInputs .animal-row')].map(r=>({g:r.querySelector('.row-gender').value,p:r.querySelector('.row-purchase').value,c:r.querySelector('.row-current').value,pl:r.querySelector('.row-place').value,d:r.querySelector('.row-date').value,f:{...r.dataset}}));
  const qty=Math.max(1,Math.min(500,+$('animalQty').value||1)),type=$('animalType').value,dp=$('animalPurchase').value,dc=$('animalCurrent').value,dpl=$('animalPlace').value,dd=$('animalDate').value||todayISO(),startNo=nextAnimalNumber();
  generatedAnimalRows=[];
  $('animalInputs').innerHTML=Array.from({length:qty},(_,i)=>{const id=makeAnimalCode(startNo+i),o=old[i]||{f:{}};generatedAnimalRows.push(id);
    const p=o.f.mp?o.p:dp,c=o.f.mc?o.c:dc,pl=o.f.mpl?o.pl:dpl,d=o.f.md?o.d:dd;
    return `<div class="animal-row"${o.f.mp?' data-mp="1"':''}${o.f.mc?' data-mc="1"':''}${o.f.mpl?' data-mpl="1"':''}${o.f.md?' data-md="1"':''}><div class="animal-row-id"><span>${i+1}</span><strong>${id}</strong><small>${esc(type)}</small></div><label>Gender<select class="row-gender">${genderOpts(o.g)}</select></label><label>Purchase<input class="row-purchase" type="number" min="0" step="0.01" value="${esc(p)}"></label><label>Current value<input class="row-current" type="number" min="0" step="0.01" value="${esc(c)}"></label><label class="span2">Bought from<input class="row-place" list="placeList" autocomplete="off" value="${esc(pl)}"></label><label class="span2">Date <span class="day-chip">${esc(dayName(d))}</span><input class="row-date" type="date" required value="${esc(d)}"></label></div>`}).join('');
  $('generatedTitle').textContent=`${qty} animal input${qty===1?'':'s'}`
}
function applyDefault(field){const map={purchase:['animalPurchase','.row-purchase','mp'],current:['animalCurrent','.row-current','mc'],place:['animalPlace','.row-place','mpl'],date:['animalDate','.row-date','md']},[src,sel,flag]=map[field],v=$(src).value;document.querySelectorAll('#animalInputs .animal-row').forEach(r=>{if(r.dataset[flag])return;const el=r.querySelector(sel);el.value=(field==='date'&&!v)?todayISO():v;if(field==='date')setDay(el)})}
function openAnimalDialog(){$('animalFormMessage').textContent='';$('animalForm').reset();$('animalInputs').innerHTML='';$('animalDate').value=todayISO();setDay($('animalDate'));$('animalDialog').showModal();generateAnimalInputs()}
['animalQty','animalType'].forEach(id=>{$(id).addEventListener('input',generateAnimalInputs);$(id).addEventListener('change',generateAnimalInputs)});
[['animalPurchase','purchase'],['animalCurrent','current'],['animalPlace','place'],['animalDate','date']].forEach(([id,f])=>$(id).addEventListener('input',()=>{if(f==='date')setDay($(id));applyDefault(f)}));
$('animalInputs').addEventListener('input',e=>{const r=e.target.closest('.animal-row');if(!r)return;const m={'row-purchase':'mp','row-current':'mc','row-place':'mpl','row-date':'md'};for(const c in m)if(e.target.classList.contains(c)){r.dataset[m[c]]='1';if(c==='row-date')setDay(e.target)}});
$('animalForm').onsubmit=e=>{e.preventDefault();const rows=[...document.querySelectorAll('#animalInputs .animal-row')],type=$('animalType').value,msg=$('animalFormMessage');
  if(!rows.length){msg.textContent='Set a quantity first.';return}
  const codes=rows.map(r=>r.querySelector('.animal-row-id strong').textContent);
  if(codes.some(c=>state.animals.some(a=>a.code===c))){msg.textContent='Generated Animal ID already exists. Close and reopen the form.';return}
  rows.forEach((r,i)=>{const code=codes[i],gender=r.querySelector('.row-gender').value,p=+r.querySelector('.row-purchase').value||0,c=+r.querySelector('.row-current').value||0,place=r.querySelector('.row-place').value.trim(),date=r.querySelector('.row-date').value||todayISO(),by=state.user;
    state.animals.push({id:newId(),code,type,gender,qty:1,purchasePrice:p,currentValue:c,status:'live',place,date,by});
    state.transactions.push({id:newId(),date,type:'PURCHASE',ref:code,qty:1,amount:p,costAmount:0,note:'Initial animal purchase',place,by})});
  save();render();$('animalDialog').close();showToast(`${rows.length} animal${rows.length===1?'':'s'} added`)};
document.getElementById('expenseForm').onsubmit=e=>{e.preventDefault();const amount=+document.getElementById('expenseAmount').value||0;if(amount<=0){document.getElementById('expenseFormMessage').textContent='Enter an expense amount greater than 0.';return}state.transactions.push({id:newId(),by:state.user,place:'',date:document.getElementById('expenseDate').value,type:'EXPENSE',ref:'EXP-'+Date.now(),qty:0,amount,costAmount:0,category:document.getElementById('expenseCategory').value,note:document.getElementById('expenseNote').value.trim()});save();render();e.target.reset();document.getElementById('expenseDate').value=todayISO();document.getElementById('expenseFormMessage').textContent='Expense saved successfully.'};document.getElementById('expenseDate').value=todayISO();
document.getElementById('capitalForm').onsubmit=e=>{e.preventDefault();const v=Number(document.getElementById('openingInput').value),m=document.getElementById('capitalMessage');if(!Number.isFinite(v)||v<0){m.textContent='Enter an opening capital of 0 or more.';return}state.currency=document.getElementById('currency').value;state.openingCapital=v;save();render();m.textContent='Capital saved. Current capital is '+money(totals().currentCapital)+'.'};document.getElementById('currency').value=state.currency;document.getElementById('openingInput').value=state.openingCapital;
document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>go(b.dataset.page));document.querySelectorAll('[data-page-link]').forEach(b=>b.onclick=()=>document.querySelector('[data-page="'+b.dataset.pageLink+'"]').click());document.getElementById('darkMode').checked=state.dark;document.body.classList.toggle('dark',state.dark);document.getElementById('darkMode').onchange=e=>{state.dark=e.target.checked;document.body.classList.toggle('dark',state.dark);save()};document.getElementById('language').onchange=e=>{state.lang=e.target.value;save();render()};document.getElementById('csvBtn').onclick=exportCSV;document.getElementById('jsonBtn').onclick=exportJSON;document.getElementById('pdfBtn').onclick=openPdfDialog;document.getElementById('importJson').onchange=e=>{const f=e.target.files[0];e.target.value='';if(f)importJSONFile(f)};document.getElementById('logoutBtn').onclick=()=>{alert('Local demo session ended.');location.reload()};

/* ===== v2.5: data hygiene, PIN, edit/delete, PDF picker ===== */
function normalizeData(){state.transactions.forEach(x=>{if(!x.id)x.id=newId()});state.animals.forEach(a=>{if(!a.id)a.id=newId();if(a.place==null)a.place='';if(!a.date){const p=state.transactions.find(x=>x.type==='PURCHASE'&&x.ref===a.code);a.date=p?.date||''}})}
function showToast(msg){const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(showToast.tm);showToast.tm=setTimeout(()=>el.classList.remove('show'),2800)}
function renderExtras(){
  const places=[...new Set([...state.animals,...state.transactions].map(x=>(x.place||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  $('placeList').innerHTML=places.map(p=>`<option value="${esc(p)}">`).join('');
  const sel=$('placeFilter'),cur=sel.value;sel.innerHTML=`<option value="">${esc(t[state.lang].allPlaces)}</option>`+places.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('');sel.value=cur;
  if(cur&&sel.value!==cur){sel.value='';render();return}
  if(document.activeElement!==$('userName'))$('userName').value=state.user;
  $('pinStatus').textContent=hasPin()?'PIN is set':'No PIN set yet';$('pinBtn').textContent=hasPin()?'Change PIN':'Set PIN'
}

/* ---- PIN ---- */
const hasPin=()=>!!localStorage.getItem('pinHash');
async function hashPin(pin,salt){const enc=new TextEncoder();if(window.crypto&&crypto.subtle){const k=await crypto.subtle.importKey('raw',enc.encode(pin),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(salt),iterations:150000,hash:'SHA-256'},k,256);return[...new Uint8Array(bits)].map(b=>b.toString(16).padStart(2,'0')).join('')}let h=5381;const s=salt+pin;for(let r=0;r<20000;r++)for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i)+r)|0;return'f'+(h>>>0).toString(16)}
function askPin(o={}){
  return new Promise(resolve=>{
    const d=$('pinDialog'),creating=o.mode==='create'||(!o.mode&&!hasPin());let done=false;
    const finish=v=>{if(done)return;done=true;d.close();resolve(v)};
    $('pinTitle').textContent=creating?(o.createTitle||'Create a PIN'):(o.title||'Enter PIN');
    $('pinMessage').textContent=creating?'Choose a secret number of 4 to 8 digits. You will be asked for it whenever data is deleted or imported.'+(o.message?'\n\n'+o.message:''):(o.message||'Enter your PIN to continue.');
    $('pinConfirmRow').hidden=!creating;$('pinInput').value='';$('pinInput2').value='';$('pinError').textContent='';
    const ok=$('pinOk');ok.textContent=creating?'Save PIN':(o.action||'Confirm');ok.className=(o.danger&&!creating)?'danger-solid':'primary';
    $('pinForm').onsubmit=async e=>{e.preventDefault();const err=$('pinError'),pin=$('pinInput').value.trim();
      if(!/^\d{4,8}$/.test(pin)){err.textContent='PIN must be 4 to 8 digits.';return}
      if(creating){if(pin!==$('pinInput2').value.trim()){err.textContent='The two PINs do not match.';return}
        const salt=Array.from(crypto.getRandomValues(new Uint8Array(12)),b=>b.toString(16).padStart(2,'0')).join('');
        localStorage.setItem('pinSalt',salt);localStorage.setItem('pinHash',await hashPin(pin,salt));finish(true);renderExtras();return}
      const lock=+sessionStorage.getItem('pinLock')||0;if(Date.now()<lock){err.textContent=`Too many wrong attempts. Try again in ${Math.ceil((lock-Date.now())/1000)}s.`;return}
      if(await hashPin(pin,localStorage.getItem('pinSalt'))===localStorage.getItem('pinHash')){sessionStorage.removeItem('pinFails');finish(true)}
      else{const f=(+sessionStorage.getItem('pinFails')||0)+1;if(f>=5){sessionStorage.setItem('pinLock',Date.now()+60000);sessionStorage.setItem('pinFails',0);err.textContent='Too many wrong attempts. Locked for 60 seconds.'}else{sessionStorage.setItem('pinFails',f);err.textContent=`Wrong PIN. ${5-f} attempt${5-f===1?'':'s'} left.`}$('pinInput').value='';$('pinInput').focus()}};
    $('pinCancel').onclick=()=>finish(false);d.onclose=()=>finish(false);
    d.showModal();$('pinInput').focus()})}
$('pinBtn').onclick=async()=>{if(hasPin()&&!await askPin({title:'Change PIN',message:'Enter your current PIN.',action:'Continue'}))return;if(await askPin({mode:'create',createTitle:hasPin()?'New PIN':'Create a PIN'}))showToast('PIN saved')};
$('userName').onchange=e=>{state.user=e.target.value.trim()||'Admin';e.target.value=state.user;save();showToast('Name saved')};

/* ---- edit / delete ---- */
const findAnimal=id=>state.animals.find(a=>(a.id||a.code)===id),findTx=id=>state.transactions.find(x=>x.id===id);
function setSelect(sel,v){if(v&&![...sel.options].some(o=>o.value===v))sel.appendChild(new Option(v,v));sel.value=v}
let editAnimalId=null,editTxId=null;
function openEditAnimal(id){const a=findAnimal(id);if(!a)return;editAnimalId=a.id||a.code;$('eaCode').value=a.code;setSelect($('eaType'),a.type);setSelect($('eaGender'),a.gender||'Female');setSelect($('eaStatus'),a.status||'live');$('eaQty').value=a.qty;$('eaPurchase').value=a.purchasePrice;$('eaCurrent').value=a.currentValue;$('eaPlace').value=a.place||'';$('eaDate').value=a.date||todayISO();setDay($('eaDate'));$('editAnimalMessage').textContent='';$('editAnimalDialog').showModal()}
$('editAnimalForm').onsubmit=e=>{e.preventDefault();const a=findAnimal(editAnimalId),m=$('editAnimalMessage');if(!a)return;
  const code=$('eaCode').value.trim(),qty=Math.floor(+$('eaQty').value),p=+$('eaPurchase').value,c=+$('eaCurrent').value;
  if(!code){m.textContent='Animal ID is required.';return}
  if(state.animals.some(x=>x!==a&&x.code.toLowerCase()===code.toLowerCase())){m.textContent='Another animal already uses this ID.';return}
  if(!(qty>=1)||!(p>=0)||!(c>=0)){m.textContent='Check the quantity and prices.';return}
  const old=a.code,place=$('eaPlace').value.trim(),date=$('eaDate').value,pt=state.transactions.find(x=>x.type==='PURCHASE'&&x.ref===old);
  Object.assign(a,{id:a.id||newId(),code,type:$('eaType').value,gender:$('eaGender').value,status:$('eaStatus').value,qty,purchasePrice:p,currentValue:c,place,date});
  state.transactions.forEach(x=>{if(x.ref===old)x.ref=code});
  if(pt)Object.assign(pt,{qty,amount:qty*p,date,place});
  save();render();$('editAnimalDialog').close();showToast('Animal updated')};
function openEditTx(id){const x=findTx(id);if(!x)return;editTxId=id;$('etDate').value=x.date||todayISO();setDay($('etDate'));$('etType').value=x.type;$('etRef').value=x.ref||'';$('etQty').value=x.qty||0;$('etAmount').value=x.amount||0;$('etPlace').value=x.place||'';$('etNote').value=x.note||'';const isExp=x.type==='EXPENSE';$('etCatRow').hidden=!isExp;if(isExp){$('etCategory').innerHTML=$('expenseCategory').innerHTML;setSelect($('etCategory'),x.category||'OTHER')}$('editTxMessage').textContent='';$('editTxDialog').showModal()}
$('editTxForm').onsubmit=e=>{e.preventDefault();const x=findTx(editTxId),m=$('editTxMessage');if(!x)return;
  const amount=+$('etAmount').value,qty=Math.max(0,Math.floor(+$('etQty').value||0));
  if(!(amount>=0)||(x.type==='EXPENSE'&&amount<=0)){m.textContent='Enter a valid amount.';return}
  Object.assign(x,{date:$('etDate').value,amount,qty,place:$('etPlace').value.trim(),note:$('etNote').value.trim()});
  if(x.type==='EXPENSE')x.category=$('etCategory').value;
  if(x.type==='PURCHASE'){const a=state.animals.find(z=>z.code===x.ref);if(a){if(a.qty>0)a.purchasePrice=amount/a.qty;a.date=x.date;a.place=x.place}}
  save();render();$('editTxDialog').close();showToast('Record updated')};
async function deleteAnimal(id){const a=findAnimal(id);if(!a)return;const rel=state.transactions.filter(x=>x.ref===a.code).length;
  if(!await askPin({title:`Delete ${a.code}?`,message:`This removes the animal${rel?` and ${rel} related record${rel>1?'s':''}`:''}. It cannot be undone.`,action:'Delete',danger:true}))return;
  state.animals=state.animals.filter(x=>x!==a);state.transactions=state.transactions.filter(x=>x.ref!==a.code);save();render();showToast(`${a.code} deleted`)}
async function deleteTx(id){const x=findTx(id);if(!x)return;
  if(!await askPin({title:`Delete this ${x.type.toLowerCase()} record?`,message:`${x.date||''} · ${money(x.amount||0)}${x.note?' · '+x.note:''}\nIt cannot be undone.`,action:'Delete',danger:true}))return;
  state.transactions=state.transactions.filter(z=>z!==x);save();render();showToast('Record deleted')}
document.addEventListener('click',e=>{const c=e.target.closest('[data-close]');if(c){c.closest('dialog').close();return}const b=e.target.closest('[data-act]');if(!b)return;const{act,kind,id}=b.dataset;if(kind==='animal')act==='edit'?openEditAnimal(id):deleteAnimal(id);else act==='edit'?openEditTx(id):deleteTx(id)});
['etDate','eaDate'].forEach(id=>$(id).addEventListener('input',()=>setDay($(id))));
$('placeFilter').onchange=render;

/* ---- PDF picker ---- */
function pdfOpts(){return{sections:{summary:$('pdfSummary').checked,animals:$('pdfAnimals').checked,movement:$('pdfMovement').checked,expenses:$('pdfExpenses').checked},from:$('pdfFrom').value,to:$('pdfTo').value,type:$('pdfType').value,place:$('pdfPlace').value,user:$('pdfUser').value}}
function updatePdfCount(){const o=pdfOpts(),d=pdfData(o),m=$('pdfCount'),btn=$('pdfGo');setDay($('pdfFrom'));setDay($('pdfTo'));
  const parts=[];if(o.sections.animals)parts.push(`${d.animals.length} animal${d.animals.length===1?'':'s'}`);if(o.sections.movement)parts.push(`${d.movement.length} movement record${d.movement.length===1?'':'s'}`);if(o.sections.expenses)parts.push(`${d.expenses.length} expense${d.expenses.length===1?'':'s'}`);
  let msg='',bad=false;if(!Object.values(o.sections).some(Boolean)){msg='Select at least one section.';bad=true}else if(o.from&&o.to&&o.from>o.to){msg='The From date is after the To date.';bad=true}else msg=(parts.length?parts.join(' · '):'Summary only')+' will be included.';
  m.textContent=msg;m.classList.toggle('error',bad);btn.disabled=bad}
function openPdfDialog(){
  const opt=(v,l)=>`<option value="${esc(v)}">${esc(l)}</option>`,all=[...state.animals,...state.transactions];
  $('pdfType').innerHTML=opt('','All movement')+[...new Set(state.transactions.map(x=>x.type))].sort().map(v=>opt(v,v)).join('');
  $('pdfPlace').innerHTML=opt('','All places')+[...new Set(all.map(x=>(x.place||'').trim()).filter(Boolean))].sort().map(v=>opt(v,v)).join('');
  const users=[...new Set([state.user,...all.map(x=>x.by).filter(Boolean)])].sort();
  $('pdfUser').innerHTML=opt('','All users')+users.map(v=>opt(v,v)).join('')+(all.some(x=>!x.by)?opt('__none','(no user recorded)'):'');
  ['pdfSummary','pdfAnimals','pdfMovement','pdfExpenses'].forEach(id=>$(id).checked=true);$('pdfFrom').value='';$('pdfTo').value='';
  updatePdfCount();$('pdfDialog').showModal()}
$('pdfForm').addEventListener('input',updatePdfCount);$('pdfForm').addEventListener('change',updatePdfCount);
$('pdfForm').onsubmit=e=>{e.preventDefault();if($('pdfGo').disabled)return;exportPDF(pdfOpts());$('pdfDialog').close()};
normalizeData();
render();
