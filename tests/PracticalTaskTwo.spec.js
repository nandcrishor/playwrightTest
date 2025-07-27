const { test, expect } = require("@playwright/test");
import { generateTestData } from "../utils/testData.js";
const PracticalTaskTwo = require("../pages/practicalTaskTwo.js");

test("Fill Practice Form with Dynamic Data", async ({ page }) => {
  const form = new PracticalTaskTwo(page);
  const userData = await generateTestData();
  await form.navigate();
  // await page.pause();                                                                                                              page.pause();

  await form.clickOnAddButton();
  await form.fillForm(
    userData.firstName,
    userData.lastName,
    userData.email,
    userData.age,
    userData.salary,
    userData.dept
  );

  const expectedValues = [
    userData.firstName,
    userData.lastName,
    userData.age,
    userData.email,
    userData.salary,
    userData.dept,
  ];

  const cellValues = await form.searchAndGetCellTextContents(userData.email);

  expectedValues.forEach((expected, index) => {
    console.log(expected);
    expect(cellValues[index].trim()).toBe(expected);
  });
});

