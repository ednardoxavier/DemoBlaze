class LogoutPage {

    Logout(){
        cy.get('#logout2').click();
        cy.get('#nameofuser').should('not.contain.text', 'Welcome nardo');
    }       
}

export default new LogoutPage();