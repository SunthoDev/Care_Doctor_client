import React from 'react';
import { AuthContext } from '../Authencation/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import { Navigate, useNavigate } from 'react-router-dom';

const Booking = () => {

    let { user } = useContext(AuthContext)
    let [booking, setBooking] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("care_doctor")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBooking(data)
                }
                else {
                    navigate("/")
                }
            })
    }, [])




    let handleDelete = (id) => {
        let proceed = confirm("Are You Sure Delete")
        if (proceed) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Your Item Delete Is successfully")
                    }
                    {
                        let remaining = booking.filter(de => de._id !== id)
                        setBooking(remaining)
                    }
                })
        }
    }


    let handleConfirm = (id) => {

        fetch(`http://localhost:5000/update/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("Your Data Modified Is Successfully")
                }
                let remaining = booking.filter(book => book._id !== id)
                let updateData = booking.find(up => up._id === id)
                updateData.status = "Confirm"
                let newBooking = [updateData, ...remaining]
                setBooking(newBooking)

            })
    }




    return (
        <div className="md:mx-16">
            <h2>This Is My Booking : {booking.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            booking.map(myBok => <BookingCard handleDelete={handleDelete} key={myBok._id} handleConfirm={handleConfirm} myData={myBok}></BookingCard >)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Booking;