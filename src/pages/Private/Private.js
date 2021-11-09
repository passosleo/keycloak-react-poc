import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Keycloak from "keycloak-js";
import UserInfo from "../../components/UserInfo";
import Logout from "../../components/Logout";

const Private = () => {
    const [keycloak, setKeycloak] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    // Resolvendo a promisse com then
    useEffect(() => {
        const keycloak = Keycloak("/keycloak.json");
        console.log(keycloak);
    
        keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
            setKeycloak(keycloak);
            setAuthenticated(authenticated);
        });
    }, []);

    return keycloak && authenticated ? (
        <Grid
            container
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <h1>Autenticado com sucesso!</h1>
            <h2>Área Privada</h2>
            <h3>Informações do usuário:</h3>
            <UserInfo keycloak={keycloak} />
            <Logout keycloak={keycloak} />
            
        </Grid>
    ) : (
        <div>Aguardando Keycloak</div>
    );
};

export default Private;