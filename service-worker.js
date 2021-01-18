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
    "revision": "3a7534c92dccb0ad759b867445aaf172"
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
    "url": "assets/js/35.1cced0ab.js",
    "revision": "6709507fb384f47b3efbe178277f7fbe"
  },
  {
    "url": "assets/js/36.f7b0e54e.js",
    "revision": "03fc27f3722a34bcac4d3fce8d3e05f8"
  },
  {
    "url": "assets/js/37.f01ff9cc.js",
    "revision": "b592b68ccb8b4397360af01ca4a00e0d"
  },
  {
    "url": "assets/js/38.9fd68628.js",
    "revision": "953a9672f14de91219d042e9b60c8117"
  },
  {
    "url": "assets/js/39.4bdbf1f2.js",
    "revision": "a0db09d0136eb8825cf7835b52072e62"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.02b35833.js",
    "revision": "6622a82dda54564e03e89869daf3b0e3"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.4a50d3e5.js",
    "revision": "0643029ae9c6ab4596914877a131aefd"
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
    "url": "assets/js/app.5f1148be.js",
    "revision": "1be323662e866b26e456bc1b440937df"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "37acf5490db0d1c008181c3f96d2fe13"
  },
  {
    "url": "element/element2/index.html",
    "revision": "d9476e301ddab1fbe83606ad83fd6339"
  },
  {
    "url": "element/index.html",
    "revision": "0436cc4928c56e34d474d2ba7b1318f8"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "d652140d005728f678d33cce6d8ae80b"
  },
  {
    "url": "java/index.html",
    "revision": "670c2534e0009cb103381331e18c8052"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "b049d5d071f8be06a3163b71ff9dc3d1"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "7adfaf3a35145a68f62d095799d96f96"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "a5cf908e7f61944f0d911fc8117cab35"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "b364d4625b57c569d968afc331db8f76"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "3be4c77d0d7e7fa7578ebfc3163869d7"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "8d3ca02d8da7e3037065f5d03b5333cf"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "81c48796f3fa2f807c630631b542ce61"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "40ff71a89065e89e71b4e9deaf248d90"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d038b427b24f8b2638805885bbab4204"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "6a3ca93349722e0f57ed2c1c6b339300"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "f75a993234d545a1b35f4ad666a6f67d"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "7653b06b17c0dc4e0e2a6f2768198aa6"
  },
  {
    "url": "java/java2/index.html",
    "revision": "0ac7c63db00dfc6d64645f2c478a08b2"
  },
  {
    "url": "mysql/index.html",
    "revision": "8d39e5318a6f2f492cdcf80e88f867a0"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "8516abf41d6b7863491ec4a39371b10b"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "495d4aedfd665d9ba13df9a4b9877767"
  },
  {
    "url": "other/index.html",
    "revision": "7f2fd9b08ecf4cb2a1ba28d8324e8c7f"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "ac48f2b796292235e7c61d4c73211e77"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "1baf0eb3ea5dc4bb5b19a396547faa13"
  },
  {
    "url": "problem/index.html",
    "revision": "2e9b2e8b1a949bdb0b6e3edb83ed45cb"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "9f4f32b1ab764a302b233d099cc403fb"
  },
  {
    "url": "vue/index.html",
    "revision": "ae1ba33cb57269013c6c6322b0092792"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "878db93b96dab5ffa3ad82e6f0c0a0d5"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "6b04b54cdc56f67e5b82c204b00d8f01"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "2de59f15c96503435cc02a077cd9e7c8"
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
