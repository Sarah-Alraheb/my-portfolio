'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d01842cc5123da269afd9b8ed25ab49f",
".git/config": "24e7f55bf99ac707b0c93bc0ab500072",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "7c73c6f23e3b7cebf10d71941718ef78",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb1fc42a128bccac3d8b23de39b26282",
".git/logs/refs/heads/main": "b5daba7f3c12999405d156cdaade4885",
".git/logs/refs/remotes/origin/main": "6ed82e1226406f6dfa4715013fa04e88",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/efe22d6ecd836ed037549b712810f4bd1bc009": "079dde2c67fcc953dde6585b872280c3",
".git/objects/0c/ce275fd81260f6e47a5e4edc728703626634da": "ebf1b33c94df6a1dcf097f0a2b3e2533",
".git/objects/28/3f1d9e07d2f9dd15532dbf5b81411ff720a9f9": "26dd9f107ec83be432d59afe6e73c7c9",
".git/objects/2b/a154586adc64e176885f09cbe27c5b5ab206bc": "bbba5e513108b6c608e12f8557bf88ce",
".git/objects/32/02778bbc77790de339185a2d94c1a294651458": "0cd3f7c7c5f3b38d13d4b3c7ce5ee7b4",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/4d2792ea3870e9ab643d31b76c8acafac8d97a": "856dcb09c893aef19833fe70f9e991ec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/699991f1a60d5aa93840026df0ff38c08130ac": "68275633332cdaebe22d22149e2aff62",
".git/objects/47/ba6091dab7691bbbcf0a75802d20c9025b15b4": "591d0da497e507959cdb2db87c2931e7",
".git/objects/4b/6a1fdc697ad936f9415ffb0d57c14b49245179": "06419ec788057dfa6fda077267802259",
".git/objects/4d/b6e80b9352c468bb11402e04c2581af5cfd82f": "c2500ac8289e648ae8cc12f0edb88e0f",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/57/8d1fb713b101d32012ef9ad798d2f5966f60b6": "ac5b199d0833c723f420aa5003108cb8",
".git/objects/58/fa3b96c7f0a94502d18845ab5243160eb1666f": "03489e6d8555c63d0b06d6d42faf37c9",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/9268fd4dda0119632515e70dbdd1e4cb609e6d": "aa73b8ca8ad5a0a027ec3f8a237a977c",
".git/objects/74/7f66e7f63e0b804b5964c326e660966efff7c5": "158291c00c920d8b8b58eb8f74eea5a2",
".git/objects/79/a5b973dfb12b96db6f3e4b1bfd855f859ded01": "75a9178bf85011add2327fe28a945196",
".git/objects/7a/5fcfb43f9a085ed9e239c411dd21b5e24d2ac1": "1ec684924325686f19b21aa51d1f1844",
".git/objects/7b/4a0a7d189788b82db95d828a5672d0d961631d": "3f16c133ea5eb1a47863b5d531b4d0a8",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/f5170bfe7f1d0cd5c9d15b551bee0b096014c1": "e0c9e33d127b5de54cea39b89437c0fd",
".git/objects/89/28d49aefe0372d47364911af96961a90c96429": "26574909fcc3850399bc964c2a034ecd",
".git/objects/8d/1f2906d352a8817703fe7f589d6ab9b140eec7": "3e30bf82f0a67f3ee6d1854b3b3ff9a6",
".git/objects/8d/d6f9d1e593b228df5fc6f07d21fb48a8582f1b": "d0b2587c5b12df2f320200b0868baf34",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/267659317a961389e4f8c49a1ec617288825b1": "926f47b08ad5b4a843b6480c7b5c5f32",
".git/objects/8f/ea073dc2488365e6dfe2824b242c0e38435e57": "e6d58131fc95bd66dd595800a731c41e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/7591181fca659a6c414c2bcd39a5d7ecdd031b": "17c4f100a997a356b59361cdd357f1e8",
".git/objects/9b/c1d4c83e16b3a49e611182174c68a99ba3da08": "651c76fda94c0551470c70929552dea1",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/2a7f0d0696df97ba6f72107a51eaf4f403d5fe": "d098d531ee50247b268524619dc94847",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/c54430d627a2a7259aa9b44414c783d2612527": "e380469548aec5b0f5e45140d7683bd2",
".git/objects/b4/f3a5f3656eb31c5cdd3906a8716dd476c427d6": "91c92d0ce7d59bdd056d9a0de9ff797c",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/bb8e80dc9149ef9204bfd60c878d02f37f130c": "e626c9ca35164310570935b8811829e5",
".git/objects/c1/70aecaaff9aea10414ae3a53ad2881f867bf35": "85aca8599297af66344b276f8d49f53f",
".git/objects/c5/046889375ae86f9424d32ca7f9cdf3dc9af5b1": "3030d71ce052f66549ddc5778d92cdba",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cf/6bac0861b74422bac4bfecb2af4e7640c2688b": "db0dc3b43cd1eda8fa36ada29064acfa",
".git/objects/d2/16737bced5e2d856bf7528c89511547056532b": "b93f9b22a96801560c5748a63324ad16",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/9efa21c8b1969ac2a137e97f9b81ba5bd4e18f": "bf2c9c5586914d7aad7d3c3d7219c903",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/7d78315bb665bafe72293a7a70941e9c4d7537": "db85fd7f168f3b5494d208c9d05fe66c",
".git/objects/df/eefd9aedd260189896eae1c02ab9e34ac30524": "857bdafeeaae936d7146c9609519ea93",
".git/objects/e4/2ef126c7b16a2c569d5c3363f27e84bd692843": "d4935bc99f1a1dcf99126c628255c21c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ee/3f70ba9d098a8900d315cd81108b3709b38013": "593d726ba0afeb55e7a39ccfe4c51db9",
".git/objects/f1/e0abdebd54469695a42cd0ae20e48a5f8f2b42": "5d18e07ae0f9545dc149eeb184f41c7b",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/cc25233095470f234d3de87d49557317413247": "b206978c7bb2696449aa44a31923cf7f",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fc/5edcb01c028aaed69215598855bdc6fb6a0b5d": "6346029feb262b12be9c090e95de8373",
".git/objects/fc/8596ae99b697ad2a2fe6bf1c60b0e24b348bec": "2f19f1182b69bb757a7ce4e3e87872bf",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/e57fee2413815178247c3b1b25a7259450a301": "329e8ce2b11b8cb53131bb14e7746d33",
".git/refs/heads/main": "3cbd227008eb9c6d3f382e861ab30751",
".git/refs/remotes/origin/main": "3cbd227008eb9c6d3f382e861ab30751",
"assets/AssetManifest.bin": "bd8b25d882d0019139b080c85356e769",
"assets/AssetManifest.bin.json": "92f5d2080e88703f9796f26c520eafaa",
"assets/assets/icons/app-store.svg": "fdabfe2454168f46f347de05ad0bec63",
"assets/assets/icons/google-play.svg": "2d38946780786736de2769481534f48f",
"assets/assets/images/alshahba.webp": "dca29e985145ad1561b6620422f7bfa4",
"assets/assets/images/ASL.webp": "cfbd0ac0a5eb00a4a56e8eed85a7ac4f",
"assets/assets/images/cv2.webp": "f9d1fad5e2dfbf4400f63a3ce8d6b1e2",
"assets/assets/images/fleet_management.webp": "433e02411ec6a4114d38d244d37db945",
"assets/assets/images/galaxy_shop.webp": "317641c90ae9d6962cd7b6b7e402c96c",
"assets/assets/images/kuality_company.webp": "fa13e67efa41d0e3dcc02981a634dff0",
"assets/assets/images/rent_now.webp": "2a66048fbb4026aa79660f1b307abed1",
"assets/assets/images/Siyana.webp": "86e8f62479079eddf09c8f364cd84452",
"assets/assets/images/tad_center.webp": "5ba9297dd30e6b865ebad9a535f0787c",
"assets/assets/images/ytech.webp": "ffc1b6636aa2a3e3dfabf625da9a2077",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4d5d19d41b5c524edb3f62b6b32eb9d4",
"assets/NOTICES": "d8bf5df8d947d8c2c866b770df9a364e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "a14082ba908c0c40bd0caeddcab7cb78",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "082f164a15de0d0286f00f198d9a59f0",
"icons/Icon-192.png": "c1b2d5055695fdd3c52badee31bb822e",
"icons/Icon-512.png": "4eccff3a5c97f5b530ff45a651bf9fe6",
"icons/Icon-maskable-192.png": "c1b2d5055695fdd3c52badee31bb822e",
"icons/Icon-maskable-512.png": "4eccff3a5c97f5b530ff45a651bf9fe6",
"index.html": "d4c399e284a9643fb0a89c8d5cbf718b",
"/": "d4c399e284a9643fb0a89c8d5cbf718b",
"main.dart.js": "3aa4de07fcee2f51aba4236d69230eec",
"main.dart.mjs": "e92bfcbf637ac25167fde4b16e4ea43b",
"main.dart.wasm": "94f3c6d90430347f5a2bd9c9242bcc63",
"manifest.json": "417d9ac1a9f1b497d5cf261f9e0a6a67",
"version.json": "96f91ee3f4b8d56fbd70b76cbfe3c399"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
