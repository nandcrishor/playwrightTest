class PracticalTaskTwo {
  constructor(page) {
    this.page = page;

    //Registration form
    this.addButton = page.locator("button#addNewRecordButton");
    this.firstNameInput = page.locator("#firstName");
    this.lastNameInput = page.locator("#lastName");
    this.email = page.locator("#userEmail");
    this.age = page.locator("#age");
    this.salary = page.locator("#salary");
    this.dept = page.locator("#department");
    this.submitForm = page.locator("#submit");

    //webTablePage elements
    this.searchBox = page.locator("#searchBox");
    this.matchingRows = page.locator(
      '//div[@class="action-buttons"]//ancestor::div[@role="rowgroup"]'
    );
    this.cellsOfFirstRow = page
      .locator(".rt-tbody .rt-tr-group")
      .first()
      .locator(".rt-td");
  }

  async navigate() {
    await this.page.goto("https://demoqa.com/webtables");
  }

  async clickOnAddButton() {
    await this.addButton.click();
  }

  async fillForm(firstName, lastName, email, age, salary, deptName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.age.fill(age);
    await this.salary.fill(salary);
    await this.email.fill(email);
    await this.dept.fill(deptName);
    await this.submitForm.click();
  }

  //Search searchInput and return all texts of column of fist matching row
  async searchAndGetCellTextContents(searchInput) {
    await this.searchBox.fill(searchInput);
    return await this.cellsOfFirstRow.allTextContents();
  }

//   async searchAndSelectMatchingRow(searchInput, matchingValue) {
//     await this.searchBox.fill(searchInput);
//     const rows = await this.matchingRows.all();

//     for (let [i, row] of rows.entries()) {
//       const texts = await row.locator('[role="gridcell"]').allTextContents();
//       for (let text of texts) {
//         if (text === matchingValue) return i
//       }
//     }
//   }
}

module.exports = PracticalTaskTwo;
