import { faker } from "@faker-js/faker";

export async function generateTestData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 80 }).toString(),
    salary: faker.number.int({ min: 50000, max: 150000 }).toString(),
    dept: faker.commerce.department(),
  };
}
