import { faker } from '@faker-js/faker';
const data = require('../../fixtures/data.json')

describe("ServRest API Testing using Cypress API Plugin - ", () => {

  const randomName = faker.person.fullName(); // Rowan Nikolausz
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  

  it("GET All User", () => {
    cy.get_all_users();
  });

  it("GET User By Name", () => {
    cy.get_users_by_name('Fulano da Silva');
  });

  it("POST - Users with Fakerjs ", () => {
   cy.post_user_faker_js(randomName, randomEmail, 'teste', 'true');
  });
     
  it("POST - Users with Fixtures [0]", () => {
    cy.post_user(data.usuario1);
   });

  it("POST - Users with Fixtures [1]", () => {
    cy.post_user(data.usuario2);
   });

});
