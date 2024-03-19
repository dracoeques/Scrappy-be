import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const sailingWorld = {
  name: "sailingWorld",
  Model: Sports,
  url: "https://www.sailingWorld.com/",
  linkSelector: [".uc_post_title a"],
  articleSelectors: {
    titleSelector: ["h1", ".elementor-heading-title"],
    dateSelector: [".elementor-post-info__item--type-date"],
    contentSelector: [".elementor-widget-theme-post-excerpt"],
    articleContentSelector: [
      ".elementor-widget-theme-post-content p",
      ".elementor-widget-theme-post-content h2",
      ".elementor-widget-theme-post-content h3",
      ".elementor-widget-theme-post-content h4",
      ".elementor-widget-theme-post-content h5",
      ".elementor-widget-theme-post-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: sailingWorld,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default sailingWorld;
