import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl+"admin") as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css(".page-title")).getText() as Promise<string>;
  }

  selectCriterion(criteria): void {
    element(by.css("#selectedSearch [value='" + criteria + "']")).click();
  }
  selectSkill(value):void {
    element(by.css("#skill [value='" + value + "']")).click();
  };
  setName(value) :void{
    let aName = element(by.id('aName'));
    aName.sendKeys(value);
  };
  setAssociateId = function (value) {
    let aId = element(by.id('aId'));
    aId.sendKeys(value);
  };
  clickSearch = function () {
    let seachButton = element(by.id('seachButton'));
    seachButton.click();
  }

  async getResultCount(): Promise<number> {
    let result = element.all(by.css('.result'));
    const rCount = await result.count();
    return rCount;
  }
  async getErrorMessage(): Promise<string> {
    let msg = element(by.id('errorMessage'));
    const msgText = await msg.getText();
    return msgText;
  }

  async verifyPagetitle(): Promise<void> {
    let pageTitle = element(by.css(".page-title"));
    expect(pageTitle.getText()).toEqual('Admin Search');
    const tText = await pageTitle.getText();
    console.log('Page title :' + tText);
  }

  async verifySearchResult(): Promise<void> {
    this.verfiyResultHeader();
    let count = await this.getResultCount();
    if (count == 0)
      console.log('No results founds:' + await this.getErrorMessage());
    else
      console.log('No of records found:' + count);
  }

  verfiyResultHeader(): void {
    let aHeader = element(by.xpath("//th[.='Associate']"));
    let tHeader = element(by.xpath("//th[.='Technical Skills']"));
    let ntHeader = element(by.xpath("//th[.='Non Technical Skills']"));
    expect(aHeader.getText()).toEqual('Associate');
    expect(tHeader.getText()).toEqual('Technical Skills');
    expect(ntHeader.getText()).toEqual('Non Technical Skills');
  }

}
