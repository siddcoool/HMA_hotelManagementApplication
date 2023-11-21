
const BookingCard = ({bookings}) => {
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

  return (

    <div style={cardStyle}>
     { bookings.map((booking, index)=> (
       <div key={index} style={cardStyle}>
       <p>startDate : {booking.startDate}</p>
       <p>endDate : {booking.endDate}</p>
       <p>status : {booking.status}</p>
       <p>name : {booking.room.name}</p>


       <p>{/* Display other booking information here */}</p>
     </div>
     )

      )}
      
    </div>
  );
};

export default BookingCard;
