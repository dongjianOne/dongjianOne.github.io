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
    "revision": "90849468712a34ed4333049db97bceb8"
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
    "url": "assets/js/app.0063d684.js",
    "revision": "e18e8165adb38f5f7ec8448c97756e12"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "2d1aa112132a43777fb910e25975cf4e"
  },
  {
    "url": "element/element2/index.html",
    "revision": "4169cabf663b5c01d708f6f19bfdbd4a"
  },
  {
    "url": "element/index.html",
    "revision": "33e40ac65c4eafbd13ffe6ce52313c90"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "a28398f66aa4eed957fe68b3c8968c23"
  },
  {
    "url": "java/index.html",
    "revision": "f5d1527bdc0dd69a25b93906cf2a3346"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "cb869b12dd14f9960a452181e490c9d1"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "f99b2ab74d3bdae173e6960b234ca7a7"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "adf34d7d9908854ef3671a875849a379"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "7c3921ca4f9606a58f8ca5a43932dee9"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "965e7744eb2424635a8ed3f4db7bd5ce"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "55fc711bfdfa79f7cf7858741db14182"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "79519eed3ec1d6bc495b98d6b1957720"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "4085ad3eae56e7cdd98df597e3feab06"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "2d2f1b343b7c8a93f55ed11053afaae0"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "781250524d1f44852a598b8a6bd60a4c"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "39d2f9bf9dcfdb42c79241c9c1836669"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "20bdbf4256ade54562efc42668b1cd58"
  },
  {
    "url": "java/java2/index.html",
    "revision": "591d7b9a8d2ffac203dd48342c5d0cf3"
  },
  {
    "url": "mysql/index.html",
    "revision": "73e22886baec151f45cca02e746037e3"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "6a6d4cbebba7a48e37a0cf8f976e3afb"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "ab3931d0610c446bf012817a72ab3350"
  },
  {
    "url": "other/index.html",
    "revision": "e84d2c2c8231d85577ad1a9e8a784d19"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "a9b59292f059b39b56da9ff4a7d0e827"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "b560baac231edcf236db9fb42352ed51"
  },
  {
    "url": "problem/index.html",
    "revision": "8444ebc7a80967dae700e8782f2120f2"
  },
  {
    "url": "vue/index.html",
    "revision": "55f52283b2a731212b26dd1874333b7b"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "9e0fd06b090138339fea8ce382b82092"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "907d9424ba303fafa57141e2ba4c6689"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "71eff19528fe0691ecb101216a4a339c"
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
