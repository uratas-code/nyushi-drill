// 入試ドリル Service Worker：問題を追加したら VERSION を上げる
const VERSION = "v3";
const CACHE = "nyushi-drill-" + VERSION;
const CORE = ["./", "./index.html", "./english.html", "./kokugo.html", "./sugaku.html", "./nihonshi.html", "./sekaishi.html", "./chiri.html", "./seikei.html", "./rinri.html", "./butsuri.html", "./kagaku.html", "./seibutsu.html", "./joho.html",
  "./manifest.webmanifest", "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // ページ本体：ネット優先（更新をすぐ反映）、つながらなければキャッシュ
  if (req.mode === "navigate" || url.origin === location.origin) {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html"))));
    return;
  }
  // Google Fonts：キャッシュ優先
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    })));
  }
});
