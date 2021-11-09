import React, { useState, useEffect } from "react";

const UserInfo = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        props.keycloak.loadUserInfo().then(userInfo => {
            const {name, email, sub, preferred_username} = userInfo
            setUser({
                userName: preferred_username,
                name: name,
                email: email,
                id: sub,
            })
        });
        console.log(props.keycloak.token);
    }, []);

    return (
        <div>
            {user && (
                <div>
                    <p>User: {user.userName}</p>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>ID: {user.id}</p>
                </div>
            )}   
        </div>
    );
}

export default UserInfo;


