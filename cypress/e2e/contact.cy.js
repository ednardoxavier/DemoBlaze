/// <reference types="cypress" />

describe('Testar Funcionalidade de Envio de Mensagem pelo Formulário de Contato', () => {

    beforeEach(() => {
        cy.login();
    });

    it('deve permitir o envio de uma mensagem através do formulário de contato', () => {
      cy.preencherFormContato();
    })
})

