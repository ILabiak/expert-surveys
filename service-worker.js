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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "e4c7f59d8fec272bd505c37372b50bce"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a0345436.css",
    "revision": "252c66d100dd39c82753a701ff903149"
  },
  {
    "url": "assets/img/1.a8800f5b.png",
    "revision": "a8800f5b968d186840f449d5f317b475"
  },
  {
    "url": "assets/img/2.2757e938.png",
    "revision": "2757e93823728803b18946132dbcdd5b"
  },
  {
    "url": "assets/img/3.2ddc37ba.png",
    "revision": "2ddc37ba5ea1d11f9b6743456312e60c"
  },
  {
    "url": "assets/img/4.114f2b1a.png",
    "revision": "114f2b1ad7da4d746592eb678b20abbb"
  },
  {
    "url": "assets/img/5.d82b371c.png",
    "revision": "d82b371c9338e5b6e2f745f8238fd094"
  },
  {
    "url": "assets/img/6.4e838b00.png",
    "revision": "4e838b0058cec89a202f3fee678e9af4"
  },
  {
    "url": "assets/img/7.f113a81b.png",
    "revision": "f113a81becb432f744909b7a73567d11"
  },
  {
    "url": "assets/img/8.851055fe.png",
    "revision": "851055fec4b9a1bb9f87000f38621bf4"
  },
  {
    "url": "assets/img/9.34f5779c.png",
    "revision": "34f5779c5d47e171277040e96ed3683b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b1b6aa16.js",
    "revision": "36ecad57154facb573fac6804cdfd154"
  },
  {
    "url": "assets/js/11.02f607c4.js",
    "revision": "4ccc3d4d3ec3084db7bdeb9d9c11590b"
  },
  {
    "url": "assets/js/12.e716ed68.js",
    "revision": "7c2ab8ad67d236d5208da1e6a2f121ee"
  },
  {
    "url": "assets/js/13.28154b75.js",
    "revision": "130ebcfbee7e5803ba2190d4d1586539"
  },
  {
    "url": "assets/js/14.1c69400e.js",
    "revision": "2eccda08731e38e1191e8689cefce969"
  },
  {
    "url": "assets/js/15.3549de27.js",
    "revision": "49eb5e38929c08106a1ba5dcb21d3620"
  },
  {
    "url": "assets/js/16.2ec25162.js",
    "revision": "0f3379f7e096a7284a4807bf6318a44c"
  },
  {
    "url": "assets/js/17.a0630581.js",
    "revision": "4c050c6fe832b01f3433166d0f8eb87c"
  },
  {
    "url": "assets/js/18.02588d2d.js",
    "revision": "fcb70c52194771a6c5766b2c384f4723"
  },
  {
    "url": "assets/js/19.edf43079.js",
    "revision": "b4720d8b6cc8011208c7b53db90445f5"
  },
  {
    "url": "assets/js/2.36c62bcb.js",
    "revision": "e6539ba04f4c1877805b5ebae5f7d425"
  },
  {
    "url": "assets/js/20.17d01548.js",
    "revision": "72a60291a7d5ae758cc873001e371792"
  },
  {
    "url": "assets/js/21.473e17fd.js",
    "revision": "7614eb8cb68b7aaca38451854f7a4299"
  },
  {
    "url": "assets/js/22.037e0984.js",
    "revision": "904faef7a8ebbc12b3a9fb0ead640257"
  },
  {
    "url": "assets/js/23.d59b46dc.js",
    "revision": "bdc01d66e6ada872dd1f28bb311ad7e8"
  },
  {
    "url": "assets/js/24.2b4c1498.js",
    "revision": "8c364d6603286b8b4ddae327314c3aa3"
  },
  {
    "url": "assets/js/26.e4c979e1.js",
    "revision": "2a64eb7533a88499afc003e95c5ced0a"
  },
  {
    "url": "assets/js/3.4afb4ec2.js",
    "revision": "93a715eeab2a460c41433c8581b9388d"
  },
  {
    "url": "assets/js/4.9b833545.js",
    "revision": "759c8f4ec4d6b40b1ed979ec440e86de"
  },
  {
    "url": "assets/js/5.c0d93c9a.js",
    "revision": "8d697b3450b1e41bad1bcb164801ad12"
  },
  {
    "url": "assets/js/6.f4779b32.js",
    "revision": "1b9413b84ec1059fc77abcffc6e2aa10"
  },
  {
    "url": "assets/js/7.7bd38d0e.js",
    "revision": "b77bc730f33efac41ac47bd7780cb26a"
  },
  {
    "url": "assets/js/8.9de1ce35.js",
    "revision": "8bf0f3a0b3f6fe05c4af2c23766adb1d"
  },
  {
    "url": "assets/js/9.c95ff747.js",
    "revision": "b606058b7c27ab771756c4d21f17c7ae"
  },
  {
    "url": "assets/js/app.850a704e.js",
    "revision": "06e665cad708d826bfa1e6d2ec6026df"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c8225f2c488812c86eb9c7a2b550020f"
  },
  {
    "url": "design/index.html",
    "revision": "f8b049446783cf116a2f4a27416ad589"
  },
  {
    "url": "index.html",
    "revision": "32dbd4e31570a52f144afb0fbb5c6f31"
  },
  {
    "url": "intro/index.html",
    "revision": "d53b13e1736bce01e6ca70c63828bc21"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d76edba585ded311dc313a136e79dfc2"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "36fb132c4909c55227eb1eca86cc0aa1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "45be3dcf7e8fcf3d39137c220f04f726"
  },
  {
    "url": "software/index.html",
    "revision": "70852941e84125ff0010ff888c63738c"
  },
  {
    "url": "test/index.html",
    "revision": "cfcc70a1e4036c600e0018fe492ac7ce"
  },
  {
    "url": "use cases/index.html",
    "revision": "92e77a765b9788ce29c2077fed4b59a7"
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
