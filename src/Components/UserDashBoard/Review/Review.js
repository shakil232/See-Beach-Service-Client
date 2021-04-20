import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const ReviewData = {
            ReviewName: data.name,
            ReviewCompany: data.company,
            ReviewDescription: data.description,
        }

        fetch('http://localhost:5100/addReview', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(ReviewData)
        })
            .then(res => {
                if (res) {
                    alert('Review Send successfully..')
                }
            })
    }

    return (
        <section className="review my-2 py-2">
            <div className="review-container">

                <div className="review-head mt-3 mb-5 ms-3 text-center">
                    <h5 >Review</h5>
                </div>

                <div className="col-md-8 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <input className="inputs form-control" type="text" name="name" placeholder="Your name"  {...register("name", { required: true })} />
                        </div>

                        <div>
                            <input className="inputs form-control" type="text" name="company" placeholder="Company's name Designation"  {...register("company", { required: true })} />
                        </div>

                        <div>
                            <textarea className="inputs form-control" type="text" name="description" placeholder="Description"  {...register("description", { required: true })}></textarea>
                        </div>

                        <input className="review-btn mt-2" type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </section>

    );
};

export default Review;