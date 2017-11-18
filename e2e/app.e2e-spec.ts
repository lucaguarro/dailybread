import { DailybreadPage } from './app.po';

describe('dailybread App', () => {
  let page: DailybreadPage;

  beforeEach(() => {
    page = new DailybreadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
