import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const talkingPointMemo = {
  name: "talkingPointMemo",
  Model: Politics,
  url: "https://talkingpointsmemo.com/",
  linkSelector: [".entry-title a"],
  articleSelectors: {
    titleSelector: [".Article__Head"],
    dateSelector: [".AuthorAndDate__Date"],
    contentSelector: [".Article__Content p"],
    articleContentSelector: [
      ".Article__Content p",
      ".Article__Content h1",
      ".Article__Content h2",
      ".Article__Content h3",
      ".Article__Content h4",
      ".Article__Content h5",
      ".Article__Content h6",
      ".Article__Content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(talkingPointMemo);
})();

export default talkingPointMemo;
