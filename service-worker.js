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
    "revision": "f3af9c0ddfa6debdb3f4dc4595e3bb09"
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
    "url": "assets/js/29.474076f7.js",
    "revision": "dbbbd81a24004e18a843a7f2bb1db76f"
  },
  {
    "url": "assets/js/3.616127a8.js",
    "revision": "b597656982f2f86b918e13d71eca89a6"
  },
  {
    "url": "assets/js/30.2c510305.js",
    "revision": "9cf9bfedf66019eb5ac0a42868c76a0d"
  },
  {
    "url": "assets/js/31.fc27d198.js",
    "revision": "41d5619d9404868027525a563a062d60"
  },
  {
    "url": "assets/js/32.a085cbdd.js",
    "revision": "1a5fda77ad7a6feb237711724e215ec2"
  },
  {
    "url": "assets/js/33.47766675.js",
    "revision": "5553a9a0f1d4657a53a4272d8256c6f5"
  },
  {
    "url": "assets/js/34.81597b5d.js",
    "revision": "6878b83d44d5c0fa22f40106e7ec5f42"
  },
  {
    "url": "assets/js/35.581ee992.js",
    "revision": "6f34aa6fb910ca82706cd577967d7260"
  },
  {
    "url": "assets/js/36.2c059c72.js",
    "revision": "aefc102dbdb911c09da62e5a344427a7"
  },
  {
    "url": "assets/js/37.88bced6d.js",
    "revision": "d9416d024dc92873bda01daa7d3711ca"
  },
  {
    "url": "assets/js/38.c961af19.js",
    "revision": "80008fe3d2369b4960b9c7b723397b82"
  },
  {
    "url": "assets/js/39.b311bb00.js",
    "revision": "4c7898e79a239c02cfa084350936f44a"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.f2f1cae5.js",
    "revision": "7c057a8907259a7bfd757ede74beda72"
  },
  {
    "url": "assets/js/41.03546fac.js",
    "revision": "9d2ac2d2978d20adffc21948029c0697"
  },
  {
    "url": "assets/js/42.85502a77.js",
    "revision": "a82c68f7175c95acd1543eaad4b97968"
  },
  {
    "url": "assets/js/43.8ca05ec8.js",
    "revision": "43d3946846e69018473c46b4c2470763"
  },
  {
    "url": "assets/js/44.8a8c82ae.js",
    "revision": "cd363e68e5bc2246a4d338d4380bb56a"
  },
  {
    "url": "assets/js/45.9d0e0793.js",
    "revision": "0ac669af39c2dd12f179024df684d232"
  },
  {
    "url": "assets/js/46.2460334e.js",
    "revision": "c2f40f8dc84993d36368417ca76ae43f"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.2bd75edd.js",
    "revision": "fd835560ee1fda40eaa8fb54521d7104"
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
    "url": "assets/js/9.183404f8.js",
    "revision": "e2eeb00d18a37d17e92eee251a70bfbf"
  },
  {
    "url": "assets/js/app.a06b7059.js",
    "revision": "cb2bc0218bb112814796916d14f65ce9"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "36e743db949cee3fe0d3502ed941e6b8"
  },
  {
    "url": "element/element2/index.html",
    "revision": "21cb7e9fbee38c83c2bc57a0bda20f6a"
  },
  {
    "url": "element/index.html",
    "revision": "28d5dfe2d404a752b4aac029128ab721"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "5416f6376fa6a9707c29edf6b5c0e734"
  },
  {
    "url": "java/index.html",
    "revision": "3f0777588f51fa7f9d107cfb670e8489"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "3b35ee16cb467b35d5ee153fa21ac9a2"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "f6e07b1bec8c14c4f8114f882d397bbb"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "980e3a82f9ea10cabcd6579aa3c874f4"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "34479041f89407109dd1efb7ae43aaa9"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "41908896d3dbb58046d3ce08a4ee3e03"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "aad8ff5919afb33f9229fbafcf022f7c"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "e5c92ba905e804eed4cafb1d2c8e02d7"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "be22334cbe44430f55f5a82de1082ae2"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "53b4eab153f32011f9229123df9a6fd8"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "6b1ebc1a75afb6b6f33dec9b912d6454"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "1e97651dded01a2ef569cca2566e3b34"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "28ea9163b82490214fc9dbce25a8eaf1"
  },
  {
    "url": "java/java2/designpattern/singleton.html",
    "revision": "32953285922e918a0243868f408b9f2e"
  },
  {
    "url": "java/java2/interview/equals.html",
    "revision": "f596206e94fd5397fb7155140e634993"
  },
  {
    "url": "java/java2/interview/generic.html",
    "revision": "c321507c2308bbabe6c0dfa69d5617b9"
  },
  {
    "url": "java/java2/interview/hashCollision.html",
    "revision": "789cadf25d6f5e10a5b2f69051996e1f"
  },
  {
    "url": "java/java2/interview/reflex.html",
    "revision": "111a58436ecd9d208812b3eb9d77a12c"
  },
  {
    "url": "mysql/index.html",
    "revision": "748fea12f7b1c9089771f70cfacb7fae"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "566b07014b7999f6662147239ac56985"
  },
  {
    "url": "mysql/mysql1/SQLOptimization.html",
    "revision": "1a8181d12edd7d62682d725b9f504e47"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "f9a424140fa0ea88d1305397adc8b3b8"
  },
  {
    "url": "other/index.html",
    "revision": "6b39fb787042479c20137fcd0fa48151"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "32a1e9f1f65f6ea0a0abb816cd03070a"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "589da9e03d9b2a52437a00857f287092"
  },
  {
    "url": "problem/index.html",
    "revision": "51d75db892aa13e08df03006da00b755"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "817ba6bef8d6d5860acc29b50c5683e6"
  },
  {
    "url": "vue/index.html",
    "revision": "a56be6821f29dbd716ef566406993b04"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "6a8ac5991e524c1e3306963fd9e86167"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "b927a48348356080640d503cd51d12ff"
  },
  {
    "url": "vue/vue2/install.html",
    "revision": "34ffe26b0e80647b65547f8e16a11400"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "d520b894cb0bc9fab5fb61b30500289d"
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
