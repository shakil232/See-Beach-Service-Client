import React from 'react';

const SecretPage = () => {
    return (
        <div className="mt-5 pt-5 text-center ">
            <h3 className="text-primary"> Only Admin Are Access Here ..</h3>
            <h1 className="text-danger"> This Page Are Secret ! You Not Access Here </h1>
        </div>
    );
};

export default SecretPage;