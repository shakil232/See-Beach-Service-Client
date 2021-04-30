import React, { useContext, useEffect, useState } from 'react';
import './AdminPenal.css';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faShoppingBasket, faUserPlus, faThLarge, faHome } from '@fortawesome/free-solid-svg-icons';
import AllBooking from '../AllBookingList/AllBooking';
import AddService from '../AddService/AddService';
import AddGallery from '../AddGallery/AddGallery';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import SecretPage from '../SecrectPage/SecretPage'
import { UserContext } from '../../../App';


const AdminPenal = () => {
    let { path, url } = useRouteMatch();

    const [user, setUser] = useContext(UserContext);
    
    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin)
    useEffect(() => {
        fetch("http://localhost:5100/isAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email }),
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);


    return (
        <div className=" d-flex">
            <div className=" admin-side-bar col-md-2 col-sm-1  ">

                <div className="home">
                    <Link to="/home"> <h5> <FontAwesomeIcon className=" admin-icons mt-4 " icon={faHome} /> Sea Skiing </h5></Link>
                </div>


                < div className="side-compo-name mt-4">

                    
                        {isAdmin?
                            <div>
                            <Link to={`${url}/bookingList`}> <p><FontAwesomeIcon className=" user-icons " icon={faShoppingBasket} /> All Booking </p></Link>

                            <Link to={`${url}/addService`}> <p><FontAwesomeIcon className=" user-icons " icon={faPlus} /> Add Service </p></Link>

                            <Link to={`${url}/gallery`}> <p><FontAwesomeIcon className=" user-icons " icon={faPlus} /> Add Gallery </p></Link>

                            <Link to={`${url}/makeAdmin`}> <p><FontAwesomeIcon className=" user-icons " icon={faUserPlus} /> Make Admin  </p></Link>

                            <Link to={`${url}/manage`}> <p><FontAwesomeIcon className=" user-icons " icon={faThLarge} /> Manage Services  </p></Link>
                        </div> :
                        <Link to={`${url}/secret`}> <p> </p></Link>}
                    

                </div>
            </div>

            <div className=" side-bar-details col-md-9 col-sm-1 ml-2 mt-4">

                <Switch>
                  {isAdmin?
                   <Route exact path={path}>
                        <AllBooking />
                    </Route> :

                    <Route exact path={path}>
                        <SecretPage />
                    </Route>}

                    <Route path={`${path}/bookingList`}>
                        <AllBooking />
                    </Route>

                    <Route path={`${path}/addService`}>
                        <AddService />
                    </Route>

                    <Route path={`${path}/gallery`}>
                        <AddGallery />
                    </Route>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>

                    <Route path={`${path}/manage`}>
                        <ManageService />
                    </Route>

                    <Route path={`${path}/secret`}>
                        <SecretPage />
                    </Route>

                </Switch>

            </div>
        </div>
    );
};

export default AdminPenal;