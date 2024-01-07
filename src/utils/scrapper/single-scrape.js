import { checkIsEntryFile, getArgs } from "../utils.js";
import { getArticle } from "./get-articles-cluster.js";

export const singleScrape = async function ({
  article,
  filepath,
  checkEntryFile = true,
}) {
  let puppeteer = (await import("puppeteer-extra")).default;
  const StealthPlugin = (await import("puppeteer-extra-plugin-stealth"))
    .default;
  let { retryError } = getArgs();
  if (puppeteer) puppeteer.use(StealthPlugin());
  const isEntryFile = checkIsEntryFile(filepath);
  if (checkEntryFile && !isEntryFile) return;
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  try {
    console.log("trying");
    await getArticle({ articleProps: article, page, single: true, retryError });
  } catch (err) {
    console.error("Problem when scraping sites ", err);
  }
};
