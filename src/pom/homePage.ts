import { Locator, Page ,expect} from "@playwright/test";

export default class HomePage {

    readonly page:Page;
    readonly browsebutton:Locator;
    readonly alertLink:Locator;
    

    constructor(page:Page) {
        this.page = page;
        this.browsebutton=page.locator('//*[@id="menuform:j_idt39"]/a');
        this.alertLink = page.locator('//*[@id="menuform:m_overlay"]/a');
    }

    async navigateToAlertPage() {
        await this.browsebutton.click();
        await this.page.waitForLoadState('load');
        await this.alertLink.click();
    }
     async goto(url:String){
        await this.page.goto(`https://www.leafground.com${url}`);
    }
}