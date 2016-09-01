import { BauhausLabPage } from './app.po';

describe('bauhaus-lab App', function() {
  let page: BauhausLabPage;

  beforeEach(() => {
    page = new BauhausLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
