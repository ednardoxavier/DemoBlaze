# Automação de Testes - DemoBlaze

Este projeto contém a automação de testes para o sistema DemoBlaze utilizando **Cypress**. A estrutura foi construída utilizando **Page Object Model (POM)** e **comandos customizados**, garantindo uma abordagem robusta e de fácil manutenção. Além disso, foi configurada a **Integração Contínua (CI)** com **GitHub Actions** para execução automática dos testes a cada push realizado no repositório.

## Tecnologias Utilizadas

- **Cypress** - Framework de automação de testes end-to-end.
- **Page Object Model (POM)** - Padrão de design para a estruturação do código de teste.
- **GitHub Actions** - Integração contínua (CI) para execução automática dos testes.
- **JavaScript** - Linguagem utilizada para escrever os testes.

## Pré-requisitos

Antes de rodar os testes, é necessário garantir que o seu ambiente esteja configurado corretamente.

- **Node.js** (recomendado versão 18)
- **NPM** (gerenciador de pacotes do Node.js)

Para verificar se você já tem o Node.js e o NPM instalados, abra o terminal e execute os seguintes comandos:
node -v
npm -v

### 1. Clonar o repositório

Clone o repositório para sua máquina local utilizando o comando:
git clone https://github.com/ednardoxavier/DemoBlaze.git

### 2. Executar os testes

Agora que o ambiente está configurado, você pode executar os testes de diferentes maneiras:

- **npx cypress open** - Executar testes no modo interativo (Cypress GUI)
- **npx cypress run** - Executar testes diretamente no terminal (linha de comando)



