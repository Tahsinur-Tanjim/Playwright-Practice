import dotenv from 'dotenv';
dotenv.config();

class base {
     constructor(page) {
         this.page = page;
         //this.pageUrl = 'https://demowebshop.tricentis.com/';
         this.pageUrl = process.env.BASE_URL;
     }

     async pageOpen() {
        console.log("Opening page: " + this.pageUrl);
        await this.page.goto(this.pageUrl, {
            waitUntil: 'domcontentloaded',
            timeout: 60000

    });

    
   await this.page.setViewportSize({
    width: 1536,
    height: 864
});
}
async clickElement(locator) {
    await locator.click();
}
}

export { base };