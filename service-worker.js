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
    "revision": "0d32dc132f98cd1fe8e1838bd47dff9c"
  },
  {
    "url": "assets/css/0.styles.e95cc0cd.css",
    "revision": "7a01d9d422f0d35ce152d3f74b42e1f3"
  },
  {
    "url": "assets/img/1.be8cbe9a.jpg",
    "revision": "be8cbe9a1540013f6c8357eb1d248dc3"
  },
  {
    "url": "assets/img/2.1234dba5.jpg",
    "revision": "1234dba5d07123644ae09cc7dc863e85"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e4b342a4.js",
    "revision": "088bac1852ff09eed0775bc54ac3d3b0"
  },
  {
    "url": "assets/js/11.bd40864c.js",
    "revision": "da589d9b5bc2e7282f0c4a0b0f1f3a0a"
  },
  {
    "url": "assets/js/12.ac7c6185.js",
    "revision": "6fef6ed2bb39d2e6ada9ca83981be557"
  },
  {
    "url": "assets/js/13.0f9e5aec.js",
    "revision": "e52bf6d608284a90d00b722c65703264"
  },
  {
    "url": "assets/js/14.c5bd594f.js",
    "revision": "6abc4a74130a8c3cad11683aaf5d45b5"
  },
  {
    "url": "assets/js/15.4ec7af9d.js",
    "revision": "82a7085e7ccdec2af3767bc4d82dfaa3"
  },
  {
    "url": "assets/js/16.1d4df6e7.js",
    "revision": "2d3deb66b1e31c48b7d23135ec0c124e"
  },
  {
    "url": "assets/js/17.81008e40.js",
    "revision": "7e59f6eec57d483998ebf9e77d4f1855"
  },
  {
    "url": "assets/js/18.024b4f20.js",
    "revision": "d22f268018a29866713acf2b908253ef"
  },
  {
    "url": "assets/js/19.bf670a4c.js",
    "revision": "d446bf081aa3b4cc9176c07140bf958d"
  },
  {
    "url": "assets/js/2.95b5d4e7.js",
    "revision": "149f40df6ca78254ec8b9764d6faa270"
  },
  {
    "url": "assets/js/20.7f895870.js",
    "revision": "060ab0f2633aa38ca33991c8bb72181a"
  },
  {
    "url": "assets/js/21.1063093a.js",
    "revision": "3a8fb7373ebf6ae6a1b5d5161b79573c"
  },
  {
    "url": "assets/js/22.27a600df.js",
    "revision": "d8fbc313152e239dc3ef4aff46a34e1e"
  },
  {
    "url": "assets/js/23.99a7e995.js",
    "revision": "ab54d79a897386647552ecffbe701717"
  },
  {
    "url": "assets/js/24.a693b450.js",
    "revision": "aa9bd7e0c2df1a294704744748341abf"
  },
  {
    "url": "assets/js/25.0aded761.js",
    "revision": "987cc0a73cd2e5dc94295f95ee36bd2d"
  },
  {
    "url": "assets/js/26.577ca356.js",
    "revision": "f1d651f4fc994f421eba245adb0506cc"
  },
  {
    "url": "assets/js/27.b5626320.js",
    "revision": "a9fdf38b8641e8879f9d0ab50c06c3ec"
  },
  {
    "url": "assets/js/28.ee5daedd.js",
    "revision": "1a442e63a9517b510f1c341175dc52d4"
  },
  {
    "url": "assets/js/29.d88ddc87.js",
    "revision": "dfe27032dd5c8fdde753426391d4a3d5"
  },
  {
    "url": "assets/js/3.616127a8.js",
    "revision": "b597656982f2f86b918e13d71eca89a6"
  },
  {
    "url": "assets/js/30.9cd17172.js",
    "revision": "6bb2f1e3cafcf35d56bf44adc03f6c4c"
  },
  {
    "url": "assets/js/31.19b4a967.js",
    "revision": "948afd0012e2a09f4499dfcf526da2a1"
  },
  {
    "url": "assets/js/32.7cf919b3.js",
    "revision": "fd5acd8a715042355f3526d6e14fdd30"
  },
  {
    "url": "assets/js/33.54013d34.js",
    "revision": "1042e9c5fe89704d5087ef0b7e4817b8"
  },
  {
    "url": "assets/js/34.c39b0ff0.js",
    "revision": "ce9f114682d93fa23543159b0433d321"
  },
  {
    "url": "assets/js/35.df4dd8ba.js",
    "revision": "35548c4ea332544d6b694e49cdaa9d52"
  },
  {
    "url": "assets/js/36.00dff13d.js",
    "revision": "234dec71da2bbcb8ee2c17cd312f3699"
  },
  {
    "url": "assets/js/37.75d56b7f.js",
    "revision": "012cd0261f8fd8fa4fa6fcc6f739e6c3"
  },
  {
    "url": "assets/js/38.d97f3c31.js",
    "revision": "325d8dd75b644a8296d17bc688280ec4"
  },
  {
    "url": "assets/js/39.748b25a1.js",
    "revision": "194d45b605b348829870ca3fb1fae507"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.18dfa80b.js",
    "revision": "61391fb64a1440e477c6624032bf9dd9"
  },
  {
    "url": "assets/js/41.f2cbfc8e.js",
    "revision": "ee1287cf926e4730e3abeee68ce46c06"
  },
  {
    "url": "assets/js/42.9238ccb1.js",
    "revision": "8d807cf394652d9a3e5664624420188d"
  },
  {
    "url": "assets/js/43.6388b22b.js",
    "revision": "7586db0f163fc8efe14e54a0cb3f5c95"
  },
  {
    "url": "assets/js/44.84239ab2.js",
    "revision": "63c85027654b0a736fa64f55b2a0cfef"
  },
  {
    "url": "assets/js/45.1123c376.js",
    "revision": "2b9e54829c613614ef5215a0b9d1abfe"
  },
  {
    "url": "assets/js/46.5f576cb0.js",
    "revision": "103a5838d57415de5de0b66bddafd934"
  },
  {
    "url": "assets/js/47.db2c5f25.js",
    "revision": "bfd9ad52b147c7b5f766a5ecd0646d13"
  },
  {
    "url": "assets/js/48.5756c53d.js",
    "revision": "ae7eaf593892229493a7cc5a02b413b9"
  },
  {
    "url": "assets/js/49.feadd7ce.js",
    "revision": "70d6acd414a2c36fd9e8be592eb7b362"
  },
  {
    "url": "assets/js/5.eae9c0f8.js",
    "revision": "c6d94686ca4d059dfbefa12a88a89772"
  },
  {
    "url": "assets/js/50.82ab7528.js",
    "revision": "52b2197ea0d16817f9ec4ec591c022c0"
  },
  {
    "url": "assets/js/6.59a4405c.js",
    "revision": "e5735e60e3be1b609d2807699cf76474"
  },
  {
    "url": "assets/js/7.e4b3e82e.js",
    "revision": "75910a6a6091e630d83251119eea5088"
  },
  {
    "url": "assets/js/8.4da51d7f.js",
    "revision": "0fea3ce026472bbcf6b81c358ab8d1b1"
  },
  {
    "url": "assets/js/9.d0920098.js",
    "revision": "60c27858ba2df71bc3dd8a93c24935ca"
  },
  {
    "url": "assets/js/app.ec7b1ca1.js",
    "revision": "39a94e7bbf64d92e7323f47a31f6953d"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "507fe416748294d5fbe551b4c4dd3b61"
  },
  {
    "url": "element/element2/index.html",
    "revision": "baf8f08030bd26fbef2f9db22a0c1396"
  },
  {
    "url": "element/index.html",
    "revision": "d734282341ff7f2e5588fce4071e1525"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "448a3337be48b84430a3ca9e2de3e751"
  },
  {
    "url": "java/index.html",
    "revision": "836abfb58d4ae4ad9e5ee2ca5d184660"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "6e6af2bf44146dc82b64f6057d96536e"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "145889551ef75eace98b25a8d334b783"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "d9ea25a9455dd8acb399e70940a01841"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "f04c3f0ffc943029c3f3746a801cf3f8"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "3b3c6e1afbdd0218e00cb7f3742c3c9e"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "e5ccbc6e5070164f1abde600dfdd59d7"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "5dcf54237f960c95b02e54e8d0b1c193"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "d49f7d26d519b448507ef7e5e0ce74e0"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "e631e406cde59d9d4736a9f49017c6c8"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "8c399e48f18bcba7f71578c2d0248b48"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "52be21372cc0008712b4641cb233a01f"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "aa43ad73d833a0449b0601bb70aea9ab"
  },
  {
    "url": "java/java2/designpattern/singleton.html",
    "revision": "791fbf6ff235dfa0fc7fe2fbac7a41ae"
  },
  {
    "url": "java/java2/interview/Decoupling.html",
    "revision": "a6ded40a1d48263042a3ba0dfdc0bf4d"
  },
  {
    "url": "java/java2/interview/equals.html",
    "revision": "572a1f4376a7d73e07df1c29efc3080d"
  },
  {
    "url": "java/java2/interview/generic.html",
    "revision": "d16f7d69a023744549ca908669f87d37"
  },
  {
    "url": "java/java2/interview/hashCollision.html",
    "revision": "4d985c61bf5b08c3b29a49dda6b3486c"
  },
  {
    "url": "java/java2/interview/overload.html",
    "revision": "4db11ccaa63d2bb8e4ea48af09a1cad9"
  },
  {
    "url": "java/java2/interview/reflex.html",
    "revision": "9b25a4b2dbaa8a9fce71b2947ddb1fac"
  },
  {
    "url": "java/java2/tools/Knife4j.html",
    "revision": "e7ef08444f86f9c2559e5646da7b7121"
  },
  {
    "url": "java/java2/tools/summingBigdecimal.html",
    "revision": "98b148a5630ecbcb57e4a66df297ca3b"
  },
  {
    "url": "mysql/index.html",
    "revision": "dc87761d3e1c631f8f31f5ff88ae6563"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "0ca61d08f6f347752c024e0e696ef730"
  },
  {
    "url": "mysql/mysql1/SQLOptimization.html",
    "revision": "5511b7265b771547ace19f0dc4c3217d"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "f432845760d3fa0f107e18e5f6ed2839"
  },
  {
    "url": "other/index.html",
    "revision": "a738a25663d41109bcdb46722b822b45"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "f76f82ef4e4ba57098a14f58a73a9b19"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "304516a94ddf50fa15d40b60e392595b"
  },
  {
    "url": "problem/index.html",
    "revision": "eacdedd85450f45f98b6c2b839932dc6"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "6ce1b7cf54933f4de972314ee8ba7b7e"
  },
  {
    "url": "vue/index.html",
    "revision": "84c052bc8c55b71817bad0f9a81adc57"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "555a0e7986fe01f7d43b2b9bf400281f"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "875b23f8ffb2e790f76d4c32dfde1178"
  },
  {
    "url": "vue/vue2/install.html",
    "revision": "1d8a272682fa56241956de6509c426ab"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "629c060f6da2ad9246be1d72c15e2b7e"
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
