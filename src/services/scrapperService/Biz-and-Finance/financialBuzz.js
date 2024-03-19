import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const financialBuzz = {
  name: "financialBuzz",
  Model: BizAndFinance,
  url: ["https://financialbuzz.com/"],
  linkSelector: [".entry-featured-image-url"],
  articleSelectors: {
    titleSelector: [".et_pb_text_inner"],
    dateSelector: [".et_pb_gutters1 div.et_pb_column_1_3:nth-of-type(2) h4"],
    contentSelector: [".et_pb_column_single p", ".et_pb_column_single p"],
    articleContentSelector: [
      ".et_pb_column_single p",
      ".et_pb_column_single h1",
      ".et_pb_column_single h2",
      ".et_pb_column_single h3",
      ".et_pb_column_single h4",
      ".et_pb_column_single h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: financialBuzz,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default financialBuzz;
