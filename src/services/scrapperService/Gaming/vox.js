import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const vox = {
  name: "vox",
  Model: Gaming,
  url: "https://www.vox.com/",
  linkSelector: [".c-entry-box--compact__title a"],
  articleSelectors: {
    titleSelector: [".c-page-title"],
    dateSelector: ["time"],
    contentSelector: [".c-entry-summary "],
    articleContentSelector: [
      ".c-entry-content p",
      ".c-entry-content h1",
      ".c-entry-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(vox);
})();

export default vox;
