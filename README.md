# 🧪 Testes Automatizados com Cypress  
 
![Cypress Logo](https://github.com/cypress-io/cypress/raw/develop/assets/cypress-logo-dark.png)  

Este repositório contém a automação de testes E2E utilizando Cypress, com foco na aplicação **ParaBank Parasoft**. 

## 📌 Sobre a Aplicação  

**ParaBank** é uma aplicação disponibilizada para testes automatizados, simulando um sistema bancário. A plataforma oferece funcionalidades como:  

👉 Cadastro de usuários  
👉 Login de usuários  
👉 Transferência de fundos  
👉 Solicitação de empréstimos  
👉 Atualização de perfil  
👉 Extrato bancário  

![ParaBank Logo](https://th.bing.com/th/id/OIP.YbY5Tb5h-QaTfGOvpFXV0AHaD4?w=334&h=180&c=7&r=0&o=5&pid=1.7)  

## 🛠 Ferramentas Utilizadas  

- **Cypress** – Para desenvolvimento dos testes automatizados  
- **Allure** – Para geração de relatórios detalhados dos testes  
- **Faker** – Para geração dinâmica de massa de dados, armazenados em JSON para reutilização e sobrescrita em cada teste  
- **Scripts personalizados** – Para facilitar a execução do projeto e otimizar tempo  


### Fluxos cobertos neste projeto:  
🔹 Cadastro de usuários  
🔹 Login de usuários  
🔹 Transferência de fundos  
🔹 Solicitação de empréstimos  

## 📚 Padrão de Projeto Utilizado: Page Object Model (POM)  

O **Page Object Model (POM)** é um padrão de projeto para automação de testes que melhora a organização e reutilização do código. Ele separa a lógica dos testes da estrutura das páginas, tornando o projeto mais compreensível, manutenível e reutilizável.  

Cada página da aplicação possui uma classe correspondente que encapsula seus elementos e ações da interface.  

## 📊 Relatório dos Testes  

![Relatório Allure](https://github.com/user-attachments/assets/991709b0-5ef0-4202-aafc-3255f28b0601)  

## 📁 Arquitetura do Projeto  

A estrutura de diretórios do projeto segue a seguinte organização:  

```sh
cypress/
│── e2e/
│   │── accountService.cy.js
│   │── loginUser.cy.js
│   │── registerUser.cy.js
│   │── requestLoan.cy.js
│   │── transferFunds.cy.js
│── fixtures/
│   │── dataUser.json
│── support/
│── .gitignore
│── cypress.config.js
│── package.json
│── package-lock.json
```

## ▶️ Como Executar os Testes  

### 📌 Pré-requisitos  
Antes de executar os testes, certifique-se de ter:  
- **Node.js** instalado  
- **Cypress** instalado no projeto  

Instale as dependências do projeto executando:  
```sh
npm install
```

### 🚀 Executando os Testes  

👉 **Executar no modo interativo (GUI):**  
```sh
npx cypress open
```

👉 **Executar no modo headless:**  
```sh
npx cypress run
```

👉 **Gerar relatório Allure:**  
```sh
allure serve allure-results
```

---

