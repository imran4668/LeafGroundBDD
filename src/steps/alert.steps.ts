import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../support/hooks';

         Given('I open the LeafGround homepage', async function () {
            await page.goto('https://www.leafground.com/home.html');
           
         });


         When('I navigate to the {string} page', async function (string) {
           
         });


         Then('I should see the {string} page', async function (string) {
           
         });


         When('I trigger the simple alert', async function () {
           
         });


         Then('I should see and accept the simple alert', async function () {
           
         });


         When('I trigger the confirm alert', async function () {
           
         });


         Then('I should see and accept the confirm alert', async function () {
           
         });


         When('I trigger the sweet alert \\(simple dialog)', async function () {        
           
         });


         Then('I should see and close the sweet alert', async function () {
           
         });


         When('I trigger the sweet modal dialog', async function () {
           
         });


         Then('I should see and close the sweet modal dialog', async function () {      
           
         });


         When('I trigger the prompt alert', async function () {
           
         });


         Then('I should see, enter text, and accept the prompt alert', async function () {
           
         });


         When('I trigger the sweet alert \\(confirmation)', async function () {
           
         });


         Then('I should see and confirm the sweet alert', async function () {
           
         });


         When('I trigger the minimize and maximize dialog', async function () {
           
         });


         Then('I should see and close the dialog', async function () {
           
         });