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
    "revision": "0f6c4600a9684d4a35faf7dcc3f7dda8"
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
    "url": "assets/js/28.5f309bb6.js",
    "revision": "bcb5df51a479996ebfc9df95aae9dd77"
  },
  {
    "url": "assets/js/29.969ce199.js",
    "revision": "7e0ad118c613b6717a3ede908e6acab0"
  },
  {
    "url": "assets/js/3.616127a8.js",
    "revision": "b597656982f2f86b918e13d71eca89a6"
  },
  {
    "url": "assets/js/30.2479ef4d.js",
    "revision": "38795bbb961b5bf6b706ce567204156e"
  },
  {
    "url": "assets/js/31.b0095ea3.js",
    "revision": "c7ea88e70d318c325c39d24ca7823f7f"
  },
  {
    "url": "assets/js/32.a4e143cb.js",
    "revision": "a3309a0e9083cedfbd6cadf3ac1526aa"
  },
  {
    "url": "assets/js/33.ae9ab355.js",
    "revision": "8f84733949d903c3383731cc24e4b1b9"
  },
  {
    "url": "assets/js/34.1e77db7a.js",
    "revision": "e83435a6e8ec4297d7197a8e1048738f"
  },
  {
    "url": "assets/js/35.c4f88249.js",
    "revision": "067285f2363fe97201433e0457acf486"
  },
  {
    "url": "assets/js/36.d65fa45c.js",
    "revision": "f5bed6bb185110a3d7e2dba5611c665f"
  },
  {
    "url": "assets/js/37.c6cb0683.js",
    "revision": "a702035a2d33a456d0e26b16021863f6"
  },
  {
    "url": "assets/js/38.0c6ab8ed.js",
    "revision": "a0e3f7604596868e79854526d97d6e14"
  },
  {
    "url": "assets/js/39.71ef4c71.js",
    "revision": "a2c8a79ffd3d59cf79ef7dee438d993b"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.957da777.js",
    "revision": "aa38a8c7f9a8fdf942e37f2c006696b2"
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
    "url": "assets/js/9.7605adee.js",
    "revision": "1aa11771104f6a26b91564223a69e3c4"
  },
  {
    "url": "assets/js/app.cfb3f233.js",
    "revision": "c565f6a485f7d7e0e11716ad2a25929a"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "d75cd47083fadef103e674822f0d2337"
  },
  {
    "url": "element/element2/index.html",
    "revision": "8b063be9b71503519b266442efe65213"
  },
  {
    "url": "element/index.html",
    "revision": "425e0cc6ebe241158e2758da3b7ec930"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "b1e9a5dd50b963ad5d600d8555cc15f6"
  },
  {
    "url": "java/index.html",
    "revision": "67d484c2c54dd02a0638d34f10c7723a"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "9ca8914fb8c9fa2d9b9a128603964755"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "65860c7d0846cb690ffeaaf33620c358"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "b82889467a5272be89a8fa7a94dc7b99"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "6870f035480a00f836aebafe64edf431"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "68bb520867194da733a6019f992360f3"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "7de2128ae7ff77134f6c780f345a2b01"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "656a6dcc7611923bbc97790d22d0f28a"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "9cff1db9b2b174629318ee5cca634733"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "8aa1eb00919682c7010957dcf65bc670"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "86916eceb4cb51aadd9e0a6453f59835"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "6cbf22c0ff5c4e8e63f3276fc27e37f6"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "152befaeda84cc2b7f1b69377f3d53af"
  },
  {
    "url": "java/java2/index.html",
    "revision": "1d20736d297d343e0654437e76717cfb"
  },
  {
    "url": "mysql/index.html",
    "revision": "4e869e4d5a9f059684de71459fd15c76"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "7bb08c9746335184259eb43c58ff4d45"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "ef36aa8a8749fccca4aa5f541318fe06"
  },
  {
    "url": "other/index.html",
    "revision": "9e658d5ca6cf4046794a9c8d8702e20b"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "e39d243cb1ca1c37a90291deabe8d1ce"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "3fc6d8c6ca3ac8840e4247234c5b7404"
  },
  {
    "url": "problem/index.html",
    "revision": "3f7f5346c177cbc0fecf3657ae038c86"
  },
  {
    "url": "vue/index.html",
    "revision": "7a47e393cf54d9115487af93bf9f7934"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "2963575b0711906e4ed53e6301d43dbe"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "72275d5fe502857b40c706dc0771df9c"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "e3adbbf11aec767e8c3630d0b6678cbb"
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
