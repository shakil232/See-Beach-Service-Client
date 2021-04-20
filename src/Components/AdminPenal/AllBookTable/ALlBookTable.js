import React, { useState } from 'react';
import './AllBookTable.css'

const ALlBookTable = (props) => {
    const {name,email,Ride,paymentId} = props.list;
    const [change, setChange] = useState();
    const handleChange = (e) => {
        setChange(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <table className="table table-borderless col-md-12 col-sm-1">
                <tbody>

                    <tr className="table-detail-bottom">
                        {/* <th>{index + 1}</th> */}
                        <th >{name}</th>
                        <th >{email}</th>
                        <th >{Ride?.ride}</th>
                        <th >{paymentId}</th>
                        <th>
                            <select onChange={handleChange} class="form-select status-click" aria-label="Default select example">
                                <option className="pending" selected>Pending</option>

                                <option className="done" value="done">Done</option>

                                <option className="going" value="on going">On Going</option>

                            </select>
                        </th>


                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ALlBookTable;