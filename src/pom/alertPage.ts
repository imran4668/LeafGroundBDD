import { Locator, Page ,expect} from "@playwright/test";

export class AlertPage {
    readonly page:Page;
    readonly simpleAlertButton:Locator;
    readonly conifrmsimpleAlertmessege:Locator;
    readonly confirmAlertButton:Locator;
    readonly confirmAlertmessege:Locator;
    readonly sweetAlertButton:Locator;
    readonly sweetAlertCloseButton:Locator;
    readonly modelDialogButton:Locator;
    readonly modelDialogCloseButton:Locator;
    readonly promptAlertButton:Locator;
    readonly sweetDeleteButton:Locator;
    readonly sweetDeleteConfirmButton:Locator;
    readonly miniandmaxButton:Locator;
    readonly maxibutton:Locator;
    

    constructor(page:Page) {
        this.page = page;
        this.simpleAlertButton=page.locator('//*[@id="j_idt88:j_idt91"]');
        this.conifrmsimpleAlertmessege=page.locator('//*[@id="simple_result"]');
        this.confirmAlertButton=page.locator('//*[@id="j_idt88:j_idt93"]');
        this.confirmAlertmessege=page.locator('//*[@id="result"]');
        this.sweetAlertButton=page.locator('//*[@id="j_idt88:j_idt95"]');
        this.sweetAlertCloseButton=page.locator('//*[@id="j_idt88:j_idt98"]');
        this.modelDialogButton=page.locator('//*[@id="j_idt88:j_idt100"]');
        this.modelDialogCloseButton=page.locator( '//*[@id="j_idt88:j_idt101"]/div[1]/a/span');
        this.promptAlertButton=page.locator('//*[@id="j_idt88:j_idt104"]');
        this.sweetDeleteButton=page.locator('//*[@id="j_idt88:j_idt106"]');
        this.sweetDeleteConfirmButton=page.locator('//*[@id="j_idt88:j_idt108"]');
        this.miniandmaxButton=page.locator('//*[@id="j_idt88:j_idt111"]');
        this.maxibutton=page.locator('//*[@id="j_idt88:j_idt112"]/div[1]/a[2]');
        
    }

    async triggerSimpleAlert(){
        await this.simpleAlertButton.click();
        
    }
    async checkConfirmAlertText(){
        await expect(this.conifrmsimpleAlertmessege).toHaveText('You have successfully clicked an alert');
    }
    async checkalertPageTitle(title:String){
        await this.page.waitForLoadState('networkidle');
        console.log("Title is :"+await this.page.title());
        expect(await this.page.title()).toBe(`${title}`);
    }

    async triggerConfirmAlert(){
        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.confirmAlertButton.click();
    }
    async checkConfirmAlertText1(){
        await expect(this.confirmAlertmessege).toHaveText('User Clicked : OK');
    }
    async triggerSweetAlert(){
        await this.sweetAlertButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.sweetAlertCloseButton.click();
        console.log("sweet alert handled");
    }
    async triggerModelDialog(){
        await this.modelDialogButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.modelDialogCloseButton.dblclick();
        console.log("model dialog handled");
    }
    async triggerPromptAlert(){
        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept('Playwright');
        });
        await this.promptAlertButton.click();
    }
    async triggerSweetDeleteAlert(){
        await this.sweetDeleteButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.sweetDeleteConfirmButton.dblclick();
        console.log("sweet delete alert handled");
        await this.page.waitForTimeout(1000);
    }
    async handleMiniAndMaxAlert(){
        await this.miniandmaxButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
        await this.maxibutton.click();
        await this.page.waitForTimeout(1000);
        await this.maxibutton.click();

        
       
    }

}