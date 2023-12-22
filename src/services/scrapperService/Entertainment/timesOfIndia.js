import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const timesOfIndia = {
  name: "timesOfIndia",
  Model: Entertainment,
  url: "https://timesofindia.indiatimes.com/",
  linkSelector: [".linktype1"],
  articleSelectors: {
    titleSelector: [".HNMDR"],
    dateSelector: [".xf8Pm"],
    contentSelector: [".M1rHh"],
    articleContentSelector: ["._s30J"],
  },
};

export const getNews = async () => {
  const res = await getArticles(timesOfIndia);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(timesOfIndia);
})();

export default timesOfIndia;
