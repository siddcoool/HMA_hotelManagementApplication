import axios from "axios";
import { useEffect, useState } from "react";

const BookingCard = ({ bookings }) => {
  const [isCancel, setIsCancel] = useState(false)
  const cardStyle = {
    width: '300px',
    height: '200px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    fontFamily: 'Roboto, sans-serif',
  };
  console.log({ bookings })
  const bookingId = bookings._id

  const handleCancel = async (booking) => {
    setIsCancel(true);
     await axios.delete(`/booking/${booking._id}`)
  }


  return (

    <div style={cardStyle}>
      {bookings.map((booking, index) => (
        <div key={index} style={cardStyle}>
          <p>startDate : {booking.startDate}</p>
          <p>endDate : {booking.endDate}</p>
          <p>status : {booking.status}</p>
          <p>name : {booking.room.name}</p>

          <button onClick={() => handleCancel(booking)} >Cancel</button>



          <p>{/* Display other booking information here */}</p>
        </div>
      )

      )}

    </div>
  );
};

export default BookingCard;
