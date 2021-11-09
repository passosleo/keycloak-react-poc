import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom'

const Logout = (props) => {
    
    const logout = () => {
        props.history.push('/');
        props.keycloak.logout();
    }

    return (
        <Button 
            style={{
                backgroundColor: '#000 ',
                color: '#fff',
                marginTop: '25px',
                width: '400px'
            }}  
            variant='contained' 
            onClick={ () => logout() }
        >
        Logout
    </Button>
    );
}

export default withRouter(Logout);