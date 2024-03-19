import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const cnn = {
  name: "cnn",
  Model: Sports,
  url: ["https://edition.cnn.com/sport"],
  linkSelector: [".container__link"],
  articleSelectors: {
    titleSelector: [".headline__text"],
    dateSelector: [".timestamp"],
    contentSelector: [".article__content p"],
    articleContentSelector: [".article__content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cnn,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cnn;
