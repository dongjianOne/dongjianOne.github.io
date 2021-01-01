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
    "revision": "afc5eccb00947abcb74f27ebd5eac0d0"
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
    "url": "assets/js/33.c8bfd7b2.js",
    "revision": "ad6e00879796caa51d965a24705ed14f"
  },
  {
    "url": "assets/js/34.3005d7bc.js",
    "revision": "323f4e00e7773b374718883ab960c611"
  },
  {
    "url": "assets/js/35.88739406.js",
    "revision": "2b25e24580b09a4ebf6192bf4452a19a"
  },
  {
    "url": "assets/js/36.f7b3011a.js",
    "revision": "8efb3a6e351c0ab9360277e07dfba4f7"
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
    "url": "assets/js/6.76e41bbe.js",
    "revision": "9c19ba0d448436cf7505e902f43605db"
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
    "url": "assets/js/app.75d5aa4f.js",
    "revision": "b1ec89a257502d5c029303750abf6148"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "05d7b505c0472853e31f4bbf966b1be7"
  },
  {
    "url": "element/element2/index.html",
    "revision": "d98ad886c69366def3ae39c2c52f343c"
  },
  {
    "url": "element/index.html",
    "revision": "189ff9f910c734558eb530e090748895"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c23825ee904bd8dd30a3b8dd66eaf2bc"
  },
  {
    "url": "java/index.html",
    "revision": "5fdfb605c3e2985373241a93a53b5896"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "94791bfcb81df196f648607bdeee5a79"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "ad5d5ccfb2a8f59041b798eb163cbf64"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "a650fcf4596bae57c72fb69ff7df075a"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "0227f274a13e6d3b5b228aebcfdb4371"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "b68c0fb6d120da3cc0c6d4f3c7fa14d2"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "7a727dd8af3eb593b2e09c13e4be835f"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "c3aeaabff5b56658bfc2a00435366d1d"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "3b2fa7172e512f23f0ed1e124c47153e"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "ebcaa7a71c29c93f784411bbb2f38015"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "d1e3f4625393801fe38736a000895447"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "df18e3fcbc8e2421b9f45bb75dcadd14"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "4fb5016eefbfe03af9ff8339513ae502"
  },
  {
    "url": "java/java2/index.html",
    "revision": "899fccc9ef1e3f85b0840b84f49b32cf"
  },
  {
    "url": "mysql/index.html",
    "revision": "9088baf02ced0c540f78325cda36b96c"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "45d93c5902fa87554406e8cc242fa84a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "5abb70f82d92c111bdbf00b4227782cf"
  },
  {
    "url": "other/index.html",
    "revision": "96ce5688db94c026b81d94bca8ece6ac"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "86edacc12ab195f5ca8fc0cbd3bc18f8"
  },
  {
    "url": "vue/index.html",
    "revision": "069d0d9479f5d175a2120ac2006597c5"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "6652ccfd870815a4f83bd017e22db635"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "33ddea97cb73d53b74488881adf2fe14"
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
