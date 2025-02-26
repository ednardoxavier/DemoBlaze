import LoginPage from '../pages/LoginPage'; // Importa LoginPage.js
import FormContato from '../pages/ContactPage'; // Importa ContactPage.js
import LogoutPage from '../pages/LogoutPage'; // Importa LoginPage.js

// Navegar para o sistema DemoBlaze e realiza Login
Cypress.Commands.add('login', () => {
    LoginPage.Login();
});

// Abre o Formulário de Contato e envia uma Mensagem
Cypress.Commands.add('preencherFormContato', () => {
    FormContato.preencherFormContato();
});

// Abre o Formulário de Contato e envia uma Mensagem
Cypress.Commands.add('logout', () => {
    LogoutPage.Logout();
});