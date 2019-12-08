Feature: esensi.com.tr tests

   Feature Description
   Scenario: open esensi.com.tr and verify
   Given I open esensi.com.tr
   Then I see esen logo
   Given I click search icon
   Then I see searchbox

   Scenario: type Neden Esen? into search and verify results
   Given I type Neden Esen into search
   Given I click enter
   Then I see 7 results