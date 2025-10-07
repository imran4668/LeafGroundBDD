import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "./world";
import { getWorld, setWorld } from "./pageFixture";

setDefaultTimeout(60 * 1000);
const world=new CustomWorld();
export let  page:CustomWorld["page"];

BeforeAll(async function () {
    await world.init();
    setWorld(world);
    page=world.page;

});
AfterAll(async function () {
    await getWorld().close();
});