"use strict";
(function createDB() {
  window.indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB;
  //  浏览器是否支持
  if (!window.indexedDB) {
    window.alert(
      "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
    );
  }
})();
