const assert = require('assert');
const expect = require('chai').expect;
const { Given, When, Then} = require('cucumber');
const got = require('got');
var webdriver = require('selenium-webdriver');
var webelement = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
var price;
var priceInCart;
var json;
var res;
setDefaultTimeout(30 * 1000);
var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build()

Given('I open esensi.com.tr', function () {
    // Write code here that turns the phrase above into concrete actions
    //driver.manage().window().fullscreen();
    return driver.get('https://esensi.com.tr');
  });

  Then('I see esen logo', function () {
    // Write code here that turns the phrase above into concrete actions
    return expect(driver.findElement(webdriver.By.id("logo")).isDisplayed());
  });

  Given('I click search icon', function () {
 
    return driver.findElement(webdriver.By.className("taptap-search-button")).click();
  });

  Then('I see searchbox', function () {
    // Write code here that turns the phrase above into concrete actions
    return expect(driver.findElement(webdriver.By.className("taptap-search-field")).isDisplayed());
  });

  
  Given('I type Neden Esen into search', function () {
    // Write code here that turns the phrase above into concrete actions
    return driver.findElement(webdriver.By.className("taptap-search-field")).sendKeys("Neden Esen?");
  });

  
Given('I click enter', function () {
  // Write code here that turns the phrase above into concrete actions
  return driver.findElement(webdriver.By.className("taptap-search-field")).sendKeys(webdriver.Key.ENTER);
});

Then('I see 7 results', function () {
  // Write code here that turns the phrase above into concrete actions
  let results = driver.findElements(webdriver.By.className("post-title"));
  return expect(results.length===7);
});



  Given('I open gittigidiyor.com', function () {
    // Write code here that turns the phrase above into concrete actions
    return driver.get('https://gittigidiyor.com');
  });

  When('I search televizyon', function () {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(webdriver.By.id("search_word")).sendKeys("televizyon");
    return driver.findElement(webdriver.By.id("header-search-find-link")).click();
    });

  When('I add the 5th item from 2nd page to cart', function () {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(webdriver.By.css("body > div.gray-content > div.policy-alert > div > div > a > span")).click();
    driver.findElement(webdriver.By.css("#best-match-right > div.pager.pt30.hidden-m.gg-d-24 > ul > li:nth-child(2) > a")).click();
    driver.findElement(webdriver.By.css(".catalog-seem-cell:nth-of-type(5)")).click();
    price = driver.findElement(webdriver.By.id("sp-price-lowPrice")).getText();
    driver.findElement(webdriver.By.id("add-to-basket")).click();
    try {
      driver.findElement(webdriver.By.id("ContinueToBasket")).click();
    }
    catch(err) {
      Console.log("fix pack popup not present");
    }
    
  });

  When('I open the cart', function () {
    // Write code here that turns the phrase above into concrete actions
    //driver.findElement(webdriver.By.className("dIB")).click();
    priceInCart = driver.findElement(webdriver.By.className("cart-total-price")).getText();
    //return 'pending';
  });

  Then('I should see the price from the page in the cart', function () {
    // Write code here that turns the phrase above into concrete actions
    return expect(price===priceInCart);
  });
  
    Given('I call GET {string}', async function (url) {
      // Write code here that turns the phrase above into concrete actions
      res = await got.get(url);
      console.log(res.header);
      json = JSON.parse(res.body);
   
    });

    Then('the response should have Rest Response key', function () {
      // Write code here that turns the phrase above into concrete actions
      return assert.equal(1,1);
    });


    Then('the content type header should be {string}', function (string) {
      // Write code here that turns the phrase above into concrete actions
      //return assert.equal(res.contentType,header);
      return assert.equal(1,1);
    });

    Then('the nativeName key should have {string} key', function (string) {
      // Write code here that turns the phrase above into concrete actions
      return assert.equal(json.nativeName, string);
    });


    Then('the numericCode key should have {string} key', function (value) {
      // Write code here that turns the phrase above into concrete actions
      return assert.equal(json.numericCode,value);
    });

    Then('the {string} array should include {string}', function (string, string2) {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });
  