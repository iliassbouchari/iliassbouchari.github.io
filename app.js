/* Portfolio enhancements (vanilla JS). Edit LINKS and PROJ urls below to fill the TODOs. */
(function(){"use strict";
var LINKS={credly:"https://www.credly.com/users/iliass-bouchari/badges/credly"}; /* TODO: paste your profile URLs */
var PROJ=[{k:"ad",url:"",chips:["Active Directory", "Windows Server", "DNS", "OU"]},{k:"js",url:"",chips:["PowerShell", "Active Directory", "DNS"]},{k:"gp",url:"",chips:["GPO", "PowerShell", "MSI", "Office 2016"]},{k:"sc",url:"",chips:["PowerShell", "GPO", "WinRE", "HP BIOS"]},{k:"hd",url:"",chips:["Hiren's Boot CD PE", "BIOS", "Printers", "Troubleshooting"]},{k:"fg",url:"",chips:["Fortinet", "FortiGate", "FortiOS", "Firewall"]}]; /* TODO: write-up URLs */
var X={
en:{avail:"Available for internship \u00b7 Casablanca",proj:"Projects & labs",view:"View write-up",todo:"Link to be added",
projects:[["Active Directory domain for the CMC campus", "Single domain with OUs per sector and room, plus a naming convention for every workstation."], ["PowerShell domain-join automation", "USB script that sets DNS, renames the PC and joins the domain: about 20 min cut to under 3 per PC."], ["Software deployment with GPO", "Silent installs of MSI and EXE software per sector, plus Office 365 removal and Office 2016 rollout."], ["Workstation security hardening", "WinRE and CMD access blocked, utilman.exe restored, HP BIOS passwords and local accounts managed by script and GPO."], ["Helpdesk and low-level repairs", "BIOS lock bypass, boot repair with Hiren's Boot CD PE, network printers and audio setup."], ["FortiGate firewall introduction", "Hands-on session on the CMC FortiGate: FortiOS interface, logs, security policies and dashboard."]],
stats:[[850,"+","PCs managed"],[5,"","interns supervised"],[3,"","CCNA levels"],[3,"","internships"]],
topo:"Skills map",hint:"Tap or focus a node to highlight the related skills below.",
nodes:{net:["Internet","Internet edge \u00b7 DNS \u00b7 HTTP"],fw:["Firewall","Fortinet FGT/FAP/EMS \u00b7 IPSec/SSL"],sw:["Core switch","Cisco \u00b7 LAN/WAN \u00b7 DHCP \u00b7 IPv4/IPv6"],ad:["Windows Server","Windows Server \u00b7 Active Directory \u00b7 DNS \u00b7 DHCP"],px:["Proxmox","Proxmox \u00b7 ESXi \u00b7 Nutanix"],dk:["Docker","Docker \u00b7 Ubuntu \u00b7 RedHat"],zb:["Zabbix","Zabbix monitoring"]},
tpick:"Select a node.",copy:"Copy",copied:"Email copied",soc:"Profiles",
term:"Terminal",ph:"type a command, e.g. help",cmdhint:"Quick commands",
help:"Commands: help, whoami, skills, experience, certs, projects, contact, ls, cat cv.pdf, clear, sudo hire-me",
nf:"command not found: ",dl:"Downloading cv.pdf ...",nofile:"cat: no such file: ",
sudo1:"[sudo] password for recruiter: ********",sudo2:"Access granted. Opening the contact section ...",sudo3:"recruiter is not in the sudoers file. This incident will be reported.",
nm:"Starting Nmap (demo output, simulated lab)",konami:"Konami code accepted. Matrix mode on.",sec:"Sections",
upt:"uptime"},
fr:{avail:"Disponible pour un stage \u00b7 Casablanca",proj:"Projets & labs",view:"Voir le write-up",todo:"Lien \u00e0 ajouter",
projects:[["Domaine Active Directory du campus CMC", "Domaine unique avec des OU par p\u00f4le et par salle, et une charte de nommage pour chaque poste."], ["Automatisation de la jonction au domaine (PowerShell)", "Script USB qui configure le DNS, renomme le poste et le joint au domaine : environ 20 min r\u00e9duites \u00e0 moins de 3 par poste."], ["D\u00e9ploiement logiciel par GPO", "Installation silencieuse de logiciels MSI et EXE par p\u00f4le, retrait d'Office 365 et d\u00e9ploiement d'Office 2016."], ["S\u00e9curisation des postes de travail", "Acc\u00e8s WinRE et CMD bloqu\u00e9s, utilman.exe restaur\u00e9, mots de passe BIOS HP et comptes locaux g\u00e9r\u00e9s par script et GPO."], ["Support de proximit\u00e9 et r\u00e9parations", "Contournement du verrou BIOS, r\u00e9paration du d\u00e9marrage avec Hiren's Boot CD PE, imprimantes r\u00e9seau et audio."], ["Initiation au pare-feu FortiGate", "Session pratique sur le FortiGate de la CMC : interface FortiOS, journaux, politiques de s\u00e9curit\u00e9 et tableau de bord."]],
stats:[[850,"+","PC g\u00e9r\u00e9s"],[5,"","stagiaires encadr\u00e9s"],[3,"","niveaux CCNA"],[3,"","stages"]],
topo:"Carte des comp\u00e9tences",hint:"Touchez ou s\u00e9lectionnez un n\u0153ud pour mettre en avant les comp\u00e9tences li\u00e9es.",
nodes:{net:["Internet","P\u00e9rim\u00e8tre Internet \u00b7 DNS \u00b7 HTTP"],fw:["Pare-feu","Fortinet FGT/FAP/EMS \u00b7 IPSec/SSL"],sw:["Commutateur c\u0153ur","Cisco \u00b7 LAN/WAN \u00b7 DHCP \u00b7 IPv4/IPv6"],ad:["Windows Server","Windows Server \u00b7 Active Directory \u00b7 DNS \u00b7 DHCP"],px:["Proxmox","Proxmox \u00b7 ESXi \u00b7 Nutanix"],dk:["Docker","Docker \u00b7 Ubuntu \u00b7 RedHat"],zb:["Zabbix","Supervision Zabbix"]},
tpick:"S\u00e9lectionnez un n\u0153ud.",copy:"Copier",copied:"E-mail copi\u00e9",soc:"Profils",
term:"Terminal",ph:"tapez une commande, ex. help",cmdhint:"Commandes rapides",
help:"Commandes : help, whoami, skills, experience, certs, projects, contact, ls, cat cv.pdf, clear, sudo hire-me",
nf:"commande introuvable : ",dl:"T\u00e9l\u00e9chargement de cv.pdf ...",nofile:"cat : fichier introuvable : ",
sudo1:"[sudo] mot de passe pour recruiter : ********",sudo2:"Acc\u00e8s accord\u00e9. Ouverture de la section contact ...",sudo3:"recruiter ne figure pas dans le fichier sudoers. Cet incident sera signal\u00e9.",
nm:"Starting Nmap (sortie de d\u00e9mo, lab simul\u00e9)",konami:"Konami code accept\u00e9. Mode Matrix activ\u00e9.",sec:"Sections",
upt:"uptime"}
};
var cur="fr",rm=matchMedia("(prefers-reduced-motion: reduce)").matches,IOok="IntersectionObserver" in window;
function $(i){return document.getElementById(i)}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
function toast(m){var t=$("toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(function(){t.classList.remove("on")},2200)}

/* ---------- reveal on scroll ---------- */
var rio=IOok&&!rm?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");rio.unobserve(e.target)}})},{threshold:.12}):null;
function reveal(root){var q=root.querySelectorAll(".sec,.tl,.pcard,.stat");for(var i=0;i<q.length;i++){if(rio&&!q[i].classList.contains("in")){q[i].classList.add("rv");rio.observe(q[i])}}}

/* ---------- name decrypt (once) ---------- */
var dec=false;
function decrypt(){if(dec)return;dec=true;var h=$("name");h.setAttribute("aria-label","Iliass Bouchari");if(rm)return;
var L=["ILIASS","BOUCHARI"],tot=14,C="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@",t0=null;
function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/900),n=Math.floor(p*tot),k=0,o=[];
for(var i=0;i<L.length;i++){var s="";for(var j=0;j<L[i].length;j++){s+=k<n?L[i][j]:C[Math.floor(Math.random()*C.length)];k++}o.push(s)}
h.innerHTML='<span aria-hidden="true">'+o.join("<br>")+"</span>";
if(p<1)requestAnimationFrame(f);else h.innerHTML="Iliass<br>Bouchari"}
requestAnimationFrame(f)}

/* ---------- network background ---------- */
function initNet(){var c=$("net"),hero=c.parentNode,x=c.getContext("2d"),W=0,H=0,N=[],P=[],col={a:"#c85a12",m:"#888"},run=true,vis=true,fr=0,ptr=null;
function cs(){var s=getComputedStyle(document.documentElement);col={a:s.getPropertyValue("--acc").trim()||col.a,m:s.getPropertyValue("--mute").trim()||col.m}}
function size(){var d=Math.min(devicePixelRatio||1,2);W=hero.clientWidth;H=hero.clientHeight;if(!W||!H)return;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
var mob=W<560,n=mob?14:Math.min(40,Math.round(W/38));N=[];for(var i=0;i<n;i++)N.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,sh:i%7==0,ph:Math.random()*6.3});P=[];cs();if(rm)draw(0)}
function R(){return W<560?95:125}
function near(a,b){var dx=a.x-b.x,dy=a.y-b.y,r=R();return dx*dx+dy*dy<r*r}
function draw(t){x.clearRect(0,0,W,H);x.lineWidth=1;
for(var i=0;i<N.length;i++)for(var j=i+1;j<N.length;j++)if(near(N[i],N[j])){x.globalAlpha=.35;x.strokeStyle=col.m;x.beginPath();x.moveTo(N[i].x,N[i].y);x.lineTo(N[j].x,N[j].y);x.stroke()}
for(var k=0;k<P.length;k++){var p=P[k],a=N[p.a],b=N[p.b];if(!a||!b)continue;var px=a.x+(b.x-a.x)*p.t,py=a.y+(b.y-a.y)*p.t;x.globalAlpha=1;x.fillStyle=col.a;x.shadowColor=col.a;x.shadowBlur=8;x.fillRect(px-2,py-2,4,4);x.shadowBlur=0}
for(i=0;i<N.length;i++){var n=N[i],hot=0;if(ptr){var dx=n.x-ptr.x,dy=n.y-ptr.y;hot=Math.max(0,1-Math.sqrt(dx*dx+dy*dy)/130)}
var pr=2.4+Math.sin(t*.003+n.ph)*.7+hot*2;x.globalAlpha=.55+hot*.45;x.strokeStyle=n.sh||hot>.2?col.a:col.m;x.fillStyle=x.strokeStyle;
if(n.sh){x.beginPath();x.moveTo(n.x,n.y-6);x.lineTo(n.x+5,n.y-3.5);x.lineTo(n.x+5,n.y+1.5);x.lineTo(n.x,n.y+6);x.lineTo(n.x-5,n.y+1.5);x.lineTo(n.x-5,n.y-3.5);x.closePath();x.globalAlpha=.25+hot*.3;x.fill();x.globalAlpha=1;x.stroke()}else{x.beginPath();x.arc(n.x,n.y,pr,0,6.3);x.fill()}}x.globalAlpha=1}
function step(){fr++;for(var i=0;i<N.length;i++){var n=N[i];if(ptr){var dx=ptr.x-n.x,dy=ptr.y-n.y,d=Math.sqrt(dx*dx+dy*dy);if(d<150&&d>20){n.vx+=dx/d*.004;n.vy+=dy/d*.004}}
n.vx=Math.max(-.5,Math.min(.5,n.vx*.995));n.vy=Math.max(-.5,Math.min(.5,n.vy*.995));n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1}
if(fr%26==0&&P.length<(W<560?3:6)){var a=Math.floor(Math.random()*N.length),best=-1;for(var j=0;j<N.length;j++)if(j!=a&&near(N[a],N[j])){best=j;if(Math.random()<.4)break}if(best>=0)P.push({a:a,b:best,t:0,s:.012+Math.random()*.012})}
for(var k=P.length-1;k>=0;k--){P[k].t+=P[k].s;if(P[k].t>=1)P.splice(k,1)}if(fr%60==0)cs()}
function loop(t){if(run&&vis){step();draw(t)}requestAnimationFrame(loop)}
function mv(e){var r=hero.getBoundingClientRect(),p=e.touches?e.touches[0]:e;ptr={x:p.clientX-r.left,y:p.clientY-r.top}}
if(!rm){hero.addEventListener("pointermove",mv,{passive:true});hero.addEventListener("touchmove",mv,{passive:true});hero.addEventListener("pointerleave",function(){ptr=null});hero.addEventListener("touchend",function(){ptr=null})}
if(window.ResizeObserver)new ResizeObserver(size).observe(hero);else addEventListener("resize",size);
document.addEventListener("visibilitychange",function(){run=!document.hidden;document.documentElement.classList.toggle("idle",document.hidden)});
if(IOok)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(hero);
$("theme").addEventListener("click",function(){setTimeout(function(){cs();if(rm)draw(0)},60)});
size();if(!rm)requestAnimationFrame(loop)}

