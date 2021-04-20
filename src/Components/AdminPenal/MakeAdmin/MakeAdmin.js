import React from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminData = {
            AdminEmail: data.email,
        }

        fetch('http://localhost:5100/addAdmin', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                if (res) {
                    alert('Create Admin successfully..')
                }
            })
    }
    return (
        <div className="col-md-6 mt-6 pt-4  makeAdmin-Container ">

            <form className="makeAdmin " onSubmit={handleSubmit(onSubmit)}>

                <label className=" ms-2 label mt-2"> Email </label><br />
                <input className=" ms-2 input" type='email' name="email" {...register("email", { required: true })} /> <br />



                <input className="  ms-2 mt-2 submit" type="submit" value="Submit" />
            </form>

        </div>

    );
};

export default MakeAdmin;