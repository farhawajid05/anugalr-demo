import { browser } from "protractor";
import { LandingPageObjects } from './landing.po';


describe('Landing page', () => {

    let landingPageObjects: LandingPageObjects;

    beforeAll(()=>{
        landingPageObjects = new LandingPageObjects();
    })

    beforeEach(() => {
        landingPageObjects.navigateToHomePage();
    })

    it('should navigate to login page', () => {
        expect(browser.getCurrentUrl()).toContain('/login');
    });

    it('should have correct Title', () => {
        expect(browser.getTitle()).toBe('NewContactApp');
    });

    it('should have correct Title in Header', () => {
        expect(landingPageObjects.getHeaderTitleElement().getText()).toBe('My Contacts');
    });


    fit('should navigate to dashboard on successful login', ()=>{
        landingPageObjects.getUserNameElement().sendKeys('admin');  
        browser.sleep(2000);
        landingPageObjects.getPasswordElement().sendKeys('password');
        browser.sleep(2000);
        landingPageObjects.getLoginSubmitButton().click();
        browser.sleep(2000);
        expect(landingPageObjects.getCurrentUrl()).toContain('/dashboard/cards');
    });

})