# Keycloak React App - v1.0.0

Aplicação React simples integrada com um servidor de autenticação Keycloak.

## Objetivo

Esta aplicação tem como objetivo demonstrar de forma simples a integração de uma aplicação React com um cluster Keycloak. A aplicação consiste em apenas duas páginas, sendo uma pública e uma privada. Ao tentar acessar a página privada, a requisição é enviada para o cluster Keycloak que trata a autenticação do usuário e retorna para a página privada uma vez que a autenticação ocorreu com sucesso.

## Dependências

Esta aplicação depende de um cluster Keycloak para funcionar corretamente. 
Você pode obter o cluster através do seguinte repositório:
**Keycloak Cluster Service: [https://game-lib-react.web.app/](https://game-lib-react.web.app/)**

## Tecnologias Utilizadas

* ReactJS
* React Router
* Keycloak
* Docker

## Instalação

Baixe o repositório em um local de sua preferência:
```
git clone https://github.com/passosleo/keycloak-react-app.git
```

Acesse a pasta do projeto:
```
cd keycloak-react-app
```

Instale as dependências:
```
npm install
# ou
yarn install
```

Inicie o projeto:
```
npm start
# ou
yarn start
```

Acesse no navegador:
```
localhost:3000
```

## Instalação com Docker

Rode o comando abaixo:
```
...
```

Acesse no navegador:
```
localhost:3000
```

<!-- ![Screenshot da página de login](https://res.cloudinary.com/leopassos/image/upload/v1640487839/leopassos/login.png) -->
