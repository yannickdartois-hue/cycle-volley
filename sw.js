const V='cycle-volley-v17';
// Toutes les applis partagent le même stockage (même adresse github.io) : on n'efface QUE les anciennes versions de CETTE appli.
const MES_CACHES=/^(?:cycle\-volley\-v|volley\-v)\d+$/;

// Wi-Fi faible au gymnase : si le réseau ne répond pas en 3 s, on ouvre la copie gardée sur l'appareil.
const sous3s=p=>{p.catch(()=>{});return Promise.race([p,new Promise((_,non)=>setTimeout(()=>non(new Error('réseau lent')),3000))])};
const CORE=["eps-design.css", "eps-outil.css", "eps-charte-v1.css", "ecran.css", "ecran.js", "eps-commun.js", "cycle-volley-old.html", "terrain.html", "volley-donnees.js", "polices/archivo.woff2", "polices/atkinson-400.woff2", "polices/atkinson-700.woff2", "./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-32.png", "icon-512.png", "1re-S1.pdf", "1re-S2.pdf", "1re-S3.pdf", "1re-S4.pdf", "1re-S5.pdf", "1re-S6.pdf", "1re-S7.pdf", "1re-S8.pdf", "1re-S9.pdf", "Banque-exercices.pdf", "Cycle-Premiere.pdf", "Cycle-Terminale.pdf", "Fiche-choix-epreuve.pdf", "Fiche-evaluation-finale.pdf", "Fiches-observation.pdf", "Tle-S1.pdf", "Tle-S2.pdf", "Tle-S3.pdf", "Tle-S4.pdf", "Tle-S5.pdf", "Tle-S6.pdf", "Tle-S7.pdf", "Tle-S8.pdf", "Tle-S9.pdf"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>MES_CACHES.test(k)&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin===location.origin&&(r.mode==='navigate'||/\/(index(-old)?|terrain|cycle-volley-old)\.html$/.test(u.pathname))){
    // page : réseau d'abord (pour recevoir les mises à jour), cache si hors-ligne
    const K=(/\/(index\.html)?$/.test(u.pathname))?'index.html':r;const net=fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(K,cp));return res});e.respondWith(sous3s(net).catch(()=>caches.match(K).then(h=>h||caches.match('index.html')).then(h=>h||net)));return}
  // le reste (PDF, icônes, polices) : cache d'abord
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res})));
});
