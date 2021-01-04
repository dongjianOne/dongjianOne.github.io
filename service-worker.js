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
    "revision": "a4a9a9f5f94953ab06f43005bfbe5877"
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
    "url": "assets/js/12.00a27641.js",
    "revision": "d23861ace4d4a9995f591e234868af8f"
  },
  {
    "url": "assets/js/13.39f77793.js",
    "revision": "f797e1a885f07b5228cce16f6da386b3"
  },
  {
    "url": "assets/js/14.13ab12d8.js",
    "revision": "58cb6e9a82a355e63eaba60ff7b1740a"
  },
  {
    "url": "assets/js/15.92c457c4.js",
    "revision": "7223dab8e746a5f09c14245e43dc538c"
  },
  {
    "url": "assets/js/16.3bea756e.js",
    "revision": "a9c0b52475a1609978309c6f8472d0c0"
  },
  {
    "url": "assets/js/17.84014714.js",
    "revision": "2252cbc6223cdb09d10a2a147f2035a5"
  },
  {
    "url": "assets/js/18.07244596.js",
    "revision": "df25534fb23f29adf102429d0194c735"
  },
  {
    "url": "assets/js/19.5993831a.js",
    "revision": "e55e65ba622dc76a9d6b085d2d6a419f"
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
    "url": "assets/js/37.42b7198f.js",
    "revision": "2c307a15a76123320f2ed8ea6df453c1"
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
    "url": "assets/js/app.9347fd03.js",
    "revision": "59e275411bf763dbd07ef0b9edbfb1e6"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "b2703cbb9906bf914da93af00a0ac663"
  },
  {
    "url": "element/element2/index.html",
    "revision": "8f425ec5f56fb699bed5e8a706c6d40d"
  },
  {
    "url": "element/index.html",
    "revision": "8dbb2305a778b352e571508b377bba5c"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "70cc60b289aedf8fd33f7812f94f35b2"
  },
  {
    "url": "java/index.html",
    "revision": "f5f77dbb9012185dc032bb13f7c13f73"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "f0b785be526648187a7dffe7a52085f2"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "4b1f0f1a5384523ba453db73a16cf381"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "b70954e9730d102d43393e42b70e866d"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "213dcc2a945611b3edcbc387855fe17a"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "db3a10d486684ae6d4a9b5942418fad8"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "21acfa9b4bd3fcef7470882ede315ef4"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "2389e087f8f5e9754f244c660b113e28"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "24a5806bc144e89bfbe50058e8fef7b7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "3fea71397ef16bd05ce3e55619be0642"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "07cf09c96dc9d20207b40a106ff5c2a4"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "f3e4f0de179e7369e405b5e44011b815"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "3d660f93c4f97e5967b13d2dfa4f3f9d"
  },
  {
    "url": "java/java2/index.html",
    "revision": "c733aaafcd72671267d741abb3cc0437"
  },
  {
    "url": "mysql/index.html",
    "revision": "404802293946068f5ef1627ed4fa6aba"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "5ae0f326d65f6ab4b53983b67e73ce4e"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "fe5f7cbf3fa4f702bd4eb7ea5661787c"
  },
  {
    "url": "other/index.html",
    "revision": "0ba6d03461360d38b9b25a0107723eee"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "73c00b733fba03fdfb94c845e73f03c1"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "ebd8b62b2e16c54e61d777a930d7837d"
  },
  {
    "url": "problem/index.html",
    "revision": "14030ff28e2884b812ee0799cc6e0520"
  },
  {
    "url": "vue/index.html",
    "revision": "cc8ebcc83a5e1f9beece9479a75f5807"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "b543a054ef39ac92ee3bffbbf3b05f03"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "8b1d45a2a3fcbb3cca01029bb611da73"
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