/* ---------- counters ---------- */
var cio=IOok&&!rm?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(e.target);cio.unobserve(e.target)}})},{threshold:.4}):null;
function count(s){var n=+s.dataset.n,suf=s.dataset.s||"",t0=null;function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/1200),e=1-Math.pow(1-p,3);s.textContent=Math.round(n*e)+suf;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
function stats(t){var b=$("stats");b.innerHTML="";t.stats.forEach(function(s){var d=el("div","stat");d.setAttribute("role","group");d.setAttribute("aria-label",s[0]+s[1]+" "+s[2]);var n=el("b","",s[0]+s[1]);n.dataset.n=s[0];n.dataset.s=s[1];n.setAttribute("aria-hidden","true");d.appendChild(n);var l=el("span","",esc(s[2]));l.setAttribute("aria-hidden","true");d.appendChild(l);b.appendChild(d);if(cio){n.textContent="0"+s[1];cio.observe(n)}})}

/* ---------- projects ---------- */
function art(k){var a='<svg viewBox="0 0 320 150" aria-hidden="true" focusable="false">';
if(k==="ad")a+='<path d="M160 36v18M160 54H80M160 54H240M80 54v18M240 54v18M80 98v12M240 98v12" class="ln"/><rect x="128" y="12" width="64" height="26" rx="8" class="f1"/><rect x="48" y="72" width="64" height="26" rx="8" class="f2"/><rect x="208" y="72" width="64" height="26" rx="8" class="f2"/><circle cx="64" cy="124" r="9" class="f3"/><circle cx="96" cy="124" r="9" class="f3"/><circle cx="224" cy="124" r="9" class="f3"/><circle cx="256" cy="124" r="9" class="f3"/>';
else if(k==="js")a+='<rect x="24" y="22" width="150" height="106" rx="10" class="f2"/><path d="M40 48h60M40 68h90M40 88h46" class="ln2"/><circle cx="154" cy="38" r="5" class="ok"/><path d="M186 75h44M220 65l10 10-10 10" class="ln"/><rect x="238" y="46" width="62" height="42" rx="8" class="f1"/><path d="M258 104h22" class="ln"/>';
else if(k==="gp")a+='<rect x="120" y="14" width="80" height="40" rx="8" class="f1"/><path d="M160 54v16M160 70H70M160 70H250M70 70v14M160 70v14M250 70v14" class="ln"/><rect x="40" y="84" width="60" height="38" rx="8" class="f2"/><rect x="130" y="84" width="60" height="38" rx="8" class="f2"/><rect x="220" y="84" width="60" height="38" rx="8" class="f2"/><circle cx="70" cy="103" r="4" class="ok"/><circle cx="160" cy="103" r="4" class="ok"/><circle cx="250" cy="103" r="4" class="ok"/>';
else if(k==="sc")a+='<path d="M160 12l62 22v40c0 32-24 52-62 64-38-12-62-32-62-64V34z" class="f2"/><path d="M130 76l22 22 40-44" class="ln2"/><circle cx="250" cy="36" r="5" class="ok"/>';
else if(k==="hd")a+='<rect x="60" y="20" width="130" height="86" rx="10" class="f2"/><path d="M92 126h66M125 106v20" class="ln"/><path d="M96 48l56 34M152 48l-56 34" class="ln2"/><rect x="214" y="44" width="62" height="44" rx="8" class="f1"/><path d="M226 100h38" class="ln"/><circle cx="262" cy="56" r="4" class="ok"/>';
else a+='<rect x="130" y="20" width="60" height="110" rx="6" class="f2"/><path d="M130 57h60M130 93h60M160 20v37M145 57v36M175 57v36M160 93v37" class="ln"/><path d="M30 75h90M200 75h90" class="ln"/><path d="M110 65l12 10-12 10M270 65l12 10-12 10" class="ln"/><circle cx="40" cy="75" r="9" class="f3"/><circle cx="280" cy="75" r="9" class="ok"/>';
return a+"</svg>"}
function projects(t){var s=$("s-pj");if(s)s.remove();s=el("section","sec");s.id="s-pj";var h=el("h2","",esc(t.proj));s.appendChild(h);var g=el("div","pgrid");
PROJ.forEach(function(p,i){var d=el("article","pcard"),pr=t.projects[i],has=true;
d.innerHTML='<div class="pimg">'+art(p.k)+'</div><h3>'+esc(pr[0])+'</h3><p>'+esc(pr[1])+'</p><div class="chips" style="margin-top:0">'+p.chips.map(function(c){return '<span class="chip ltr">'+esc(c)+'</span>'}).join("")+'</div>'+
(has?'<a class="plink" data-pdf="'+p.k+'" href="'+(BL[p.k]||"#")+'" target="_blank" rel="noopener noreferrer">'+esc(t.view)+' &rarr;</a>':'<span class="plink dis" aria-disabled="true" title="'+esc(t.todo)+'">'+esc(t.view)+' &rarr;</span>');g.appendChild(d)});
s.appendChild(g);var e=document.querySelector("footer");e.parentNode.insertBefore(s,e);hyd(t)}
var BL={},BP={};
function getPdf(k){if(BP[k])return BP[k];BP[k]=fetch("rpt-"+k+".b64?v=1").then(function(r){if(!r.ok)throw 0;return r.text()}).then(function(b){var bin=atob(b.replace(/\s/g,"")),u=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);BL[k]=URL.createObjectURL(new Blob([u],{type:"application/pdf"}));return BL[k]});return BP[k]}
function hyd(t){document.querySelectorAll("a.plink[data-pdf]").forEach(function(a){var k=a.dataset.pdf;if(BL[k])a.href=BL[k];else getPdf(k).then(function(u){a.href=u}).catch(function(){});
a.addEventListener("click",function(ev){if(BL[k])return;ev.preventDefault();var w=window.open("","_blank");getPdf(k).then(function(u){if(w)w.location.href=u;else location.href=u}).catch(function(){if(w)w.close()})})})}

