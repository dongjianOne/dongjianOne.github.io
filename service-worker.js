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
    "revision": "c4af77dc707aeb713541c697a6f5b633"
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
    "url": "assets/js/29.5c6aa180.js",
    "revision": "1c44ab6920d3fc26b3180c501cd9d828"
  },
  {
    "url": "assets/js/3.616127a8.js",
    "revision": "b597656982f2f86b918e13d71eca89a6"
  },
  {
    "url": "assets/js/30.b6f0b342.js",
    "revision": "abda54f04c4c041d8b0ecb26ba00e2ba"
  },
  {
    "url": "assets/js/31.64240178.js",
    "revision": "e12f08e8ff01c8d87b9ce17846a6abad"
  },
  {
    "url": "assets/js/32.c492b642.js",
    "revision": "47381a34f3289da348079a4dd27b1a37"
  },
  {
    "url": "assets/js/33.9c7fd51a.js",
    "revision": "b733a1009a994e2929f7408274a38b4b"
  },
  {
    "url": "assets/js/34.92405fc9.js",
    "revision": "b420e1fa7ded2e980973553133763e3f"
  },
  {
    "url": "assets/js/35.5d32e524.js",
    "revision": "29f12d4ba47429dc8cc7073c517b1cca"
  },
  {
    "url": "assets/js/36.a37406de.js",
    "revision": "c913e642b89047fb83f8474d6c2f5f10"
  },
  {
    "url": "assets/js/37.5bae96da.js",
    "revision": "750ace90628f718a0ba39c8350f67cc9"
  },
  {
    "url": "assets/js/38.91911427.js",
    "revision": "e8ab7a085d742fc59dabe0b947efb97b"
  },
  {
    "url": "assets/js/39.0fd22259.js",
    "revision": "550217c2c9234db9fca6e0c2e98755dc"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.dc22fe57.js",
    "revision": "8eb52385f84524fe961c9e421e3167eb"
  },
  {
    "url": "assets/js/41.68294f5f.js",
    "revision": "10bdfd11972611a217f9116fa5ab1c01"
  },
  {
    "url": "assets/js/42.647058bf.js",
    "revision": "ddcd379123f3ef99613c4ab757b9ddac"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.c11d4eb8.js",
    "revision": "30b3c2627e2a28a6beaaf944ea934eb0"
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
    "url": "assets/js/9.f813e6dd.js",
    "revision": "1860c619369dc292248cdfdd5116b3a1"
  },
  {
    "url": "assets/js/app.98aae9ec.js",
    "revision": "24ce21f2583211530fc83aa6b47107f8"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "7e1b07a659b0a400828bce9e9c133d4e"
  },
  {
    "url": "element/element2/index.html",
    "revision": "e0053dc97e639441fae4b98fcc473b2e"
  },
  {
    "url": "element/index.html",
    "revision": "580cac9d6a1e2582e797ad431d50254e"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c53a5eb15dcb50c5693c82fc151478bd"
  },
  {
    "url": "java/index.html",
    "revision": "b9850093d864a72f50aeb62b37fbf086"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "6471c38fb196d620ed77903d11eb0024"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "267d0a776b473bc97b9d0f6c851216d2"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "7d3b78a71d2b88438a871f686e792c83"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "dcfda6bb0442edf597581b0beadd7b0b"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "e1f67d535bee25565344863142024d07"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "2c83f695f555fa2eb682f73ff32ac4bb"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "b244557a61c744e5fdf5e1618b79b856"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "594af5cdcff4409dd5d7838ad720cb44"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "9d754bc69a0225451aec8e40e4c24df2"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "3b28c0429c76c8a5e3699c20017147c5"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "ba5162f82b9175b755eeb461c709d282"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "d93751422533d3ccbb78328cb7d6d083"
  },
  {
    "url": "java/java2/interview/equals.html",
    "revision": "6405369bedf5038fdaa8e167c7846342"
  },
  {
    "url": "java/java2/interview/reflex.html",
    "revision": "df79b732c8efd2727a86bbc76cbcc6c7"
  },
  {
    "url": "mysql/index.html",
    "revision": "7d13d6625fc1255a902d2caaa8afb07d"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "fbd6025cbad14e7e0d6cdbdf39b4f6a9"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "399f033d5bcd047325d83b68db1fc057"
  },
  {
    "url": "other/index.html",
    "revision": "79da25d8d3d567c5d3167cdcdea56e7e"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "c185eb02d624086d1f9e3ac76e99a32b"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "bfb4ad439dc690df4d0b186036f7a280"
  },
  {
    "url": "problem/index.html",
    "revision": "4cf4cb7c775d08f24631b4707280b307"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "a970e000407e2652b217355cb3170589"
  },
  {
    "url": "vue/index.html",
    "revision": "ae95db56aae1ecc55e082671dec2a5b4"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "2947d16e158155541789d5ea6514cd43"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "2ff03d08b51bcaf74fc44e2fde39e132"
  },
  {
    "url": "vue/vue2/install.html",
    "revision": "4764d2da19ef281d39b5abb1e7281500"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "e5868fb0dcfaac3fa12d20a92e28104a"
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
