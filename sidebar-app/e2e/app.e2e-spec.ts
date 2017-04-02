import { SidebarAppPage } from './app.po';

describe('sidebar-app App', () => {
  let page: SidebarAppPage;

  beforeEach(() => {
    page = new SidebarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
