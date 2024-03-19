import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const bowl = {
  name: "bowl",
  Model: Sports,
  url: "https://bowl.com/",
  linkSelector: ["a.article__link"],
  articleSelectors: {
    titleSelector: [".article__title", "h2"],
    dateSelector: [".article__date"],
    contentSelector: [".article__text strong"],
    articleContentSelector: [".article__text"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bowl,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bowl;
