import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const genius = {
  name: "genius",
  Model: ArtAndFashion,
  url: ["https://genius.com/shows/news"],
  linkSelector: [".video_list-item-title"],
  articleSelectors: {
    titleSelector: [".article_title"],
    dateSelector: [".article_info_bar-text:nth-of-type(3)"],
    contentSelector: [".article_dek"],
    articleContentSelector: [
      ".article_rich_text_formatting p",
      ".article_rich_text_formatting h2",
      ".article_rich_text_formatting h3",
      ".article_rich_text_formatting h4",
      ".article_rich_text_formatting h5",
      ".article_rich_text_formatting h6",
      ".article_rich_text_formatting ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: genius,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: genius,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default genius;
