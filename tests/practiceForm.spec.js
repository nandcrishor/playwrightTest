const { test, expect } = require("@playwright/test");
import { generateTestData } from "../utils/testData.js";
const PracticeForm = require("../pages/practiceForm.js");

test("Fill Practice Form with Dynamic Data", async ({ page }) => {
  const form = new PracticeForm(page);
  const userData = await generateTestData();

  await form.navigate();
  await form.removeFooter();
  await form.removeAdBanners();
  await form.scrollToForm();

  await form.fillName(userData.firstName, userData.lastName);
  await form.fillEmail(userData.email);
  await form.selectGender(userData.gender);
  await form.fillMobile(userData.mobile);

  await form.selectDOB(userData.dob.year, userData.dob.month, userData.dob.day);
  await form.selectSubject(userData.subject);
  await form.selectHobbies();

  await form.uploadPicture("tests/resources/test-pic.png");
  await form.fillAddress(userData.address);
  await form.selectStateAndCity(userData.state, userData.city);

  await form.submitForm();

  //verify submssions
  await page.pause();
  await expect(form.thanksTitle).toHaveText(userData.submissionMsg);
  //verify values
  await form.verifyTableValue(
    "Student Name",
    `${userData.firstName} ${userData.lastName}`
  );
  await form.verifyTableValue("Student Email", userData.email);
  await form.verifyTableValue("Gender", userData.gender);
  await form.verifyTableValue("Mobile", userData.mobile);

  await form.verifyTableValue(
    "Date of Birth",
    `${userData.dob.day} ${userData.dob.month},${userData.dob.year}`
  );

  await form.verifyTableValue("subject", userData.subject);
  await form.verifyTableValue(
    "Hobbies",
    `${userData.hobbies[0]}, ${userData.hobbies[1]}`
  );

  await form.verifyTableValue("Picture", "testJPG.png");
  await form.verifyTableValue("Address", userData.address);
  await form.verifyTableValue(
    "State and City",
    `${userData.state} ${userData.city}`
  );
  await form.closeModel();
});
