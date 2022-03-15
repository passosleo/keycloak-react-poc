import React from 'react';
import { withRouter } from 'react-router-dom'

const Logout = (props) => {
  const {keycloak, history, language} = props;

  const logout = () => {
    history.push('/');
    keycloak.logout();
  };

  return (
    <button onClick={() => logout()}>
      {language['private-button']}
    </button>
  );
};

export default withRouter(Logout);