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
    "revision": "d5d425db21416bc26f415c1fe4a0cd38"
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
    "url": "assets/js/33.e0111269.js",
    "revision": "eff252cf3f85beda95d335725437c5ad"
  },
  {
    "url": "assets/js/34.76d1365f.js",
    "revision": "f7d27f7a2d5302175f654c37da5f52e6"
  },
  {
    "url": "assets/js/35.ba0d4bf2.js",
    "revision": "29f12d4ba47429dc8cc7073c517b1cca"
  },
  {
    "url": "assets/js/36.28250c4d.js",
    "revision": "13a91193943450fbde7a8ab486d8b0e8"
  },
  {
    "url": "assets/js/37.5beb30bb.js",
    "revision": "85e1b43ea6864236aad8ba2c3fbd28f6"
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
    "url": "assets/js/9.3b418eb8.js",
    "revision": "ec101251e4f588396181daf269301647"
  },
  {
    "url": "assets/js/app.7de55f93.js",
    "revision": "275a208e23953c4f6212c0e2af579d15"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "64d1eb52f50a8f86096c93e102dc3084"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ad93effaf64f9003d1a30e956392a128"
  },
  {
    "url": "element/index.html",
    "revision": "bbd0d80486f1880e60bc815a676c222d"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "0cc9aa52e69e446abb902af4baca136e"
  },
  {
    "url": "java/index.html",
    "revision": "dc1144040aaff378cf45cbdbed3b6216"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "acd51cfc7759360831a81358814fa12e"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "2f2bf23380bc16b0cfb9fd04fee2633e"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "1675ac7916f6d01d22dc61acaf7a1572"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "09dcfc8c6f45cb7a5912168e559e00fe"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "7f321e7c0230c5068b196c2b277d267a"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "721f0a1f4d39477ed5c838f995f11929"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "9cb68c841d655c5c75f551044a26323c"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "a7559a4ba6feb16add9506aec9d9ea9b"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "5f465afd5f5daef8e2f0c660d1978180"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "d2185dc61816025d510e6ff69f4c77b3"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "8bbd5df79d4fd46533738d4e4070243e"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "fa085170f2b81cb55a7c2ef275896c19"
  },
  {
    "url": "java/java2/index.html",
    "revision": "6b8b92ede66ca9a9d7b0f8cd3a245fa3"
  },
  {
    "url": "mysql/index.html",
    "revision": "59a63630d3bdf439a63fa17385b7540f"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "85fb9e35e28e327bf55244da2b1993b8"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "d69a0f1dbdc0b15d6e3569598a94cfa2"
  },
  {
    "url": "other/index.html",
    "revision": "962525289fc5a7c27ed89a8625f6b0ac"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "5a441b8644cdde4fa87ce9237cfeab9f"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "7125a5c16cef07b68b0b70a695f4080c"
  },
  {
    "url": "problem/index.html",
    "revision": "7c15c59d3c38788be3e8001af8823a98"
  },
  {
    "url": "vue/index.html",
    "revision": "fcd62e0ab1bdc47a871dc77c96a136e5"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "ee804446ff7459b85f0d973ca1d680b4"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "b1cb7f2145748288e260d29c24776322"
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
