(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-b1089d4f.js")
    );
  })().catch(console.error);

})();
