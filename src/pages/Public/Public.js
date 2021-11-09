import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

export default function Public() {
    return (
        <Grid
            container
            spacing={1} 
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <h1>Integração Keycloak</h1>
            <h2>Área Pública</h2>  
            <Link 
                to="/private"
                style={{
                    textDecoration: 'none',
                }}   
            >
                <Button
                    style={{
                        backgroundColor: '#000 ',
                        color: '#fff',
                        marginTop: '25px',
                        width: '400px'
                    }}  
                    variant='contained'
                >
                    Entrar na área privada
                </Button>
            </Link>
        </Grid> 
    )
}