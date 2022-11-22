import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService')

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const addService = {
            name,
            price,
            description,
            rating
        }
        fetch('https://b6a11-service-review-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('New Service Added Successfully', { autoClose: 1000 })
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <form onSubmit={handleAddService}>
            <div className='lg:flex gap-2'>
                <input name="name" type="text" placeholder="service name" className="input input-bordered w-full" required />
                <input name="price" type="text" placeholder="price" className="input input-bordered w-full" required />
                <input name="rating" type="text" placeholder="rating" className="input input-bordered w-full" required />
                <input name="photoURL" type="text" placeholder="photoURL" className="input input-bordered w-full" />
                <input name="description" type="text" placeholder="description" className="input input-bordered w-full" required />
            </div>
            <input className='btn btn-outline normal-case mt-2' type="submit" value="Add Service" />
            <ToastContainer />
        </form>
    );
};

export default AddService;