/* ---------- topology ---------- */
var NODES={net:{x:180,y:30,w:120,h:38,kw:["DNS","LAN/WAN"]},fw:{x:180,y:100,w:130,h:40,kw:["Fortinet","IPSec"]},sw:{x:180,y:172,w:130,h:40,kw:["Cisco","LAN/WAN","DHCP","IPv4"]},ad:{x:52,y:262,w:88,h:46,kw:["Windows Server","Active Directory","DNS","DHCP"]},px:{x:138,y:262,w:78,h:46,kw:["Proxmox","ESXi","Nutanix"]},dk:{x:222,y:262,w:78,h:46,kw:["Docker","Ubuntu","RedHat"]},zb:{x:308,y:262,w:78,h:46,kw:["Zabbix"]}};
var LINKSVG=[["net","fw"],["fw","sw"],["sw","ad"],["sw","px"],["sw","dk"],["sw","zb"]];
function topo(t){var s=$("s-topo");s.innerHTML="";s.className="sec topo";s.appendChild(el("h2","",esc(t.topo)));
var svg='<svg viewBox="0 0 360 300" class="tsvg" role="group" aria-label="'+esc(t.topo)+'">';
LINKSVG.forEach(function(l){var a=NODES[l[0]],b=NODES[l[1]];svg+='<path class="tl2" d="M'+a.x+" "+(a.y+a.h/2)+"L"+b.x+" "+(b.y-b.h/2)+'"/>'});
Object.keys(NODES).forEach(function(k){var n=NODES[k],nm=t.nodes[k];var lab=nm[0];
svg+='<g class="nd" tabindex="0" role="button" data-k="'+k+'" aria-label="'+esc(nm[0]+": "+nm[1])+'"><rect x="'+(n.x-n.w/2)+'" y="'+(n.y-n.h/2)+'" width="'+n.w+'" height="'+n.h+'" rx="10"/>'+(n.w<100&&lab.indexOf(" ")>0?"<text x=\""+n.x+"\" y=\""+(n.y-2)+"\" text-anchor=\"middle\">"+esc(lab.split(" ")[0])+"</text><text x=\""+n.x+"\" y=\""+(n.y+12)+"\" text-anchor=\"middle\">"+esc(lab.split(" ").slice(1).join(" "))+"</text>":"<text x=\""+n.x+"\" y=\""+(n.y+4)+"\" text-anchor=\"middle\">"+esc(lab)+"</text>")+"</g>"});
svg+="</svg>";var w=el("div","tbox",svg);s.appendChild(w);
var cap=el("p","tcap",esc(t.tpick));cap.id="tcap";cap.setAttribute("aria-live","polite");s.appendChild(cap);s.appendChild(el("p","thint",esc(t.hint)));
function pick(k){var nds=s.querySelectorAll(".nd");for(var i=0;i<nds.length;i++)nds[i].classList.toggle("sel",nds[i].dataset.k===k);cap.textContent=t.nodes[k][0]+": "+t.nodes[k][1];
var ch=document.querySelectorAll("#right .card .chip"),kw=NODES[k].kw;for(i=0;i<ch.length;i++){var tx=ch[i].textContent.toLowerCase(),on=kw.some(function(z){return tx.indexOf(z.toLowerCase())===0});ch[i].classList.toggle("hl",on)}}
s.querySelectorAll(".nd").forEach(function(g){var k=g.dataset.k;g.addEventListener("click",function(){pick(k)});g.addEventListener("mouseenter",function(){pick(k)});g.addEventListener("focus",function(){pick(k)});g.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();pick(k)}})});
if(IOok)new IntersectionObserver(function(e){s.classList.toggle("paused",!e[0].isIntersecting)}).observe(s)}

