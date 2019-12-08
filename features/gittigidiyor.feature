 Feature: gittigidiyor.com tests

  Feature Description
  Scenario: add tv to cart and verify price
  Given I open gittigidiyor.com
  When I search televizyon
  When I add the 5th item from 2nd page to cart
  When I open the cart
  Then I should see the price from the page in the cart
