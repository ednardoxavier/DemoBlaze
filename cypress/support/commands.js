import LoginPage from '../pages/LoginPage'; // Importa LoginPage.js
import FormContato from '../pages/ContactPage'; // Importa ContactPage.js
import LogoutPage from '../pages/LogoutPage'; // Importa LoginPage.js

// Navega até o sistema DemoBlaze e realiza o login utilizando as credenciais fornecidas
Cypress.Commands.add('login', () => {
    LoginPage.Login();
});

// Abre o formulário de contato e preenche com as informações necessárias antes de enviar a mensagem
Cypress.Commands.add('preencherFormContato', () => {
    FormContato.preencherFormContato();
});

// Realiza o logout do sistema, encerrando a sessão do usuário atual
Cypress.Commands.add('logout', () => {
    LogoutPage.Logout();
});