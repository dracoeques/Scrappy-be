import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const kerrang = {
  name: "kerrang",
  Model: ArtAndFashion,
  url: ["https://www.kerrang.com/"],
  linkSelector: ["article a.flex"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time"],
    contentSelector: [".text-base"],
    articleContentSelector: [
      ".html-output p",
      ".html-output h2",
      ".html-output h3",
      ".html-output h4",
      ".html-output h5",
      ".html-output h6",
      ".html-output ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: kerrang,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: kerrang,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default kerrang;
