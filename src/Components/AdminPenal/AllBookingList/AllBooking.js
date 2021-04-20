import React, { useEffect, useState } from 'react';
import './AllBooking.css'
import { Spinner } from 'react-bootstrap';   
import ALlBookTable from '../AllBookTable/ALlBookTable';

const AllBooking = () => {

    const [AllList, setAllList] = useState([]);
    // const [change, setChange] = useState();


    useEffect(() => {
        fetch('http://localhost:5100/bookedList')
            .then(res => res.json())
            .then(result => setAllList(result))
    }, []);

    // const handleChange = (e) => {
    //     setChange(e.target.value)
    //     console.log(e.target.value)
    // }

    
    return (
        <section className="row">
            <div className=" orderList-head mb-3">
                <h3>Booking List</h3>
            </div>

            <div className="orderList">
                <table className="table table-borderless col-md-12 col-sm-1">
                    <thead>
                        <tr className="table-detail-top">
                            {/* <th className="text-secondary text-left" scope="col">Sr No</th> */}
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email Id </th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Pay With </th>
                            <th className="text-secondary" scope="col">Status</th>

                        </tr>
                    </thead>


                    <tbody>

                        <div className="spinner text-center mt-4">
                            {
                                AllList.length === 0 &&
                                <Spinner animation="border" variant="success" />
                            }
                        </div>
                        {/* {
                            AllList.map((list, index) =>
                                <tr className="table-detail-bottom">
                                    <th>{index + 1}</th>
                                    <th >{list.name}</th>
                                    <th >{list.email}</th>
                                    <th >{list.Ride?.ride}</th>
                                    <th >{list.paymentId}</th>
                                    <th>
                                        <select onChange={handleChange} class="form-select status-click" aria-label="Default select example">
                                            <option className="pending" selected>Pending</option>

                                            <option className="done" value="done">Done</option>

                                            <option className="going" value="on going">On Going</option>

                                        </select>
                                    </th>


                                </tr>


                            )
                        } */}
                    </tbody>

                </table>
                <div>
                    {
                        AllList.map(list => <ALlBookTable list={list}></ALlBookTable>)
                    }
                </div>
            </div>


        </section >
    );
};

export default AllBooking;