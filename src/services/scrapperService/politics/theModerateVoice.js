import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theModerateVoice = {
  name: "theModerateVoice",
  Model: Politics,
  url: "https://themoderatevoice.com/",
  linkSelector: [
    ".aps-post-title a",
    ".entry-title-link a",
    ".dpp_post_title a",
  ],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".entry-content h2"],
    articleContentSelector: [".entry-content p", ".entry-content h2"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theModerateVoice,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theModerateVoice;
