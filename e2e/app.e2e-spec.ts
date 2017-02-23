import { SvenIstDoofGmbHFinalPage } from './app.po';

describe('sven-ist-doof-gmb-h-final App', function() {
  let page: SvenIstDoofGmbHFinalPage;

  beforeEach(() => {
    page = new SvenIstDoofGmbHFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
