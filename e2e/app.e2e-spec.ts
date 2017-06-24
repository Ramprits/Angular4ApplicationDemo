import { Angular4ApplicationDemoPage } from './app.po';

describe('angular4-application-demo App', () => {
  let page: Angular4ApplicationDemoPage;

  beforeEach(() => {
    page = new Angular4ApplicationDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to yo!!'))
      .then(done, done.fail);
  });
});
