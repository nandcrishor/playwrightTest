import { faker } from "@faker-js/faker";

export async function generateTestData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: "Male",
    mobile: "9" + faker.string.numeric(9),
    dob: { day: "20", month: "April", year: "1990" },
    subject: "Maths",
    hobbies: ["Sports", "Reading"],
    address: faker.location.streetAddress(),
    state: "NCR",
    city: "Delhi",
    submissionMsg: "Thanks for submitting the form",
  };
}