/* ---------- timeline log tags ---------- */
function tl(t){var q=document.querySelectorAll("#left .tl");for(var i=0;i<q.length;i++){var y=q[i].querySelector(".yr");if(!y||q[i].querySelector(".lg"))continue;var run=/2026-2027/.test(y.textContent);
var g=el("span","lg"+(run?" run":" ok"),run?"[RUN]":"[OK]");g.setAttribute("aria-hidden","true");q[i].insertBefore(g,y)}}

/* ---------- contact block ---------- */
function contact(t){var c=document.querySelector("#s-ct .card.ct");if(!c||c.querySelector(".ssh"))return;
var s=el("div","ssh ltr","$ ssh iliass@casablanca");s.setAttribute("aria-hidden","true");c.insertBefore(s,c.firstChild);
var m=c.querySelector("a[href^='mailto:']");if(m){var b=el("button","cp",esc(t.copy));b.type="button";b.setAttribute("aria-label",t.copy+" email");b.addEventListener("click",function(){var v="Bouchariliass@gmail.com";function ok(){toast(t.copied)}
if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(ok,function(){fb(v);ok()});else{fb(v);ok()}});m.parentNode.parentNode.appendChild(b)}
var sec=c.parentNode;}
function fb(v){var i=document.createElement("textarea");i.value=v;i.style.cssText="position:fixed;opacity:0";document.body.appendChild(i);i.select();try{document.execCommand("copy")}catch(e){}i.remove()}

