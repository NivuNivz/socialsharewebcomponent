import { a as patchEsm, b as bootstrapLazy } from './index-c59ad5bf.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["web-social-share",[[1,"web-social-share",{"show":[1028],"share":[16]}]]]], options);
});

export { defineCustomElements };
