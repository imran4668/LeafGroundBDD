import { After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "./world";
import { getWorld, setWorld } from "./pageFixture";


const world=new CustomWorld();
export let  page:CustomWorld["page"];

Before(async function () {
    await world.init();
    setWorld(world);
    page=world.page;

});
After(async function () {
    await getWorld().close();
});