'use strict';

const index = require('./index-5ac2e6cd.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

index.patchBrowser().then(options => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["web-social-share.cjs",[[1,"web-social-share",{"show":[1028],"share":[16]}]]]], options);
});
