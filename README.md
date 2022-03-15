# Keycloak React App - v1.0.0

Aplicação React simples integrada com um servidor de autenticação Keycloak clusterizado.


## Objetivo

Este projeto tem como objetivo demonstrar de forma simples a integração de uma aplicação React com um cluster Keycloak. A aplicação consiste em apenas duas páginas, sendo uma pública e uma privada. Ao tentar acessar a página privada, a requisição é enviada para o Keycloak que trata a autenticação do usuário e retorna para a página privada uma vez que a autenticação ocorreu com sucesso.


## Dependências

Esta aplicação depende de um servidor de autenticação Keycloak para funcionar corretamente. 

Você pode obter um serviço contain através do seguinte repositório:

**Keycloak Cluster Service: [https://github.com/passosleo/keycloak-cluster-service](https://github.com/passosleo/keycloak-cluster-service)**

## Tecnologias Utilizadas

* ReactJS
* React Router
* Keycloak
* Docker


## Instalação

1 - Baixe o repositório em um local de sua preferência:
```
git clone https://github.com/passosleo/keycloak-react-app.git
```

2 - Acesse a pasta do projeto:
```
cd keycloak-react-app
```

3 - Instale as dependências:
```
npm install
```
ou
```
yarn install
```

4 - Inicie o projeto:
```
npm start
```
ou
```
yarn start
```

5 - Acesse no navegador:
```
http://localhost:3000/
```


## Instalação com Docker

1 - Rode o comando abaixo:
```
...
```

2 - Acesse no navegador:
```
http://localhost:3000/
```

<!-- ![Screenshot da página de login](https://res.cloudinary.com/leopassos/image/upload/v1640487839/leopassos/login.png) -->
