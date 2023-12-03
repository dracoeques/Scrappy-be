import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const variety = {
  name: "variety",
  Model: Entertainment,
  url: "https://variety.com/",
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: ["#section-heading"],
    dateSelector: ["time"],
    contentSelector: [".o-custom-paragraph"],
    articleContentSelector: [".pmc-not-a-paywall p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(variety);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(variety);
})();

export default variety;
