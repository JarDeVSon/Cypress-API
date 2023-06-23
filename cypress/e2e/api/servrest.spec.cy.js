import { faker } from '@faker-js/faker';
const data = require('../../fixtures/data.json')

describe("ServRest API Testing using Cypress API Plugin - ", () => {

  const randomName = faker.person.fullName(); // Rowan Nikolausz
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  
  it("GET User By Name", () => {
    cy.get_users_by_name('Fulano da Silva');
  });

  it("POST - Users with Fakerjs ", () => {
   cy.post_user(randomName, randomEmail, 'teste', 'true');
  });
     
  it("POST - Users with Fixtures [0]", () => {
    cy.post_user(data[0].nome, data[0].email, data[0].password, data[0].administrador);
   });

  it("POST - Users with Fixtures [1]", () => {
    cy.post_user(data[1].nome, data[1].email, data[1].password, data[1].administrador);
   });

});
