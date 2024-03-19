import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const atpTour = {
  name: "atpTour",
  Model: Sports,
  url: "https://www.atptour.com/en/",
  linkSelector: ["a.card-link"],
  articleSelectors: {
    titleSelector: ["h2"],
    dateSelector: [".timestamp"],
    contentSelector: [".tagline"],
    articleContentSelector: [".atp_article p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: atpTour,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default atpTour;