/* ---------- navigation ---------- */
function nav(t){var items=[["s-exp",t.exp],["s-edu",t.edu],["s-topo",t.skills],["s-ct",t.contact],["s-pj",t.proj]];
$("links").innerHTML=items.map(function(a){return '<a href="#'+a[0]+'">'+esc(a[1])+"</a>"}).join("");
var b=$("bnav");b.setAttribute("aria-label",X[cur].sec);b.innerHTML=items.map(function(a){return '<a href="#'+a[0]+'">'+esc(a[1])+"</a>"}).join("")}
function prog(){var p=$("prog"),tk=false;function u(){tk=false;var h=document.documentElement,m=h.scrollHeight-innerHeight;p.style.transform="scaleX("+(m>0?Math.min(1,scrollY/m):0)+")"}
addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(u)}},{passive:true});u()}

/* ---------- footer ---------- */
var up0=21*86400+4*3600+12*60+33+Math.floor(Math.random()*50),pg=12,upT;
function pad(n){return(n<10?"0":"")+n}
function foot(){var f=$("upt");function u(){if(document.hidden)return;up0++;var s=up0,d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60);if(up0%4==0)pg=9+Math.floor(Math.random()*7);f.textContent=X[cur].upt+": "+d+"d "+pad(h)+":"+pad(m)+":"+pad(s%60)+" \u00b7 ping "+pg+"ms"}
u();if(!rm){if(upT)clearInterval(upT);upT=setInterval(u,1000)}}

