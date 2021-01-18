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
    "revision": "a755c9399c5ca9ae753c6cb6e09f228c"
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
    "url": "assets/js/35.7bd6e34e.js",
    "revision": "573e7d4814426e060d449327a9495eba"
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
    "url": "assets/js/app.c67c57b2.js",
    "revision": "662820a8148101f3148dbb0a9559c2e6"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "736dd9aeb9c0527ccc6cb19885deea20"
  },
  {
    "url": "element/element2/index.html",
    "revision": "96a321476c3504bbdd7f060b2e69cd6d"
  },
  {
    "url": "element/index.html",
    "revision": "9ccc660d286754fb4b15b12504343331"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "f740adc2ad84c69d8df95a5a323ab57a"
  },
  {
    "url": "java/index.html",
    "revision": "25ff09aede4fc38f115dc1f7a2694dbc"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "36b80cbeb53e0562c1cd45bee44f5752"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "8ffe87b4d78f0c49d45d53c42c1f2e80"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "f5d6fe180a1e731f869eeaa63d48e501"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "a2751aabc55bcb9b27ffd4743473348b"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "a5bb8b727eb291f2e11d8f428e6aadea"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "8bfd14c01c1bcc607ab2e19b442f22da"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "511678291aeccb156ee42fb5186e86d0"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "9da2e2a06008c05d813198048358409e"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "36a93acb80eb43977225497beac7354e"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "ed5e8f71c80d4c556c4080e97e52967e"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "f16b3ac43520ed3d168fa2069d5dcfea"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "71d016923bfad8dab8f69ab4e8aab236"
  },
  {
    "url": "java/java2/index.html",
    "revision": "9398a1890957da532f8cfae2b3efca64"
  },
  {
    "url": "mysql/index.html",
    "revision": "e74ec75ca307d9cb36f49da485e620c1"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "683e95f448c656a58bd7034e1090a6f9"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "b440429881b85db5d16cdd8be3ef657f"
  },
  {
    "url": "other/index.html",
    "revision": "c14ebb4440c03487ef48dd7decfe2318"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "f584b31e40f521dafd34f56142f853b4"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "6b349edb9edf5bcb354e37703fb8c182"
  },
  {
    "url": "problem/index.html",
    "revision": "d4cf137fd4838d4a17b78c75f9a48adc"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "e54efbfd7ba5b7aaf47d1b19651a05c4"
  },
  {
    "url": "vue/index.html",
    "revision": "31d607591a63aa16093dc7460444ef60"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "195147de2341e19e26ec10ddd7a60908"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "8254b8ac5e41d40a6254f06bbb3f1d6b"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "a0e2c8858489345fb12910f7391c195b"
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
