import { $, browser, by, element } from "protractor";

export class LandingPageObjects{

    navigateToHomePage(){
        browser.get(browser.baseUrl);
    }

    getCurrentUrl(){
        return browser.getCurrentUrl();
    }


    getHeaderTitleElement(){
        return element(by.css('mat-toolbar span'));
    }

    getUserNameElement(){
        return $('form input');
    }

    getPasswordElement(){
        return element(by.id('password'));
    }

    getLoginSubmitButton(){
        return $('.button');
    }


}