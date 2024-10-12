const puppeteer = require("puppeteer");

(async() => {
    const browser = await puppeteer.launch({
        headless: false});
    const page = await browser.newPage();
    await page.goto('http://quotes.toscrape.com/');
    await page.screenshot({path: "mywebsite.png "});
    

    //await page.type("#lst-ib", "puppeteer");
    //await page.click("input[type=submit]");
    //await page.waitForTimeout(5000);
    
    const grabquote = await page.evaluate(() => {
        const pgTag = document.querySelector(".qoute")    //Col-md-8.itemscope.itemtype= span
        return pgTag.innerText;
    });

    console.log(grabquote);
    await browser.close();
})();