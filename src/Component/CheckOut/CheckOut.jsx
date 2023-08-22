import React, { useContext } from 'react';
import CheckOutBanner from '../CommonWork/CheckOutBanner/CheckOutBanner';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authencation/AuthProvider/AuthProvider';

const CheckOut = () => {
    let {user}=useContext(AuthContext)
    let services = useLoaderData()
    let {title,_id,price,img}=services
    let navigate=useNavigate()
        // TODO
    let handelAddSubmit=(event)=>{
        event.preventDefault()
        let name=event.target.name.value
        let date=event.target.date.value
        let number=event.target.number.value
        let email=event.target.email.value
        let order={
            customerName:name,
            email,
            date,
            title,
            img,
            number,
            service:_id,
            price:price
        }
        fetch("https://care-doctor-server.vercel.app/booking",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data=> {  
            if(data.insertedId){
                alert("Your Booking Complete")
            }
            navigate("/booking")
        })
    }


    return (
        <div className="md:mx-16">
            <CheckOutBanner></CheckOutBanner>

            <div className="card-body">
                <h2 className="text-center text-3xl">Book Services :{title}</h2>
                <form onSubmit={handelAddSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input name='date' type="date"  className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input name='number' type="number" placeholder="Your Phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                    </div>
                </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Order Confirm" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CheckOut;