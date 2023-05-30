import React from 'react';

const BookingCard = ({ myData ,handleDelete,handleConfirm}) => {

    const {_id, img, date, price, customerName, title ,status} = myData


    return (

        <tr>

            <td>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>

            <td>
                <div className="flex items-center space-x-3">

                    <div className="avatar">
                        <div className="rounded w-28 h-28">
                            <img src={img} />
                        </div>
                    </div>
                </div>
            </td>

            <td>
                {customerName}
            </td>

            <td>
                {`$ ${price}`}
            </td>
            <td>{date}</td>
            <th>
               { 
               status === "Confirm" ? <span className='text-primary font-bold'>Confirmed</span>:
               <button onClick={()=>handleConfirm(_id)} className="btn btn-active btn-secondary">Confirm</button>}
            </th>
        </tr>

    );
};

export default BookingCard;