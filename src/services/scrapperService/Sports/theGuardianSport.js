import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theGuardianSport = {
  name: "theGuardianSport",
  saveDir: "Sports",
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
  if (isEntryFile) await getArticles(theGuardianSport);
})();

export default theGuardianSport;
