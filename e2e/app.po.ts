import { browser, by, element } from 'protractor';

export class Angular4ApplicationDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yo-root h1')).getText();
  }
}
