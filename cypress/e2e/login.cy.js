/// <reference types="cypress" />

describe('Testar Funcionalidade de Login no Sistema DemoBlaze', () => {

    it('deve acessar o sistema DemoBlaze e realizar o login com sucesso', () => {
      cy.login();
    })

})

