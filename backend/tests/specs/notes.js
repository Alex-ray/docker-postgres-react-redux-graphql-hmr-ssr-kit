module.exports = {
    'User can navigate to notes': function (browser) {
        browser
        
        .url(browser.launch_url)
        .waitForElementPresent('.home')
        .assert.containsText('.home h1', 'Example app')

        .click('a[href="/notes"]')
        .waitForElementPresent('.notes')
        .assert.urlEquals(browser.launch_url+'/notes')

        .end();
    }

}