import React, { useState } from 'react';
import './AllBookTable.css'

const ALlBookTable = (props) => {
    const { name, email, Ride, paymentId } = props.list;
    const [change, setChange] = useState();

    const handleChange = (e) => {
        setChange(e.target.value)
        console.log(e.target.value)
    }

    // useEffect(() => {
    //     fetch("http://localhost:5100/upDateStatus", {
    //                 method: "PATCH",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify(),
    //             })
    //                 .then(res => res.json())
    //                 .then(data =>  (data));
    //     }, [])
    
        return (

            <section className="row">
                <div>
                    <table className="table table-borderless col-md-12 col-sm-1">
                        <tbody>

                            <tr className="table-detail-bottom">
                                {/* <th>{index + 1}</th> */}
                                <th className="text-secondary" scope="col">{name}</th>
                                <th className="text-secondary" scope="col">{email}</th>
                                <th className="text-secondary" scope="col">{Ride?.ride}</th>
                                <th className="text-secondary" scope="col">{paymentId}</th>
                                <th>
                                    <select onChange={handleChange} class="form-select status-click" aria-label="Default select example">
                                        <option id="pending" className="pending" selected>Pending</option>

                                        <option id="done" className="done" value="done">Done</option>

                                        <option id="onGoing" className="going" value="on going">On Going</option>

                                    </select>
                                </th>

                            </tr>

                        </tbody>
                    </table>
                </div>

            </section>
        );
    };

    export default ALlBookTable;