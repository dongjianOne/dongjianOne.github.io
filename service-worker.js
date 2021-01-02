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
    "revision": "6a7a5d39f5e207cad743bd20fec94a39"
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
    "url": "assets/js/11.d7f97ac9.js",
    "revision": "92835f0b5e50b2402bca2b2773494b8f"
  },
  {
    "url": "assets/js/12.8a5faa66.js",
    "revision": "2ea14589dbd67d14b208a35f6bf5e9e4"
  },
  {
    "url": "assets/js/13.bcd2f40a.js",
    "revision": "5e39511b384722f56edd01d5c9f008d7"
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
    "url": "assets/js/34.4d34f5e3.js",
    "revision": "7cb46cda341f0c182f29bb83e694a516"
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
    "url": "assets/js/app.3aa2300c.js",
    "revision": "91d6c05a54f64a6a1791d0c0181c0a20"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "c4d0f52b97dd3de800117eb2b22734c5"
  },
  {
    "url": "element/element2/index.html",
    "revision": "e7a36b45748728badb7002f98247c5f2"
  },
  {
    "url": "element/index.html",
    "revision": "4f5fe815b83312142f2c3b08f7fa314b"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "3deefb19402080ab57f95a3cb57b3a7d"
  },
  {
    "url": "java/index.html",
    "revision": "39ffb641350eda981099a41b27699bbf"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "7812d07245d59399b6774e936b262f4b"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "639014944de0b2f8b666cfe3c9ade9a2"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "af163b07928ab4cb215e41bebf4f8b3c"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "6af8041688e6f39c1afa41eee55e111b"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "d1adfd3a2102bc001a68eb7cc64591ca"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "082c3eb3e285ab04cb57e16a423ce433"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "b189ddacd4eb09a631b56ca0823f8580"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "1e3975034355eae490843fde5ec8f513"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "656b6ea941a279d4f76d151c0d333df2"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "ef31d63c72f6171a558c13c3362d63e3"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "4cd851501528a0fa647b2e5e35528dd4"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "fc0164821d61540adee4e30d3409fff2"
  },
  {
    "url": "java/java2/index.html",
    "revision": "a652887d90ea11d1b04c699a1839b526"
  },
  {
    "url": "mysql/index.html",
    "revision": "6e12eeb5832d3daeb8df752ac0b708ee"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "3b1d51348c4af6fb4433510f4285824d"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "0eddd289f16a5314c02b65dc4255b8bd"
  },
  {
    "url": "other/index.html",
    "revision": "c7e06d1d20cec78da297d20e101a3924"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "9f0f4e31c0ee708be038044e86cca8d5"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "72419d79239a4d3aea4c6bd5c5d47c0e"
  },
  {
    "url": "problem/index.html",
    "revision": "e2078f1596f8fc53cdba43d42bbf286e"
  },
  {
    "url": "vue/index.html",
    "revision": "fbc3d9167464f684c61afd36c1c58d79"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "d4116b9c9eadeba6498c20d6cf55f452"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "30404f861fbdf14d5ed2dc8bfc1d9e46"
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
