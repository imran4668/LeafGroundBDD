import { Browser, BrowserContext, BrowserType, Page, chromium, firefox, webkit } from 'playwright';
import dotenv from 'dotenv';

dotenv.config();


export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;



  async init() {
   
    const launcher:BrowserType = process.env.BROWSER === 'firefox' ? firefox :process.env.BROWSER === 'webkit' ? webkit :chromium;
   if(launcher==chromium) {
   this.browser = await launcher.launch({ headless: Boolean(process.env.HEADLESS), });
    this.context = await this.browser.newContext({viewport:null});
    this.page = await this.context.newPage();
  }else{
     this.browser = await launcher.launch({headless: Boolean(process.env.HEADLESS) });
    this.context = await this.browser.newContext({viewport:{ width: Number(process.env.WIDTH), height: Number(process.env.HEIGHT) },screen:{ width: Number(process.env.WIDTH), height: Number(process.env.HEIGHT) }});
    this.page = await this.context.newPage();
  }
    
  }

  async close() {
    await this.browser.close();
  }
}