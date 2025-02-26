/// <reference types="cypress" />

describe('Funcionalidade de Logout no sistema DemoBlaze', () => {

    beforeEach(() => {
        cy.login();
    });

    it('Deve realizar logout no sistema DemoBlaze e redirecionar para a página inicial', () => {
      cy.logout();
    })
})