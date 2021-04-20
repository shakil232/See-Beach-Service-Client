import React from 'react';
import './Connected.css';
import { useForm } from "react-hook-form";



const Connected = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        
        <section className="contact my-1 py-1">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="contact-head mt-3">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-8 mx-auto">
                    <form action="">
                        <div className="d-flex col-sm-12 ">

                            <div className="form-group ">
                                <input type="text" name="FullName" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="form-group ml-5">
                                <input type="text" name="LastName" className="form-control" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="d-flex col-sm-12 ">

                            <div className="form-group ">
                                <input type="email" name="email" className="form-control" placeholder="Email Address " />
                            </div>
                            <div className="form-group ml-5">
                                <input type="number" name="number" className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>

                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your Message"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="submit-btn"> Submit </button>
                            </div>
                    </form>
                </div>
                </div>
        </section>
    );
};

export default Connected;