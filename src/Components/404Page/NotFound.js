import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';

const NotFound = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="text-center mt-5 pt-5" >
                <h2 className="text-danger"> Your Search Are Not-Found!!</h2>
                <h1 className="text-primary">Please Try Again</h1>
            </div>
        </div>
    );
};

export default NotFound;