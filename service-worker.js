/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "895d94b9cf8dcc370e8f42328bb88280"
  },
  {
    "url": "assets/css/0.styles.e95cc0cd.css",
    "revision": "7a01d9d422f0d35ce152d3f74b42e1f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d0d970f.js",
    "revision": "52e4f69c8403b8e60a05d701a29513a4"
  },
  {
    "url": "assets/js/11.f854ac87.js",
    "revision": "8665a80bb5119e1ca9611682058011f7"
  },
  {
    "url": "assets/js/12.31113e91.js",
    "revision": "f4cd8d7f50cea99dcfc335f505f484f8"
  },
  {
    "url": "assets/js/13.60a59c4c.js",
    "revision": "3200a54cd84540564ca4ce2f20f9bb41"
  },
  {
    "url": "assets/js/14.56f00c64.js",
    "revision": "637583793cdfcbd4eb7a07f5ac769ced"
  },
  {
    "url": "assets/js/15.e8288b08.js",
    "revision": "93255b8d9c34c6e193a38fd6c3bbecbd"
  },
  {
    "url": "assets/js/16.3dea4ae6.js",
    "revision": "9c6e874f214814c3f2e3ff994b126fa1"
  },
  {
    "url": "assets/js/17.adf4f283.js",
    "revision": "aa699e1dcf7e8a850dc882525292d8d3"
  },
  {
    "url": "assets/js/18.03f46bea.js",
    "revision": "e2655f34fd4fca002e289adc350b5ce4"
  },
  {
    "url": "assets/js/19.8d5126ba.js",
    "revision": "60f46dc3d387fb37f8ceadc85d7c92db"
  },
  {
    "url": "assets/js/2.0934e81f.js",
    "revision": "67ed56c480a2072debf7fe9bb5941b20"
  },
  {
    "url": "assets/js/20.de7275c3.js",
    "revision": "5b25064459da084acf7308156af6f3c9"
  },
  {
    "url": "assets/js/21.1f526455.js",
    "revision": "77200949edc56df68a080c3211406646"
  },
  {
    "url": "assets/js/22.82953b27.js",
    "revision": "c9d8c57f73b11c240df5d7e77685903b"
  },
  {
    "url": "assets/js/23.6bd031b5.js",
    "revision": "9e76b988df99512461f1a8ca770593ce"
  },
  {
    "url": "assets/js/24.bb5aef83.js",
    "revision": "3369ef1829c0272205770106b6ace1a9"
  },
  {
    "url": "assets/js/25.ceb94dc0.js",
    "revision": "26cf187c870ee19239ee24d9b652653b"
  },
  {
    "url": "assets/js/26.495f5b6a.js",
    "revision": "bcaea9cf1bfec7f63a91f91999519a44"
  },
  {
    "url": "assets/js/27.20e340e5.js",
    "revision": "bc423b7de45cecfb2d2b4733a8cba3c4"
  },
  {
    "url": "assets/js/28.9ca51e06.js",
    "revision": "e7fd263e3ad10b4b77399fa073fbc7b2"
  },
  {
    "url": "assets/js/29.07a05b95.js",
    "revision": "752ff27c908fa61c3b7ac981aac48aee"
  },
  {
    "url": "assets/js/3.845e4700.js",
    "revision": "ba41c09d35a338a072657ba01ed1d3c8"
  },
  {
    "url": "assets/js/30.0f46d386.js",
    "revision": "d0d35cb886b066647acbabd0d05f9dbc"
  },
  {
    "url": "assets/js/31.8dbe3040.js",
    "revision": "ec6431434462c8879e1358ef95943ba6"
  },
  {
    "url": "assets/js/32.066dc610.js",
    "revision": "e0138835e9eb2dd6de434167a2e4b07c"
  },
  {
    "url": "assets/js/33.6aec49de.js",
    "revision": "ad6e00879796caa51d965a24705ed14f"
  },
  {
    "url": "assets/js/34.e3d491ae.js",
    "revision": "b1b3ce05f538de66f3357a1157e206a6"
  },
  {
    "url": "assets/js/35.022fd1df.js",
    "revision": "0b4e3c6fcf6b827b20adabf2be2607a9"
  },
  {
    "url": "assets/js/36.61028b87.js",
    "revision": "0c8c57503e258916184c13a440500bc7"
  },
  {
    "url": "assets/js/37.73ae6e65.js",
    "revision": "61d887a17833e097fe56639705afd89a"
  },
  {
    "url": "assets/js/38.006cf32f.js",
    "revision": "2d8759eb16876fb727c8d65dfbc6771a"
  },
  {
    "url": "assets/js/4.a57b285d.js",
    "revision": "52653d16fafe1abd59642f08652475e9"
  },
  {
    "url": "assets/js/5.af2001f3.js",
    "revision": "1d19d031beefd77eb12c218c87c89bce"
  },
  {
    "url": "assets/js/6.3029be74.js",
    "revision": "266d91b4d29e6fd3eaddb5ab4549062b"
  },
  {
    "url": "assets/js/7.0ac97f17.js",
    "revision": "0f9cea348e6b9cd1d9f5cb3496b4877a"
  },
  {
    "url": "assets/js/8.e013b273.js",
    "revision": "ec7b5a8df41a7fcfd3cf3efbf99aade1"
  },
  {
    "url": "assets/js/9.a7384414.js",
    "revision": "7db416b6f6b2e1ba6396325809f592e9"
  },
  {
    "url": "assets/js/app.7e73ef9a.js",
    "revision": "e097bfe4f59e15dda9eef87c44fd0a5b"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "5306e4a2a82123b213883be8c78040e1"
  },
  {
    "url": "element/element2/index.html",
    "revision": "d7c2b9e4f6b44d31c84a520d6b5fd5fd"
  },
  {
    "url": "element/index.html",
    "revision": "3eee6ebecb455d22548e3d81f959e467"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "236d5af99ebecf5bc18a522f8c8c4c98"
  },
  {
    "url": "java/index.html",
    "revision": "ad4a94426f256eb0e8d046afd64956e7"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "e728444ddeda11a15589b2ce2fefa4fb"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "37b5ea63ed0ba112221c7f3ac51768be"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "51aa29f121876087a871ca9bbc8bbfd3"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "f5ebc31225a4baa3748ffc19c5c02762"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "449fbef46ad75c1babe5f4eeb96301ff"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "03a4ab5c8f7b226888024b55921d107e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "0c64fd7eacf36f52e2edb591d2b84c2f"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "b8b9758d139b9663e124d5c667f302c7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "6b827810eca5026148f4091c7c2ab200"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "506d9e7ddc501c3bfe0e5547e463c5bd"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "207e40b82d835bd080684e218e54834b"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "fdefed9878afa0caa6a5ff677ccf0b7a"
  },
  {
    "url": "java/java2/index.html",
    "revision": "a0b582597f9fe0ce65ba91a3da2f0262"
  },
  {
    "url": "mysql/index.html",
    "revision": "de6c02322bbaf0c82f67cd9061b41d02"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "85c7b996fd1b4bd6aceb5d38b5a2f9d6"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "bf4bfba6402da83aa72f8b9d9a9d2015"
  },
  {
    "url": "other/index.html",
    "revision": "f51524fd8840c775d756dbab6006aea7"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "e200db8c2ba7b3f5b5a536258fe6520c"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "879e79c57e7e6890bf37143c33852c14"
  },
  {
    "url": "problem/index.html",
    "revision": "76cd2c790215f301df6c2f1ac464b5e4"
  },
  {
    "url": "vue/index.html",
    "revision": "46ff04a8e194bd7a465ee047cabce1ef"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "2d58bbc7aa8ac0514bbc4e0eeb3398ba"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "b290b25d0fbfa05ca08cb2244804f010"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
