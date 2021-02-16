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
    "revision": "3429e97dc1ad703a544bbd581fb60cca"
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
    "url": "assets/js/32.a715e3fe.js",
    "revision": "41f7ee669131970269200d6e74ce9123"
  },
  {
    "url": "assets/js/33.3563fd58.js",
    "revision": "b00cdc25ea45a1fc8b0d23306a6c7103"
  },
  {
    "url": "assets/js/34.dab714c1.js",
    "revision": "d995832192381336187cbcbd16e6ec6c"
  },
  {
    "url": "assets/js/35.c17f11df.js",
    "revision": "9eff1a12695adf80aadfc9e9d164bb02"
  },
  {
    "url": "assets/js/36.063b6896.js",
    "revision": "f7f0665d09d10bc774af8f8b5c7a8860"
  },
  {
    "url": "assets/js/37.1c61410d.js",
    "revision": "90837936f98719f828ed9c38e889dac9"
  },
  {
    "url": "assets/js/38.bd78c51d.js",
    "revision": "a1bb85dabab2bd89675a89de52122bc5"
  },
  {
    "url": "assets/js/39.161d9de1.js",
    "revision": "7f0f52cba7ac5a39bf900ec37bac047a"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.6f48f22e.js",
    "revision": "83d801f266d88727cef7d9be48081b34"
  },
  {
    "url": "assets/js/41.f6efe1e3.js",
    "revision": "42dbdcb371f0f9ddaf9045909bf3bf40"
  },
  {
    "url": "assets/js/42.779c7a53.js",
    "revision": "36adf01b2b59e8efee0df625925f4a2b"
  },
  {
    "url": "assets/js/43.d89b0cc3.js",
    "revision": "54f000fb45a503cc7542650ec8c729fd"
  },
  {
    "url": "assets/js/44.9d40eee3.js",
    "revision": "88a99862fbd32c229891d1ef06d0d203"
  },
  {
    "url": "assets/js/45.abd47629.js",
    "revision": "76b31daedf29713d8205a2f9b7c9a3f5"
  },
  {
    "url": "assets/js/46.8e27d80c.js",
    "revision": "b3acb55c8e82648515be124d5f01ae64"
  },
  {
    "url": "assets/js/47.efd27bbf.js",
    "revision": "c8b136f10a079b6ff88ce4371680e8e2"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.708f6f1d.js",
    "revision": "3f92f20e67cacc96cea744665e523496"
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
    "url": "assets/js/9.0adc45a5.js",
    "revision": "6cfa845df4b0f698009e21f6da937748"
  },
  {
    "url": "assets/js/app.230690c0.js",
    "revision": "016dac5594f1c522ee14010d7d95d4fe"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "dc24f8cccce15f3f2c3184b491ace50f"
  },
  {
    "url": "element/element2/index.html",
    "revision": "262a0b7e66073893ec66ad794769eb08"
  },
  {
    "url": "element/index.html",
    "revision": "51124df4225aaf9cbd25087365c8bed5"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "0f2ca4cb89566b3937dd6fe62432e7ef"
  },
  {
    "url": "java/index.html",
    "revision": "4217badf0fe04cf02d9e6e5ddff0f05f"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "dd64b95536bd5b1ed523dda36aa21a30"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "6e963b0bde5dfa43967332d159bfab76"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "a0d222264cc13fbe6716c9f8409e2c56"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "e6bb503347c830e5d4e5ecf6da32e4d4"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "75c754cede00a0762a1fd81e67bc75ab"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "b91cb22481a9005e0ad35ed28d7412f0"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "83779015b3f047567287fb17631e18d2"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "3c936e631d7cfbc4854181d65fac6c42"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d421c57031d4b9143b48809b5f21437b"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "bfab94435259628a456ad5471b05f259"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "6b8ee3be7b6b62d0f404d9311d8bf423"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "a7dff697fed77f48f937dfe55dc33cdc"
  },
  {
    "url": "java/java2/designpattern/singleton.html",
    "revision": "11ba230c83837a167d8a9cd5019e21d4"
  },
  {
    "url": "java/java2/interview/equals.html",
    "revision": "bb0c87554f724ff048b44c052c4209f5"
  },
  {
    "url": "java/java2/interview/generic.html",
    "revision": "02ab942052e90dc25ef774dabab58f06"
  },
  {
    "url": "java/java2/interview/hashCollision.html",
    "revision": "8c5380b98f3b4fa3c41a9a714ab59c99"
  },
  {
    "url": "java/java2/interview/overload.html",
    "revision": "e7a6a96b9e18b45857f6e7538e398ffb"
  },
  {
    "url": "java/java2/interview/reflex.html",
    "revision": "d9f92f9dc118be5f14b3aac14d308529"
  },
  {
    "url": "mysql/index.html",
    "revision": "90a8a7abb07bd6a40ca75bb4331028c7"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "c0430083092f1dfd1c80f05f9308b080"
  },
  {
    "url": "mysql/mysql1/SQLOptimization.html",
    "revision": "468fce14814add6617dbc58ec9da34b8"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "4612e1c8eb8993ed143240cd720c7c10"
  },
  {
    "url": "other/index.html",
    "revision": "0b084e851f14d6ce7f66d73eeba7965a"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "a9248d3ecb6bd4331a74fbfb81aa2c97"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "3d9037a5f134a50814d71bbc3a1e9993"
  },
  {
    "url": "problem/index.html",
    "revision": "a0943328c80e2e76254dcc800e3efc40"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "0f6fbc0887aec62cd49d2f637d97a33b"
  },
  {
    "url": "vue/index.html",
    "revision": "f64a7c5f584f672476394b17667b07db"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "6a7f5124f81e7c1c706896414330d673"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "d10f63763b623232db7a84870580d48f"
  },
  {
    "url": "vue/vue2/install.html",
    "revision": "bcae809d525091482ed4a0658101df98"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "771c810cafb0a6db58aa2a5bf8b62951"
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
