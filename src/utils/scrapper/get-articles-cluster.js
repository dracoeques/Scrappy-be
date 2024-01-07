import mongoose from "../mongoose.js";
import {
  currentDate,
  getArgs,
  isWithinRange,
  readSavedDocumnets,
  saveDocuments,
  scrollToBottom,
} from "../utils.js";
import { getPageData } from "./get-page-data.js";

export const getArticlesCluster = async (inputProps, page) => {
  try {
    const { dateFrom } = getArgs();
    if (!inputProps || !page) return;
    const {
      name,
      url,
      linkSelector,
      articleSelectors,
      waitUntil,
      articlesWaitUntil = "domcontentloaded",
      Model,
      saveAfter = 1,
    } = inputProps;
    if (Model == undefined) return;
    console.log(Model, Model.modelName);
    const model = new mongoose.model(
      Model.modelName + "." + currentDate(),
      Model.schema
    );
    let currentSaved;
    let currentLinks;
    try {
      currentSaved = await readSavedDocumnets(model, name);
    } catch (err) {
      console.log("An error occured when trying to fetch links.");
      console.log(err);
    }
    if (currentSaved) currentLinks = currentSaved.map((el) => el.link);
    console.log(currentLinks);

    // making sure articleWaitUntil has a correct value
    const articlesWaitUntilVal =
      articlesWaitUntil !== "domcontentloaded" &&
      articlesWaitUntil !== "networkidle0" &&
      articlesWaitUntil !== "networkidle2" &&
      articlesWaitUntil !== "load"
        ? "domcontentloaded"
        : articlesWaitUntil;
    await page.setViewport({ width: 1000, height: 6000 });

    // navigate to url and wait for it to load
    const pageData = [];
    let baseUrl = [];
    if (!Array.isArray(url)) baseUrl.push(url);
    else baseUrl = url;
    for (let curr_url of baseUrl) {
      for (let selector of linkSelector) {
        try {
          await page.goto(curr_url, {
            waitUntil: "domcontentloaded",
            timeout: 75000,
          });
        } catch {
          console.error(`Error navigating to link ${curr_url}.`);
          continue;
        }

        try {
          await scrollToBottom(page);
        } catch {
          console.log(
            `Error when trying to scroll to bottom of page ${curr_url}`
          );
        }

        if (waitUntil) {
          try {
            await page.waitForSelector(waitUntil.join(", "));
          } catch (err) {
            console.error(`Problem waiting for selector ${waitUntil}`);
          }
        }

        console.log(`NAVIGATED TO ${curr_url}`);

        try {
          await page.waitForSelector(selector);
        } catch (err) {
          console.error(`Problem waiting for selector ${selector}`);
        }

        const links = await page.$$eval(selector, (links) =>
          links.map((link) => link.href)
        );

        let pageCount = 1;
        let saveCount = 1;
        const totalPages = links.length;
        for (let link of links) {
          // checking if link is already fetched.
          if (currentLinks.includes(link)) {
            console.log("Link already fetched. Skipping link");
            pageCount++;
            continue;
          } else console.log("Link not found. Fetching link");

          console.log(`page ${pageCount} of ${totalPages}`);

          const currPage = await getPageData(link, page, articlesWaitUntilVal, {
            ...articleSelectors,
          });
          console.log("current page data: \n");
          console.log(currPage);
          if (
            currPage &&
            currPage.link &&
            currPage.title &&
            currPage.date &&
            isWithinRange(currPage.date, dateFrom) &&
            currPage.article
          ) {
            console.log("pushing current page");
            currPage.siteName = name;
            pageData.push(currPage);
            currentLinks.push(...pageData.map((el) => el.link));
          }

          if (pageCount >= saveAfter * saveCount) {
            await saveDocuments(model, pageData);
            // deleting all saved elements
            pageData.splice(0, pageData.length);
            saveCount++;
          }

          pageCount++;
        }
        await saveDocuments(model, pageData);
        pageData.splice(0, pageData.length);
      }
    }

    await page.close();
    await saveDocuments(model, pageData);
  } catch (err) {
    console.log("An error has occured when trying to fetch the page");
    console.log(err);
  }
};
