Feature: rest api tests

   Feature Description
   Scenario: Ankara
   Given I call GET "https://restcountries.eu/rest/v2/capital/ankara"
   Then the response should have Rest Response key
   Then the content type header should be "application/json"
   Then the nativeName key should have "Türkiye" value
   Then the numericCode key should have "792" value
   Then the "currencies" array should include "code, name, symbol"

