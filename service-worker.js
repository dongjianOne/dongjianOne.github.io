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
    "revision": "f48576e1c54b6f52a4f7ec1cd39a7651"
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
    "url": "assets/js/31.fa6116c9.js",
    "revision": "391b9a579494a3fe169ae71486c65fe0"
  },
  {
    "url": "assets/js/32.1dbfe938.js",
    "revision": "fb9b30feaff8636c1747e35c3914155d"
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
    "url": "assets/js/app.f2fe41a0.js",
    "revision": "024da5876ebd638bee96acccc813fe8a"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "65720e4a9b41057c324b3dcb290802b4"
  },
  {
    "url": "element/element2/index.html",
    "revision": "aeb6e0d661025f1d7490c9fc553537b3"
  },
  {
    "url": "element/index.html",
    "revision": "a37248fcacbe81a831fa3c380c9adf29"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "7060c40cc02a3c3f311007c6c50e2b85"
  },
  {
    "url": "java/index.html",
    "revision": "8da735adb1734edb22d4688b2d441699"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "c901030e1be492557ca1066b0a9f4603"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "e37b06e0cd26ef6b3599022c3824150f"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "4030035f51afccf765d5951b485544cc"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "e37ef9e8b3eb203d9cc5fb0f979a310f"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "664b606db77a04e412329084fba2c8a2"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "c22e601bf8d08aa88206d1e1e85c0b14"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "08331294e1b41ff6a141f57bd1505146"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "198ca6b8f4a7db04ead93377caa6dd23"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "2614315232f562b139a6adfa574fafae"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "3f6a5b9952ee5e73ae3c67cf1dcf19cc"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "596104aa360516e9b235a505b57609d9"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "7af254d16cb16b58b6b55684bea3ca2e"
  },
  {
    "url": "java/java2/index.html",
    "revision": "d0e6b699fbbcf67dd46dcf5452dcbd82"
  },
  {
    "url": "mysql/index.html",
    "revision": "b688a283d02de6d6e9048113864b1c2a"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "ba2756e1262e14d2a803985386cac9ed"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "c1199b68b02dfd02238438d74b45f66e"
  },
  {
    "url": "other/index.html",
    "revision": "c0b9b34d66d9430444b7142e954ddbee"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "46e4ad8324e60a83853ba727e9ff03b9"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "6a61617572a3fa581b68b33622dae814"
  },
  {
    "url": "problem/index.html",
    "revision": "b8a41bfeec8f61a0dab75c82e2bff95c"
  },
  {
    "url": "vue/index.html",
    "revision": "4a6f77d3e928101774ce20a30092502f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "77ac2bc90bb0504b5cc399836cbecba4"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "6df8c208b832042622f8fe8ab1697124"
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
