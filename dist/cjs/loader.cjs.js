'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ac2e6cd.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["web-social-share.cjs",[[1,"web-social-share",{"show":[1028],"share":[16]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
