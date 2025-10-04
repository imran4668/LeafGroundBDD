export class HomePage {
    readonly page;
    constructor(page) {
        this.page = page;
    }   
    async navigateToSection(sectionName: string) {
        await this.page.click(`text=${sectionName}`);
    }
    async isAtSection(sectionName: string): Promise<boolean> {
        return this.page.isVisible(`h1:has-text("${sectionName}")`);
    }
}