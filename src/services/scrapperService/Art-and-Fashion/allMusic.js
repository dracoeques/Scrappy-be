import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const allMusic = {
  name: "allMusic",
  Model: ArtAndFashion,
  url: "https://www.allmusic.com/",
  linkSelector: [".title a"],
  articleSelectors: {
    titleSelector: [".albumContentSubModule h3"],
    dateSelector: [".release-date span"],
    contentSelector: ["#review.albumContentSubModule p"],
    articleContentSelector: [
      "#review.albumContentSubModule p",
      "#review.albumContentSubModule h2",
      "#review.albumContentSubModule h3",
      "#review.albumContentSubModule h4",
      "#review.albumContentSubModule h5",
      "#review.albumContentSubModule h6",
      "#review.albumContentSubModule ul",
    ],
  },
  articlesWaitUntil: "networkidle2",
};

export const getNews = async () => {
  const res = await singleScrape({
    article: allMusic,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: allMusic,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default allMusic;
