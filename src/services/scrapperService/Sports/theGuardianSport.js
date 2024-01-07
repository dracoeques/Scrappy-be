import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const theGuardianSport = {
  name: "theGuardianSport",
  Model: Sports,
  url: "https://www.theguardian.com/uk/sport",
  linkSelector: [".dcr-6vr3s5 a", ".dcr-bgmi23 a"],
  articleSelectors: {
    titleSelector: [".dcr-y70mar"],
    dateSelector: [".dcr-u0h1qy"],
    contentSelector: [".dcr-ls03tr li"],
    articleContentSelector: [".article-body-commercial-selector p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theGuardianSport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theGuardianSport;
