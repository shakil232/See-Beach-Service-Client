import React from 'react';
import './UserDashBoard.css'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBasket, faCommentDots, faHome } from '@fortawesome/free-solid-svg-icons';
import Order from '../Order/Order'
import OrderList from '../OrderList/OrderList'
import Review from '../Review/Review'

const UserDashBoard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className=" d-flex">
            <div className=" user-side-bar col-md-2 col-sm-1  ">

                <div className="home">
                    <Link to="/home"> <h5> <FontAwesomeIcon className=" user-icons mt-4 " icon={faHome} /> Sea Skiing </h5></Link>
                </div>

                <div className="side-compo-name mt-4">

                    <Link to={`${url}/order`}> <p><FontAwesomeIcon className=" user-icons " icon={faCartPlus} /> Book </p></Link>

                    <Link to={`${url}/orderList`}> <p><FontAwesomeIcon className=" user-icons " icon={faShoppingBasket} /> BookList </p></Link>

                    <Link to={`${url}/review`}> <p> <FontAwesomeIcon className=" user-icons " icon={faCommentDots} /> Review </p></Link>

                </div>
            </div>

            <div className=" side-bar-details col-md-9 col-sm-1 ml-2 mt-4">
                <Switch>
                    <Route exact path={path}>
                        <Order />
                    </Route>

                    <Route path={`${path}/order`}>
                        <Order />
                    </Route>

                    <Route path={`${path}/orderList`}>
                        <OrderList />
                    </Route>

                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>

                </Switch>
            </div>

        </div>
    );
};

export default UserDashBoard;