import React, { useState, useEffect } from "react";

const UserInfo = (props) => {
  const [user, setUser] = useState(null);
  const {language, keycloak} = props;

  useEffect(() => {
    keycloak.loadUserInfo().then(userInfo => {
      const { name, email, email_verified, sub, preferred_username } = userInfo;
      setUser({
        user: preferred_username,
        name: name,
        email: email,
        verified: email_verified,
        id: sub,
      });
    });
    console.log("🔑 JSON Web Token: ",keycloak.token);
  },[keycloak]);

  return (
    <>
      {user && (
        <div className="user-info">
          <p><b>{language['private-user']}</b> {user.user}</p>
          <p><b>{language['private-name']}</b> {user.name}</p>
          <p><b>E-mail:</b> {user.email}</p>
          <p><b>{language['private-verified']}</b> {user.verified ? language['private-yes'] : language['private-no']}</p>
          <p><b>ID:</b> {user.id}</p>
        </div>
      )}
    </>
  );
};

export default UserInfo;