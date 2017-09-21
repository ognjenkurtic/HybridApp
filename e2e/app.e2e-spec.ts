import { HybridAppPage } from './app.po';

describe('hybrid-app App', () => {
  let page: HybridAppPage;

  beforeEach(() => {
    page = new HybridAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
