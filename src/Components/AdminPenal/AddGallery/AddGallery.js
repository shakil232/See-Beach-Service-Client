import React, { useState } from 'react';
import './AddGallery.css';
import { useForm } from "react-hook-form";
import axios from 'axios'

const AddGallery = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [gallery, setGallery] = useState(null)


    const onSubmit = data => {
        const galleryData = {
            GalleryName: data.title,
            GalleryUrl: gallery
        }

        fetch('http://localhost:5100/addGallery', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(galleryData)
        })
            .then(res => {
                if (res) {
                    alert('Image added successfully..')
                }
            })
    }

    const handleImageUpload = e => {

        const imageData = new FormData();
        imageData.set('key', 'b839ce61a3e8fdd61e1e36759838e3f2');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setGallery(res.data.data.display_url)
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <section>
            <div className="addService-head mb-5 ms-3 mt-3">
                <h5>Add Gallery Images </h5>
            </div>


            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex row text-center">

                    <div className=" col-md-6 col-sm-12  ">
                        <div>
                            <label className="label "> Image Title </label> <br />
                            <input className="inputs form-control" type="text" name="title"  {...register("title", { required: true })} />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 ">

                        <div className="mt-2">
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

export default AddGallery;