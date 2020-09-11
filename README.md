# WordPress-Baseline-Tests

These are tests that should apply to most wordpress sites created by Pragmatic/Angry Creative

## Setup
- Pull repo
- `npm install`
- Add `CYPRESS_username` and `CYPRESS_password` (the username and password used to log into the site) to your environment variables
- In `cypress.json` add 
  ```
  "baseUrl": "[Website to test]",
  "env": {
    "cookieMessage": "[A piece of text found on the cookie bar EG: Accept All Cookies]",
    "cookieButtonSelector": "[CSS selector for the accept button on the cookie bar]"
  }
  ```
  *There may be some data in here already from other sites. Looking to host a site specifically for checking these tests pass and will use the data from that.*
- `npx cypress open` To run the tests using a GUI
- `npx cypress run` To run the tests from the terminal

## Timeline
- Create all possible tests from [test checklist](https://docs.google.com/spreadsheets/d/1RVbafkXy9dfEnOhXtQA8ElgfcWVie4wHsrcFDp-x9MY/edit?usp=sharing)
- Intergrate into QA Tool to give tests a GUI making it easier to customise
