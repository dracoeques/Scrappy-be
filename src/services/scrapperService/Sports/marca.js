import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const marca = {
  name: "marca",
  Model: Sports,
  url: "https://www.marca.com/en/",
  linkSelector: [".ue-c-cover-content__link"],
  articleSelectors: {
    titleSelector: [".ue-l-article__header-content h1"],
    dateSelector: ["time"],
    contentSelector: [".ue-c-article__standfirst"],
    articleContentSelector: [".ue-c-article__body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: marca,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default marca;
