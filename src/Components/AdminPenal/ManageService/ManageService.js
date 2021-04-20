import React, { useEffect, useState } from 'react';
import './ManageService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const ManageService = () => {
    const [manages, setManages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5100/manageService')
            .then(res => res.json())
            .then(data => setManages(data))
    }, []);

    // EditArea
    const handleEdit = () => {
        console.log('not working')
    };

    // deleteArea
    const deleteService = (id) => {
        fetch(`http://localhost:5100/deleteService/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('deleted successfully.')
                }
            })
    };
    return (
        <section className="row ">
            <div className="manage-head mb-3 ">
                <h4>Manage Services</h4>
            </div>

            <div className="manage">
                <table className="table table-borderless col-md-12 col-sm-6">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">price</th>
                            <th className="text-secondary" scope="col">image</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>

                    {
                        manages.length === 0 &&
                        <Spinner className="spinner mt-3" animation="border" variant="success" />
                    }

                    <tbody>
                        {
                            manages.map((manage, index) =>

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{manage.ServiceName}</td>
                                    <td>{manage.ServicePrice}</td>
                                    <td>
                                        <img className="manage-img" src={manage.ServiceUrl} alt="" />
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-evenly">
                                            <Link onClick={handleEdit}><FontAwesomeIcon className=" edit-icon " icon={faEdit} /></Link>

                                            <Link onClick={() => deleteService(manage._id)}><FontAwesomeIcon className=" delete-icon" icon={faTrashAlt} /></Link>
                                        </div>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </section >
    );
};

export default ManageService;