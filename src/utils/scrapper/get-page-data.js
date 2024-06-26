export const getPageData = async (
  link,
  page,
  articlesWaitUntil,
  selectorWaitTime,
  { titleSelector, dateSelector, contentSelector, articleContentSelector }
) => {
  if (!link) {
    console.error("Error: link not found");
    return {};
  }
  console.log(`NAVIGATING TO ${link}`);

  try {
    await page.goto(link, {
      waitUntil: articlesWaitUntil,
      timeout: 75000,
    });
    if (selectorWaitTime && selectorWaitTime > 0) {
      await page.waitForSelector(titleSelector, { timeout: selectorWaitTime });
      await page.waitForSelector(dateSelector, { timeout: selectorWaitTime });
      await page.waitForSelector(contentSelector, {
        timeout: selectorWaitTime,
      });
      await page.waitForSelector(articleContentSelector, {
        timeout: selectorWaitTime,
      });
    }
  } catch (err) {
    console.log(`Error when fetching link ${link}. Skipping link.`);
  }

  await page.setViewport({ width: 1000, height: 6000 });
  // await page.screenshot({ path: "./here.jpg", fullPage: true });
  const currPageData = await page.evaluate(
    ({
      titleSelector,
      dateSelector,
      contentSelector,
      articleContentSelector,
    }) => {
      const getElement = (selectors, many = false) => {
        if (!Array.isArray(selectors)) {
          const element = many
            ? document.querySelectorAll(selectors)
            : document.querySelector(selectors);
          if (element) return element;
          return { empty: true };
        }

        const element = many
          ? document.querySelectorAll(selectors.join(", "))
          : document.querySelector(selectors.join(", "));
        if ((many && element.length > 0) || (!many && element)) return element;

        return { empty: true };
      };
      const title = getElement(titleSelector, false).innerText;

      // getting date
      let dateAttrSelector = "";
      let dateElementSelector = "";
      for (let currDateSelector of dateSelector) {
        if (currDateSelector && currDateSelector.split("?").length > 1) {
          let dateGetter = currDateSelector.split("?");
          dateElementSelector = dateGetter[0];
          dateAttrSelector = dateGetter[1];
          if (
            dateSelector.indexOf(dateElementSelector) !==
            dateSelector.length - 1
          )
            dateElementSelector += `[${dateAttrSelector}], `;
        } else {
          dateElementSelector += `${currDateSelector}`;
          dateAttrSelector = "";
          if (
            dateSelector.indexOf(currDateSelector) !==
            dateSelector.length - 1
          )
            dateElementSelector += ", ";
        }
      }
      dateElementSelector = dateElementSelector.trim();
      if (dateElementSelector[dateElementSelector.length - 1] === ",")
        dateElementSelector = dateElementSelector.slice(
          0,
          dateElementSelector.length - 1
        );
      const dateTimeElement = getElement(dateElementSelector, false);
      const dateTime =
        !dateTimeElement.empty &&
        dateAttrSelector &&
        dateTimeElement.getAttribute(dateAttrSelector)
          ? dateTimeElement.getAttribute(dateAttrSelector)
          : dateTimeElement.innerText;
      const content = getElement(contentSelector, false).innerText;
      const articleContent = Array.from(
        getElement(articleContentSelector, true)
      )
        .map((curr_content) => curr_content.innerText)
        .filter((content_text) => content_text.length > 0)
        .join("\n");
      return {
        title,
        date: dateTime,
        content,
        article: articleContent,
      };
    },
    {
      titleSelector,
      dateSelector,
      contentSelector,
      articleContentSelector,
    }
  );
  if (!currPageData) return {};
  currPageData.link = link;
  return currPageData;
};
