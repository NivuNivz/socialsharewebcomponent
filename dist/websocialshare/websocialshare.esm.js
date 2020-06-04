import { p as patchBrowser, b as bootstrapLazy } from './index-f44fa713.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["web-social-share",[[1,"web-social-share",{"show":[1028],"share":[16]}]]]], options);
});
