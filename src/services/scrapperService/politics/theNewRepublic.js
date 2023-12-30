import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theNewRepublic = {
  name: "theNewRepublic",
  Model: Politics,
  url: "https://newrepublic.com/",
  linkSelector: ["a.ContainerImg", ".StorySmall a:nth-of-type(2)"],
  articleSelectors: {
    titleSelector: [".article-headline"],
    dateSelector: ["time"],
    contentSelector: [".article-subhead"],
    articleContentSelector: [
      ".article-body-wrap p",
      ".article-body-wrap h1",
      ".article-body-wrap h2",
      ".article-body-wrap h3",
      ".article-body-wrap h4",
      ".article-body-wrap h5",
      ".article-body-wrap h6",
      ".article-body-wrap ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theNewRepublic);
})();

export default theNewRepublic;
