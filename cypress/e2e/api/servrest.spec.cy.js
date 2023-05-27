import { faker } from '@faker-js/faker';

describe("Primeiro teste com Cypress API Plugin", () => {

  
  const randomName = faker.person.fullName(); // Rowan Nikolausz
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  it("GET User By Name", () => {
    cy.get_users_by_name('Fulano da Silva');
  });

  it("POST - Users ", () => {
   cy.post_user(randomName, randomEmail, 'teste', 'true');
  });
});
