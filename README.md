## 🔑 Keycloak React POC

A POC (proof-of-concept) made to demonstrate ReactJS integration with Keycloak authentication server.


## ⚠️ Dependencies

To run this application properly, you need a running Keycloak instance. You can can use the repository below or configure youy own Keycloak server.

👉🏻 **[Keycloak Cluster Service](https://github.com/passosleo/keycloak-cluster-service)**


## 🚀 Technologies

* [ReactJS](https://react.dev/)
* [React Router](https://reactrouter.com/en/main)
* [Keycloak](https://www.keycloak.org/)
* [Docker](https://www.docker.com/)


## 🔧 Installation

Clone the repository to your preferred location:
```
git clone https://github.com/passosleo/keycloak-react-app.git
```

Navigate to the project folder:
```
cd keycloak-react-app
```

Install the dependencies:
```
npm install
```

Start the application:
```
npm start
```

Access the application in your browser at:
```
http://localhost:3000/
```


## 🐳 Docker

You can also run the application using Docker by running the following command:
```
docker run -d -p 3000:3000 --name keycloak-react-app leopassos/keycloak-react-app:1.0
```

Access the application in your browser at:
```
http://localhost:3000/
```

[Docker Hub Repository](https://hub.docker.com/r/leopassos/keycloak-react-app)
