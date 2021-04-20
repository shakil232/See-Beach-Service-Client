import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
// import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.email || isLoggedIn()) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;