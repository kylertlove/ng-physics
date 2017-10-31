import { NgPhysicsPage } from './app.po';

describe('ng-physics App', () => {
  let page: NgPhysicsPage;

  beforeEach(() => {
    page = new NgPhysicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
