import React, { useState, useEffect } from "react";
import Keycloak from "keycloak-js";
import LanguageForm from '../../components/LanguageForm';
import Languages from '../../locale/languages.json';
import UserInfo from "../../components/UserInfo";
import Logout from "../../components/Logout";

const Private = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [language, setLanguage] = useState(Languages.pt)

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
    <div className="background">
      <div className="container">
        <LanguageForm language={language} setLanguage={setLanguage} />
        <h1>{language['private-message']}</h1>
        <h2>{language['private-title']}</h2>
        <p>{language['private-info']}</p>
        <p>{language['private-info2']}</p>
        <h3>{language['private-subtitle']}</h3>
        <UserInfo keycloak={keycloak} language={language} />
        <Logout keycloak={keycloak} language={language}/>
      </div>
    </div>
  ) : (
    <div>Aguardando Keycloak</div>
  );
};

export default Private;