/* ---------- terminal ---------- */
var out,inp,hist=[],hi=0,busy=false,intro=false;
var CMDS=["help","whoami","skills","experience","certs","projects","contact","ls","cat cv.pdf","clear","sudo hire-me"];
function ln(txt,c){var d=el("div","tl2x "+(c||""));d.textContent=txt;out.appendChild(d);out.scrollTop=out.scrollHeight;return d}
function say(arr,c){arr.forEach(function(s){ln(s,c)})}
function run(raw){var c=raw.trim();if(!c)return;ln("$ "+c,"cmd");hist.push(c);hi=hist.length;ex(c)}
function ex(c){var t=X[cur],T0=T[cur],a=c.split(/\s+/),k=a[0].toLowerCase();
if(k==="help")ln(t.help);
else if(k==="whoami"){ln("iliass: systems, networks, security");ln(T0.role);ln(T0.city)}
else if(k==="skills")T0.skill_items.forEach(function(s){ln(s[0]+": "+s[1])});
else if(k==="experience")T0.exp_items.forEach(function(e){ln(e[0]+"  "+e[1])});
else if(k==="certs")say(T0.certs);
else if(k==="projects")t.projects.forEach(function(p,i){ln((i+1)+". "+p[0])});
else if(k==="contact"){ln("Bouchariliass@gmail.com");ln("+212 690 432 111");ln("linkedin.com/in/iliassbouchari");ln(T0.city)}
else if(k==="ls")ln("cv.pdf  skills.txt  projects/  contact.txt");
else if(k==="cat"){if(a[1]==="cv.pdf"){ln(t.dl);$("dl").click()}else if(a[1]==="skills.txt")ex("skills");else if(a[1]==="contact.txt")ex("contact");else ln(t.nofile+(a[1]||""))}
else if(k==="clear")out.innerHTML="";
else if(k==="sudo"){if(a[1]==="hire-me"){ln(t.sudo1);ln(t.sudo2,"okc");setTimeout(function(){var s=$("s-ct");if(s)s.scrollIntoView({behavior:rm?"auto":"smooth",block:"start"})},600)}else{ln(t.sudo1);ln(t.sudo3,"err")}}
else ln(t.nf+k+" (help)","err")}
function typeLine(txt,cmd,done){var d=ln("",cmd?"cmd":""),i=0;var pre=cmd?"$ ":"";function f(){d.textContent=pre+txt.slice(0,i++);out.scrollTop=out.scrollHeight;if(i<=txt.length)setTimeout(f,cmd?45:10);else done&&setTimeout(done,cmd?300:80)}f()}
var NM=["Nmap scan report for lab.local (192.168.10.10)","Host is up (0.0012s latency).","PORT      STATE SERVICE  VERSION","22/tcp    open  ssh      OpenSSH 9.2","53/tcp    open  domain   Simple DNS","80/tcp    open  http     nginx 1.24","443/tcp   open  https    nginx 1.24","445/tcp   open  smb      Samba 4.x","3389/tcp  open  rdp      Windows RDP","8006/tcp  open  http     Proxmox VE UI","10050/tcp open  zabbix   Zabbix agent","Done: 8 open ports found."];
function introRun(){if(intro)return;intro=true;var t=X[cur];busy=true;out.setAttribute("aria-busy","true");
function fin(){busy=false;out.setAttribute("aria-busy","false");out.setAttribute("aria-live","polite")}
if(rm){ln("$ whoami","cmd");ln("iliass: systems, networks, security");ln("$ nmap -sV --top-ports 20 lab.local","cmd");ln(t.nm);NM.forEach(function(s){ln(s)});fin();return}
typeLine("whoami",true,function(){ln("iliass: systems, networks, security");typeLine("nmap -sV --top-ports 20 lab.local",true,function(){ln(t.nm,"dim");var i=0;(function n(){if(i<NM.length){ln(NM[i++]);setTimeout(n,110)}else fin()})()})})}
function initTerm(){out=$("tout");inp=$("tin");out.setAttribute("aria-live","off");
$("tcmds").innerHTML=CMDS.map(function(c){return '<button type="button" class="chip cmdb ltr" data-c="'+esc(c)+'">'+esc(c)+"</button>"}).join("");
$("tcmds").addEventListener("click",function(e){var b=e.target.closest("button");if(b&&!busy){run(b.dataset.c)}});
$("tform").addEventListener("submit",function(e){e.preventDefault();if(busy)return;var v=inp.value;inp.value="";run(v)});
inp.addEventListener("keydown",function(e){if(e.key==="ArrowUp"){e.preventDefault();if(hi>0)inp.value=hist[--hi]||""}else if(e.key==="ArrowDown"){e.preventDefault();if(hi<hist.length-1)inp.value=hist[++hi];else{hi=hist.length;inp.value=""}}
else if(e.key==="Tab"){e.preventDefault();var v=inp.value.toLowerCase();if(!v)return;var m=CMDS.filter(function(c){return c.indexOf(v)===0});if(m.length===1)inp.value=m[0];else if(m.length>1){var p=m[0];m.forEach(function(c){while(c.indexOf(p)!==0)p=p.slice(0,-1)});inp.value=p;ln(m.join("  "),"dim")}}});
if(IOok){var io=new IntersectionObserver(function(e){if(e[0].isIntersecting){introRun();io.disconnect()}},{threshold:.2});io.observe($("termwrap"))}else introRun()}

