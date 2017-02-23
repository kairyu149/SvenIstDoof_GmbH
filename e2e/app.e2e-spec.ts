import { SssPage } from './app.po';

describe('sss App', function() {
  let page: SssPage;

  beforeEach(() => {
    page = new SssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
