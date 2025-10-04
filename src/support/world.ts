import { Browser, BrowserContext, Page, chromium } from 'playwright';


export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;



  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext({ 
  ignoreHTTPSErrors: true 
});
    this.page = await this.context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}