/* ---------- easter egg ---------- */
var KS=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],ki=0;
addEventListener("keydown",function(e){var k=e.key.length===1?e.key.toLowerCase():e.key;ki=k===KS[ki]?ki+1:(k===KS[0]?1:0);if(ki===KS.length){ki=0;var h=document.documentElement;h.classList.add("matrix");toast(X[cur].konami);setTimeout(function(){h.classList.remove("matrix")},8000)}});

/* ---------- language hook ---------- */
function labels(t){$("badge").lastChild.textContent=t.avail;$("tterm").textContent=t.term;$("tin").placeholder=t.ph;$("tin").setAttribute("aria-label",t.ph);$("tcmds").setAttribute("aria-label",t.cmdhint)}
function credly(){var c=$("top");if(!c||$("cr-chip"))return;var a=document.createElement("a");a.id="cr-chip";a.className="chip ltr";a.href=LINKS.credly;a.target="_blank";a.rel="noopener noreferrer";a.textContent="Credly";a.style.cssText="text-decoration:none;color:#fff;background:#1d5fd1;border-color:#1d5fd1;font-weight:600";c.appendChild(a)}
window.onLang=function(l){credly();cur=X[l]?l:"fr";var t=X[cur];labels(t);nav(Object.assign({},T[cur],{proj:t.proj,skills:T[cur].skills}));stats(t);projects(t);tl(t);contact(t);foot();reveal(document);decrypt()};
function boot(){initNet();initTerm();prog();window.onLang(document.documentElement.lang||"fr");}
boot();
})();
