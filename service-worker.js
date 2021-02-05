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
    "revision": "bfd1a529387b19d469a26f72874457dd"
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
    "url": "assets/js/28.7be452ad.js",
    "revision": "5101762aa746f8ffc1ccbb56db739142"
  },
  {
    "url": "assets/js/29.98af4c99.js",
    "revision": "2cbbe655c2e774a3ed97a1bfec16e14e"
  },
  {
    "url": "assets/js/3.616127a8.js",
    "revision": "b597656982f2f86b918e13d71eca89a6"
  },
  {
    "url": "assets/js/30.e393721b.js",
    "revision": "8dbef4b48bfc2a7e820b561ce4be2b57"
  },
  {
    "url": "assets/js/31.72361ab2.js",
    "revision": "c888a8a8f61bbe66c1d93fc9de795a95"
  },
  {
    "url": "assets/js/32.9e994d92.js",
    "revision": "685883e2c5a48a5172e12aceb01b591e"
  },
  {
    "url": "assets/js/33.16fa2d17.js",
    "revision": "3707473e0710af14bc460e7d5c2a277c"
  },
  {
    "url": "assets/js/34.29c68183.js",
    "revision": "c39e75f6eaf29b891e92ddd029f04cf7"
  },
  {
    "url": "assets/js/35.50017746.js",
    "revision": "29f12d4ba47429dc8cc7073c517b1cca"
  },
  {
    "url": "assets/js/36.e8913c67.js",
    "revision": "2b1828fd3f0f80ba841f08609478372b"
  },
  {
    "url": "assets/js/37.0b7afdf6.js",
    "revision": "d9416d024dc92873bda01daa7d3711ca"
  },
  {
    "url": "assets/js/38.f4f7ac27.js",
    "revision": "3ffcb20a7bebe4fc7e131b29fd37b2ac"
  },
  {
    "url": "assets/js/39.0ca1c022.js",
    "revision": "9f46af8bd09f63ec1fcf9db9869b492a"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.18e4d3d7.js",
    "revision": "8890cf89e91915d45e752204b4e80d92"
  },
  {
    "url": "assets/js/41.4dd2508c.js",
    "revision": "ee2e2a2c51302d00d9a6822522f4ca03"
  },
  {
    "url": "assets/js/42.93560277.js",
    "revision": "5a1c700e0c8b4957767c8d4972134af6"
  },
  {
    "url": "assets/js/43.c0524402.js",
    "revision": "6415ccc8c62a5f44006fd9e47464132c"
  },
  {
    "url": "assets/js/44.494438f4.js",
    "revision": "7b549f5dc4c20752b389fa2556b95b9b"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.9b696c6a.js",
    "revision": "ec807ca7d17da3004a46331302022f5f"
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
    "url": "assets/js/9.29670954.js",
    "revision": "2ffcff9a8b6ae8d69f51c2d6a5dfe25d"
  },
  {
    "url": "assets/js/app.bf9870f2.js",
    "revision": "2fc2e731ffb037378ac58b0baff99ce3"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "36f3d2e249237976c39e43c57b21c78a"
  },
  {
    "url": "element/element2/index.html",
    "revision": "9d78723d9568359628b84f5cf3caccce"
  },
  {
    "url": "element/index.html",
    "revision": "ef9fda290a55825060aebb5604c4d713"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "6c5d8bb56f6ea43e41879018e5bcdffb"
  },
  {
    "url": "java/index.html",
    "revision": "7bdbb4126aa685a74fcaa97aa5e2afb3"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "e06d0d96edf89226c3be554ed32b5b73"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "bb7241a06e67113e4ad3174466bfa8e3"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "ce04f13860fd084b06355f02fa2e021e"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "724da7e5ea183bae775f032209b93a84"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "ed72d1f7391b80c2df179f9f8d541a52"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "8cae03569c29c9267a659387364c18f4"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "448ac2112cb8fa33630ffdbaa1b6520a"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "4b8465519d0697f62b31feec091528e5"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "364de4ab7d478d80467967aadf91e3e0"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "d9df572bd235ee840d59493a933e8680"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "c36d6d9f249b170cfc680de755ff1416"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "64e4179cc18ebe63777b2a1145a01543"
  },
  {
    "url": "java/java2/interview/equals.html",
    "revision": "ca65e4fb1b7f245ac6aae192a5861eb5"
  },
  {
    "url": "java/java2/interview/generic.html",
    "revision": "7a9934647d2d4897c5f27792609db1c8"
  },
  {
    "url": "java/java2/interview/hashCollision.html",
    "revision": "92e9933394ce5e7c8af01e716dedebde"
  },
  {
    "url": "java/java2/interview/reflex.html",
    "revision": "07bd502b6e31cd2eabdaf49201f6deab"
  },
  {
    "url": "mysql/index.html",
    "revision": "145d282d3dee761c5c953c08b8a6f38e"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "3623a677e465b5d6185cb5c49534271a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "7b052e585929511dd14dd2dbce708642"
  },
  {
    "url": "other/index.html",
    "revision": "20efffeb60c008162ea37f0560666308"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "357ec7ed7c98e72d38d7f5f9bdf8dda7"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "fce86a45491cb2ccc880111c2eddc8f9"
  },
  {
    "url": "problem/index.html",
    "revision": "9b408455a53e63723caef749393b3364"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "0bbfed35a366955e5cee2931a5d3f30a"
  },
  {
    "url": "vue/index.html",
    "revision": "59471e590a45508756a34e77532adda9"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "32815dbfc0a25677c33195917706abd9"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "c872cf07f2bcc0fa315993deb574673d"
  },
  {
    "url": "vue/vue2/install.html",
    "revision": "a2a2d5c06ca8f300a70e4fe131ffab95"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "414269c574f381460266a043ffb3af25"
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
