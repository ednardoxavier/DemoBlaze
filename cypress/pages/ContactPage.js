class FormContato {

    preencherFormContato(){
        cy.contains('.nav-link', 'Contact').click();
        cy.get('#recipient-email').type('teste@gmail.com', { force: true });
        cy.get('#recipient-name').type('Nardo QA', { force: true });
        cy.get('#message-text').type('Mensagem de Texto para Teste', { force: true });
        cy.contains('button', 'Send message').click();

        // Interceptando o pop-up de confirmação
        cy.on('window:alert', (alertText) => {
            // Valida o texto da confirmação
            expect(alertText).to.equal('Thanks for the message!!');
  
        
        return true; // Isso simula o clique no "OK"
         });
    }
}

export default new FormContato();