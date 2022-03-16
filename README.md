# 🔑 Keycloak React App - v1.0.0

Aplicação React simples integrada com um servidor de autenticação Keycloak clusterizado.


## ✔️ Objetivo

Este projeto tem como objetivo demonstrar de forma simples a integração de uma aplicação React com um cluster Keycloak. A aplicação consiste em apenas duas páginas, sendo uma pública e uma privada. Ao tentar acessar a página privada, a requisição é enviada para o Keycloak que trata a autenticação do usuário e retorna para a página privada uma vez que a autenticação ocorreu com sucesso.


## ⚠️ Dependências

Esta aplicação depende de um servidor de autenticação Keycloak rodando em paralelo para funcionar corretamente. 

Você pode obter a solução completa do serviço de autenticação Keycloak clusterizado através do seguinte repositório:

👉🏻 **[Keycloak Cluster Service](https://github.com/passosleo/keycloak-cluster-service)** 👈🏻

👉🏻 **[Guia de integração e configuração](https://jamboard.google.com/d/1p2sjMIA_BHvASBq7ffZ7mO2NGqeFy48nwczDjBWZuSU/viewer)** 👈🏻

## 🚀 Tecnologias Utilizadas

* ReactJS
* React Router
* Keycloak
* Docker


## 🔧 Instalação

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
```

Inicie o projeto:
```
npm start
```

Acesse no navegador:
```
http://localhost:3000/
```


## 🐳 Instalação com Docker

Rode o comando abaixo:
```
docker run -d -p 3000:3000 --name keycloak-react-app leopassos/keycloak-react-app:1.0
```

Acesse no navegador:
```
http://localhost:3000/
```

* Repositório da imagem no Docker Hub: **[leopassos/keycloak-react-app](https://hub.docker.com/r/leopassos/keycloak-react-app)**
