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
    "revision": "fabf640305e18574cd733a70ea8964e2"
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
    "url": "assets/js/36.8bdf8db9.js",
    "revision": "bc3126a065874c17a38d0d1cda73f0eb"
  },
  {
    "url": "assets/js/37.f56aea70.js",
    "revision": "7cf1fc46d650d29b85af08a0bb95ac3c"
  },
  {
    "url": "assets/js/38.dd00850a.js",
    "revision": "bd1ac1449e56765f05201492260882cb"
  },
  {
    "url": "assets/js/39.196e4a73.js",
    "revision": "f55e030e9b74b029860e51e14807b03e"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.bf971ac9.js",
    "revision": "83d801f266d88727cef7d9be48081b34"
  },
  {
    "url": "assets/js/41.34ac431e.js",
    "revision": "af179f40a035cbc729672a938713860b"
  },
  {
    "url": "assets/js/42.271a0146.js",
    "revision": "ccdb4b733976f85c5af289db43829dd5"
  },
  {
    "url": "assets/js/43.e6f0364c.js",
    "revision": "66851bdede49d1eda5bd411e54f61655"
  },
  {
    "url": "assets/js/44.43402a44.js",
    "revision": "27412fafe7d495ae448208ab0a48e1ce"
  },
  {
    "url": "assets/js/45.53109ce4.js",
    "revision": "adaf2e75c8cacfa3b286a8fe1ab2a75f"
  },
  {
    "url": "assets/js/46.71c83bcb.js",
    "revision": "7de8ddd8a73f17063be9a8ca859d729a"
  },
  {
    "url": "assets/js/47.3330909b.js",
    "revision": "7795fa5b09a08367fed626f71492bb5d"
  },
  {
    "url": "assets/js/48.5d9748c2.js",
    "revision": "d32443bf99e102494d810ad52181cc86"
  },
  {
    "url": "assets/js/49.ea99f55e.js",
    "revision": "876b314b18872cf34ab380576b4a0fb0"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.e40e6cce.js",
    "revision": "b8a6ca18bcc9b6044596bb4dab2da5e9"
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
    "url": "assets/js/9.d7c3507a.js",
    "revision": "2b4f9c567832198009c49c7992951878"
  },
  {
    "url": "assets/js/app.5b872484.js",
    "revision": "2fbff554e95c0802cf511cce41514c3e"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "d9bf8ea6e8033885d94fc60b97e46b98"
  },
  {
    "url": "element/element2/index.html",
    "revision": "c8f03972ae19b7c5c8692817760e8476"
  },
  {
    "url": "element/index.html",
    "revision": "3c3b5e2fc6a7f5962261118a5d43fc77"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c870d5a806202fe05ee05e9f45944981"
  },
  {
    "url": "java/index.html",
    "revision": "cae9ab73507db1845afe0e1ab1d75ae3"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "7d8fcb83670c7c635809fea4903733b9"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "4eb97f7882685203a0d9224b21af2b22"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "d9255b0156bdaf6f9003fc38638e0cc8"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "09e55b9a3dfce71add1746fb38641c75"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "0729fe2c57f2492bd95a23fc6da89f78"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "c7b21ac96f82513f9a364b3b5721fc8d"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "98bd9431064d461261d81b4e9ce86230"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "4e3e1f1f0e700c7e8184666ff5e7270f"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "b52f00e4e16e806417b831b43c181a74"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "18b4cef6cfdd58434d950df0f064da1b"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "105532d9abc05e93633a951dfd146845"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "5bfd669dd48f838df430384fa8978f88"
  },
  {
    "url": "java/java2/designpattern/singleton.html",
    "revision": "916cc83336b9f1b6b001f9201b514bd9"
  },
  {
    "url": "java/java2/interview/Decoupling.html",
    "revision": "83ce15ebfdb57a60b826edc8304d76d1"
  },
  {
    "url": "java/java2/interview/equals.html",
    "revision": "670a369508a33f2591fae54bd62d671d"
  },
  {
    "url": "java/java2/interview/generic.html",
    "revision": "fcec7f97d68ff12e412ffcd70a3446f6"
  },
  {
    "url": "java/java2/interview/hashCollision.html",
    "revision": "55e703fb203553466ef0c11163901bfe"
  },
  {
    "url": "java/java2/interview/overload.html",
    "revision": "adf2ddfddbdef82f88e597e78ee522b3"
  },
  {
    "url": "java/java2/interview/reflex.html",
    "revision": "352ac315ea174e05ba42bd704a5e662f"
  },
  {
    "url": "java/java2/tools/Knife4j.html",
    "revision": "20cbd0dd9a58162c37affcf1ed023384"
  },
  {
    "url": "mysql/index.html",
    "revision": "869a7ac20edb492e113460046d904244"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "dee9d1e4a74b3f727c0e50b500ef13a2"
  },
  {
    "url": "mysql/mysql1/SQLOptimization.html",
    "revision": "93f72ceafdd9d17ec8e925e2f2cffbc3"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "08f6934d3f3da57b3dc7627a3028b6cc"
  },
  {
    "url": "other/index.html",
    "revision": "004db4548e0377b73808206095ad07c2"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "8766d2d2f238403c27b5fcd182494031"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "7867f686176a5d0b4d8a465e6d610e7c"
  },
  {
    "url": "problem/index.html",
    "revision": "3aad39e78cb008f78f432ffde859dcd8"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "8a4bb7ab5fe0e1ad2c2a11b8cfe79a0c"
  },
  {
    "url": "vue/index.html",
    "revision": "047aefe028136b20b94ac496d9263d5c"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "31a9dadedfc45a4801fdb56fde74ad1c"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "19047901158ac02cbc65433a9d6a36fc"
  },
  {
    "url": "vue/vue2/install.html",
    "revision": "abbf165c0a24fb99e829801eaa14afd9"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "044351db453d2c594e86bd0567ae21d6"
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
