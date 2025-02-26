class LoginPage {

    Login(){
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.get('#loginusername').click().type('nardo', { force: true });
        cy.get('#loginpassword').click().type('pass123', { force: true });
        cy.contains('button', 'Log in').click();
        cy.get('#nameofuser').should('contain.text', 'Welcome nardo');
    }       
}

export default new LoginPage();