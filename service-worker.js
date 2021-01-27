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
    "revision": "61bee21c9789978aa155fdebf6f19f49"
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
    "url": "assets/js/39.a2f95dee.js",
    "revision": "30acd9c6426c297fa6e6499266e66afc"
  },
  {
    "url": "assets/js/4.4424bfaf.js",
    "revision": "75cb7e90afad965a6ea5ec7ef05d502b"
  },
  {
    "url": "assets/js/40.05091729.js",
    "revision": "8be4d2e312d0fac82dc22a2c43fc2f1a"
  },
  {
    "url": "assets/js/41.ad62a2e8.js",
    "revision": "496944f1bb9fd7ef57935b7ffac78b71"
  },
  {
    "url": "assets/js/5.e24b865d.js",
    "revision": "8d2462bb7169435747f769e71bdeaafb"
  },
  {
    "url": "assets/js/6.7c1fdb42.js",
    "revision": "c3bb4c16161ce268cf91ddf8efd11363"
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
    "url": "assets/js/app.cee195a3.js",
    "revision": "37f5466ddb0db67ef69e29210810ebaa"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "58589fae304825aa50eb35056c50ecdd"
  },
  {
    "url": "element/element2/index.html",
    "revision": "e5bbeca9741193040310292447d3e9a4"
  },
  {
    "url": "element/index.html",
    "revision": "f7d3199d7ff7eca8b232d76389f4b259"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "89bff053977535d92cc3a96625bf22b8"
  },
  {
    "url": "java/index.html",
    "revision": "29076e4ddddd83465ba25a2ba4d76a30"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "8d5692ad7289548d534af7cf3d837302"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "c6a4cc8a7713b175d7ad72733913ed76"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "205285e8777b9a3463d5c2db9e30dcde"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "c4b156433179cf43c65879f7efad7692"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "e0a65d0c0d41bdeaffc36381fb275013"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "202b1989cc0b1b64bd5aaa266e84eda8"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "3ad84fdfd87761717b159b7dc602afd6"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "5d49a1767ab7936fa7451572337a5479"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "3ef7a2440c0fff7619470c97ef24b2c1"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "0262440bf66ef0c26a0a5a0035d835f3"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "352557dcb5cb0f06e0347fc7c9541a8c"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "92d097d2092b14fb0a87de0a8c777339"
  },
  {
    "url": "java/java2/index.html",
    "revision": "2c4564dbbf5628b09b031e62cda2d8d0"
  },
  {
    "url": "mysql/index.html",
    "revision": "1c874c43b583b7f2225b4a0ef57eb0a5"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "a35054127bfd4dd33033b7c5ae6d0527"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "eac9b9c1d5b2e684bb4d45975b50259c"
  },
  {
    "url": "other/index.html",
    "revision": "5d0525313f4c63eeeacc379ce1231551"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "0084215f251937e39419737b4b301bb1"
  },
  {
    "url": "problem/dateProblem.html",
    "revision": "beac799b38830aedcc627e59c1bd04c9"
  },
  {
    "url": "problem/index.html",
    "revision": "b1c55bced150aa4e1e047fab3b512168"
  },
  {
    "url": "problem/lombokProblem.html",
    "revision": "a6c36133dcd17ad021780dedb2b99243"
  },
  {
    "url": "vue/index.html",
    "revision": "d20d94c5d14be5e83e04cd06b258931e"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "263ee91c02de4408ea6e81d8e2b648d3"
  },
  {
    "url": "vue/vue2/computed.html",
    "revision": "8d6b27c8235a3f03e8b29a8c2987f2af"
  },
  {
    "url": "vue/vue2/install.html",
    "revision": "7c2a9eb5474965ff685a302a14c0f022"
  },
  {
    "url": "vue/vue2/template.html",
    "revision": "d38063f37a27420746bad54812d5ea4a"
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
