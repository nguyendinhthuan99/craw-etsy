(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-c06fd1ce.js")
    );
  })().catch(console.error);

})();
