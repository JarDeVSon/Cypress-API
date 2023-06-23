// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import urls from "./urls";

Cypress.Commands.add("get_users_by_name", (name) => {
  cy.api({
    method: "GET",
    url: urls.baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
    qs: name,
  }).should((response) => {
    expect(response.status).equal(200);
    return response;
  });
});
Cypress.Commands.add("post_user", (name, email, password, adminstrador) => {
  cy.api({
    method: "POST",
    url: urls.baseUrl + "usuarios",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      nome: name,
      email: email,
      password: password,
      administrador: adminstrador,
    },
  }).should((response) => {
    expect(response.status).equal(201);
    expect(response.body.message).equal("Cadastro realizado com sucesso");
    expect(response.body).have.property('message', "Cadastro realizado com sucesso");
    return response;
  });
});
