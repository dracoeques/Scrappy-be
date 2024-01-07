import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const ieeeSpectrum = {
  name: "ieeeSpectrum",
  Model: ScienceAndTech,
  url: "https://spectrum.ieee.org/",
  linkSelector: [".widget__headline a"],
  articleSelectors: {
    titleSelector: ["h1.widget__headline"],
    dateSelector: [".social-date__text"],
    contentSelector: [".widget__subheadline-text"],
    articleContentSelector: [
      ".body-description p",
      ".body-description h2",
      ".body-description h3",
      ".body-description h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: ieeeSpectrum,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default ieeeSpectrum;
