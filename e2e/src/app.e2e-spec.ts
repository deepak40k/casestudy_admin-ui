import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Admin Search');
  });

  it('search by name', async () => {
    page.selectCriterion('NAME');
    page.setName('deepak');
    page.clickSearch();
    page.verifySearchResult();
  });

  it('search by Associate Id', async () => {
    page.selectCriterion('ASSOCIATEID');
    page.setAssociateId('CTS12346');
    page.clickSearch();
    page.verifySearchResult();
  });

  it('search by Skill', async () => {
    page.selectCriterion('SKILL');
    page.selectSkill('ANGULAR');
    page.clickSearch();
    page.verifySearchResult();
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

