"use strict";var precacheConfig=[["/index.html","25ce6ab0b9373a23374ce30adcdd0687"],["/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/static/js/main.86e77ca2.js","e8d1d36add1f3dcc352f7e000602b872"],["/static/media/artwork_cs_businesscard.4180cf33.jpg","4180cf339959c95aa92b0bdcfe02ebbd"],["/static/media/artwork_cs_letterheads.b85ae84e.jpg","b85ae84ed19b20bc281dd37e6ee2cd85"],["/static/media/artwork_cs_logo.4a959b92.jpg","4a959b923824d6bf432ae03e626a87c5"],["/static/media/artwork_cslogo_draft.e0f7f5f5.jpg","e0f7f5f5cd3cb877964adb07832251ad"],["/static/media/artwork_sketchbook1.8cbd790c.jpg","8cbd790ccc9d70d346b977f9fd169fbd"],["/static/media/artwork_sketchbook2.56e6215d.jpg","56e6215d1430312712c7c8540b16027d"],["/static/media/artwork_travel frog1.b6b0104c.jpg","b6b0104cf019bebd2d9f111d1b4e222a"],["/static/media/artwork_travel frog2.25317bd9.jpg","25317bd90ea8d84be027853b89325db4"],["/static/media/artwork_travel frog3.28100ee7.jpg","28100ee788506701ee00d05d1e977400"],["/static/media/beiling.ab7900d0.webp","ab7900d0bffd762a16df88c359acab86"],["/static/media/cs_poster.a1f5c340.jpg","a1f5c34084072a86b1f757d8458526dc"],["/static/media/csstudio_logo_cover.38aa2e2e.jpg","38aa2e2eb0e26be34e076ca3abc1efa5"],["/static/media/dali.28c9fa80.webp","28c9fa805d0fbb0227d5349e2fd6ee84"],["/static/media/erhai.fad4d2e0.webp","fad4d2e0e2682ba7486126917914e4ad"],["/static/media/fb_csposter.f680e0fa.jpg","f680e0fa00d58d9a25392f544e2b6bc9"],["/static/media/horizontal_poster_cover.450553c7.jpg","450553c7de31e917c54eb4b43237e61e"],["/static/media/hunhe.f30bc3ed.webp","f30bc3ed96cb30867ad10846cdd958ff"],["/static/media/jpculture_artwork.5b850298.jpg","5b850298145b670fccc31877593dee84"],["/static/media/jpculture_poster_cover.47dd701f.jpg","47dd701f050ccfcb3a7752d9a1ad0cff"],["/static/media/mg_display2.821b8101.jpg","821b81015a7c2c913395fdec3b5d069d"],["/static/media/nm1 copy.71606615.jpg","716066151d85a8ba559853947c36fe01"],["/static/media/nm1.ccb9f78a.jpg","ccb9f78a5f00a510df22a38c36f8a814"],["/static/media/nm2.2989f302.jpg","2989f302431842db727b1629ddc21d6a"],["/static/media/nm3.4570c673.jpg","4570c673b458cf95c3e33a7b17af99be"],["/static/media/nm4.60a40c8d.jpg","60a40c8d882143009e51b1d028536ac6"],["/static/media/nm_cover.0663eb74.jpg","0663eb74451d64041240308d0dcf6ea6"],["/static/media/sanjingjie.47caac54.webp","47caac54201a50f5d84aa16fd575a8e8"],["/static/media/set_cover.6c7d14f5.jpg","6c7d14f5ac13fe5a28d1fd95934aa44a"],["/static/media/shenfei.53200b04.webp","53200b04cbc4aaa31f1ddc670c6114de"],["/static/media/shenshuiwan.8046e2f7.webp","8046e2f7ee64a6488eb59c2467198124"],["/static/media/showrell.deb721df.jpg","deb721df0f26f881da59ce927cc71cf0"],["/static/media/sketches_cover.a7031b00.jpg","a7031b0095038e014342dfc1342ce490"],["/static/media/souffle_cover.0b675291.jpg","0b6752916c0ed0014e4b5d9c5c81039e"],["/static/media/souffle_items.5642f0d5.jpg","5642f0d50dc4de1b248672c59794aaeb"],["/static/media/souffle_logo.0b7f0708.jpg","0b7f0708a4f36ec7f28ce577ef95e687"],["/static/media/souffle_sketches.6db913a8.jpg","6db913a827e133dc05b924bd001d091e"],["/static/media/timetrader.f8af5284.jpg","f8af5284d8d3311c143a9cecade0c3bd"],["/static/media/timetrader_cover.667ff27d.jpg","667ff27ddb0794945dc83e33e49486e1"],["/static/media/tiyuan.1b4ff905.webp","1b4ff9057c35f5fd1576217d640060bb"],["/static/media/travel frog_cover.73d9ae2a.png","73d9ae2abc7ea1fa282e7202f3d3dad8"],["/static/media/yunhe.c44321c1.webp","c44321c11cb2d1c8c1fd30d3ac4e0231"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});