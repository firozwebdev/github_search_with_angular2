import { MaxiTwoPage } from './app.po';

describe('maxi-two App', () => {
  let page: MaxiTwoPage;

  beforeEach(() => {
    page = new MaxiTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
