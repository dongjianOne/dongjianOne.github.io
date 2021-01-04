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
    "revision": "3622b65eba40180ce6c3396399734950"
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
    "url": "assets/js/37.74c4c6d4.js",
    "revision": "39f3383825d83fde6139a860791caa75"
  },
  {
    "url": "assets/js/38.1be0c461.js",
    "revision": "3a0587008dd8bec525b7918040adfa91"
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
    "url": "assets/js/6.860c23b9.js",
    "revision": "d46ef0494cff09da05d021737845eeb2"
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
    "url": "assets/js/app.e3e97800.js",
    "revision": "f1585c6af6a312b9ee589c7d2b36d0fc"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "4331fe8e05ee7b26fd50e1481f75e527"
  },
  {
    "url": "element/element2/index.html",
    "revision": "15c34929f2ea747e1259423873add28d"
  },
  {
    "url": "element/index.html",
    "revision": "33a9d57f804ff653329599e743e21124"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "f78877cdb5fa7ec2d978fa5f0a062b1f"
  },
  {
    "url": "java/index.html",
    "revision": "0c3913bd922ed9cd662c2f53c748533f"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "5615bbc30f5a4095e1c3b9bfa4d8fc2b"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "cd4fe8aee38dcadfb92fce7bf7272d95"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "61d20dc7707441d6e2c207595c7e2b6d"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "fae922809a6d8a0510c9c0a02449112a"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "6709bbea5bbbcb62b28cc3e00c8fc961"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "a96fe9e6465bba23e69b26399d1dbb20"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "6317d6b63673d8c2b06e517dc7892a47"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "ee0516e74c1b50f2d15c128c62cc3dc4"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "16978c2663aa4c87417066eb62998fe9"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "3c28ddd1dd118b4885a0ababe0568e18"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "18cfcf8aabffc60e9b3fdc4d970595ae"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "438394848e90ba7066c16828497a2e46"
  },
  {
    "url": "java/java2/index.html",
    "revision": "15d2a8da541ee5dff40eb404e660e73c"
  },
  {
    "url": "mysql/index.html",
    "revision": "b084717b90b442150be94b55cf7cc372"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "b8235b206ccdef22580eccec4ae7c7c7"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "f401e8ef979586ea5f31b4bb8656b393"
  },
  {
    "url": "other/index.html",
    "revision": "1299733a83eeb80fb545c9a8b9402671"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "62c96f0dc894c932cf2c931c9ea0f33e"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "3f376cb5d791a19bb9b34ea1b9865503"
  },
  {
    "url": "problem/index.html",
    "revision": "7ffd6ce94735a0aacc784f5e86959c9a"
  },
  {
    "url": "vue/index.html",
    "revision": "99396470c678186c0757f6331d04eb0f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "52b3f27d72cbbb0968772cbe9a83d029"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "2bbaca170e094c7a2662c9ac8e4a3413"
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
