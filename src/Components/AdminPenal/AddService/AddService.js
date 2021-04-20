import React, { useState } from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUp, setImageUp] = useState(null)


    const onSubmit = data => {
        const ServiceData = {
            ServiceName: data.title,
            ServicePrice: data.price,
            ServiceDescription: data.description,
            ServiceUrl: imageUp
        }

        fetch('http://localhost:5100/addService', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(ServiceData)
        })
            .then(res => {
                if (res) {
                    alert('service added successfully..')
                }
            })
    }

    const handleImageUpload = e => {

        const imageData = new FormData();
        imageData.set('key', 'b839ce61a3e8fdd61e1e36759838e3f2');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageUp(res.data.data.display_url)
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <section>
            <div className="addService-head mb-5 ms-3 mt-3">
                <h5>Add Services </h5>
            </div>


            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex row text-center">

                    <div className=" col-md-6 col-sm-12  ">
                        <div>
                            <label className="label "> Service Title</label> <br />
                            <input className="inputs form-control" type="text" name="title" placeholder=""  {...register("title", { required: true })} />
                        </div>

                        <div>
                            <label className="label "> Description </label> <br />
                            <textarea className="inputs form-control" type="text" name="description" placeholder=""  {...register("description", { required: true })}></textarea>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 ">
                        <div>
                            <label className="label ">Service Price</label> <br />
                            <input className="inputs form-control" type="text" name="price" placeholder=""  {...register("price", { required: true })} />
                        </div>

                        <div className="mt-4">
                            <label className="label ">Add Photo</label> <br />
                            <input className="file" type="file" name="image" onChange={handleImageUpload} />
                        </div>
                    </div>

                </div>

                <div className="text-end">
                    <input className="addService-btn mt-2" type="submit" value="Submit" />
                </div>

            </form>
        </section>
    );
};

export default AddService;