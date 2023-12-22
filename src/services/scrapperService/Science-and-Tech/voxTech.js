import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const voxTech = {
  name: "voxTech",
  Model: ScienceAndTech,
  url: "https://www.vox.com/technology",
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
  if (isEntryFile) await getArticles(voxTech);
})();

export default voxTech;
