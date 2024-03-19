import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const popSugar = {
  name: "popSugar",
  Model: ArtAndFashion,
  url: ["https://www.popsugar.com/"],
  linkSelector: [".UniversalContentCardstyles__UCCTextBlock-sc-zezg1y-0 > a"],
  articleSelectors: {
    titleSelector: [".Title__ArticleTitle-sc-17g59lq-0 NTDnk", "h1"],
    dateSelector: [".Bylinestyles__ArticleDate-sc-4zed9y-2", "time"],
    contentSelector: [".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 p"],
    articleContentSelector: [
      ".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 p",
      ".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 h2",
      ".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 h3",
      ".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 h4",
      ".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 h5",
      ".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 h6",
      ".ParagraphBodyTextstyles__BodyText-sc-zv221u-0 ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: popSugar,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: popSugar,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default popSugar;
