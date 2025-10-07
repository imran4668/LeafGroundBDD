import { Given, When, Then } from '@cucumber/cucumber';
import { getWorld } from '../support/pageFixture';
import { AlertPage } from '../pom/alertPage';
import HomePage from '../pom/homePage';

let homepage: HomePage;
let alertpage: AlertPage;

// --------------------- Home Page ---------------------
Given('I open the LeafGround homepage', async function () {
  homepage = new HomePage(getWorld().page);
  await homepage.goto("/");
});

When('I navigate to the {string} page', async function (pageName: string) {
  // Currently only alert page is implemented
  await homepage.navigateToAlertPage();
});

Then('I should see the {string} page', async function (pageName: string) {
  alertpage = new AlertPage(getWorld().page);
  await alertpage.checkalertPageTitle(pageName);
});

// --------------------- Simple Alert ---------------------
When('I trigger the simple alert', async function () {
  await alertpage.triggerSimpleAlert();
});

Then('I should see and accept the simple alert', async function () {
  await alertpage.checkConfirmAlertText();
});

// --------------------- Confirm Alert ---------------------
When('I trigger the confirm alert', async function () {
  await alertpage.triggerConfirmAlert();
  await alertpage.page.waitForTimeout(1000); // optional wait
});

Then('I should see and accept the confirm alert', async function () {
  await alertpage.checkConfirmAlertText1();
});

// --------------------- Sweet Alert (Simple Dialog) ---------------------

         When('I trigger the sweet alert \\(confirmation)', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

When('I trigger the sweet alert', async function () {
  
});

Then('I should see and close the sweet alert', async function () {
  // Handled inside triggerSweetAlert()
});

// --------------------- Sweet Modal Dialog ---------------------
When('I trigger the sweet modal dialog', async function () {
  await alertpage.triggerModelDialog();
});

Then('I should see and close the sweet modal dialog', async function () {
  // Handled inside triggerModelDialog()
});

// --------------------- Prompt Alert ---------------------
When('I trigger the prompt alert', async function () {
  await alertpage.triggerPromptAlert();
});

Then('I should see, enter text, and accept the prompt alert', async function () {
  // Handled inside triggerPromptAlert()
});

// --------------------- Sweet Alert (Confirmation) ---------------------
// When('I trigger the sweet alert confirmation', async function () {
  
// });

When('I trigger the sweet Delete alert \\(confirmation)', async function () {
           await alertpage.triggerSweetDeleteAlert();
         });

Then('I should see and confirm the sweet alert', async function () {
  // Handled inside triggerSweetDeleteAlert()
});



