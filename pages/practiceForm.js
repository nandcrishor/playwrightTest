const { expect } = require("@playwright/test");
class PracticeForm {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.email = page.locator("#userEmail");
    this.mobile = page.locator("#userNumber");
    this.dobInput = page.locator("#dateOfBirthInput");
    this.subjectsInput = page.locator("#subjectsInput");
    this.address = page.locator("#currentAddress");
    this.submit = page.locator("#submit");
    this.thanksTitle = page.locator("#example-modal-sizes-title-lg");

    this.maleOption = page.getByText("Male", { exact: true });

    this.yearDropdown = page.locator(".react-datepicker__year-select");
    this.monthDropdown = page.locator(".react-datepicker__month-select");

    this.subjectsContainer = page.locator(
      ".subjects-auto-complete__value-container"
    );

    this.hobbySports = page.getByText("Sports");
    this.hobbyReading = page.getByText("Reading");
    this.hobbyMusic = page.getByText("Music");

    this.pictureUpload = page.getByRole("button", { name: "Select picture" });

    this.stateDropdown = page
      .locator("div")
      .filter({ hasText: /^Select State$/ })
      .nth(3);
    this.cityDropdown = page
      .locator("div")
      .filter({ hasText: /^Select City$/ })
      .nth(3);
  }

  async navigate() {
    await this.page.goto("https://demoqa.com/automation-practice-form");
  }

  async removeFooter() {
    await this.page.evaluate(() => {
      const footer = document.querySelector("footer");
      if (footer) footer.remove();
    });
  }

  async removeAdBanners() {
    await this.page.evaluate(() => {
      const adBanners = document.querySelectorAll(
        "#fixedban, .adsbygoogle, .elementor"
      );
      adBanners.forEach((ad) => ad.remove());
    });
  }

  async scrollToForm() {
    await this.page.locator("#firstName").scrollIntoViewIfNeeded();
  }

  async fillName(firstName, lastName) {
    await this.firstName.click();
    await this.firstName.fill(firstName);
    await this.lastName.click();
    await this.lastName.fill(lastName);
  }

  async fillEmail(email) {
    await this.email.click();
    await this.email.fill(email);
  }

  async selectGender() {
    await this.maleOption.click();
  }

  async fillMobile(mobileNumber) {
    await this.mobile.click();
    await this.mobile.fill(mobileNumber);
  }

  async selectDOB(year, month, dayOptionText) {
    await this.dobInput.click();
    await this.yearDropdown.selectOption(year);
    await this.monthDropdown.selectOption(month);
    const day20 = this.page
      .locator("div.react-datepicker__day")
      .filter({ hasText: "20" })
      .first();

    if (await day20.isVisible()) {
      await day20.click();
    }
  }

  async selectSubject(subject) {
    await this.subjectsContainer.click();
    await this.subjectsInput.fill(subject.slice(0, 1));
    await this.page.getByText(subject, { exact: true }).click();
  }

  async selectHobbies() {
    await this.hobbySports.click();
    await this.hobbyReading.click();
  }

  async uploadPicture() {
    await this.pictureUpload.setInputFiles("test-data/testJPG.png");
  }

  async fillAddress(addressText) {
    await this.address.click();
    await this.address.fill(addressText);
  }

  async selectStateAndCity(state, city) {
    await this.stateDropdown.click();
    await this.page.getByText(state, { exact: true }).click();
    await this.cityDropdown.click();
    await this.page.getByText(city, { exact: true }).click();
  }
  async submitForm() {
    await this.submit.click();
  }

  async verifyTableValue(label, expectedValue) {
    const valueLocator = this.page
      .locator("tr td", { hasText: label })
      .locator("xpath=following-sibling::td[1]");
    await expect(valueLocator).toHaveText(expectedValue);
    console.log("verify values" + expectedValue);
  }
}

module.exports = PracticeForm;
