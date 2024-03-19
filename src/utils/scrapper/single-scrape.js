import { checkIsEntryFile, getArgs } from "../utils.js";
import { getArticles } from "./get-articles.js";

export const singleScrape = async function ({
  article,
  filepath,
  checkEntryFile = true,
  single = true,
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
    await getArticles({ articleProps: article, page, single, retryError });
    console.log("Finished scraping site ", article.url);
    process.exit(0);
  } catch (err) {
    console.error("Problem when scraping sites ", err);
    process.exit(1);
  } finally {
  }
};
