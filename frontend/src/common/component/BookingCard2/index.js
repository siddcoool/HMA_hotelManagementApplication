import './index.css'
import dayjs from 'dayjs';

const CardComponent = ({ bookings }) => {
  
  return (
    <div className='outer-div'>
      {
        bookings.map((booking) => {
          return (<>
            <div className="card">
              <div className="header">
                <div className="content">
                  <span className="title">Booking Created{booking.room.description}</span>
                  <p className="message">Start Date : {dayjs(booking.startDate).format('DD/MM/YYYY')} </p>
                  <p className="message">End Date : {dayjs(booking.endDate).format('DD/MM/YYYY')} </p>
                  <button onClick={}>Cancel</button>
                </div>
              </div>
            </div>
          </>
          )
        })
      }
    </div>

  );
};

export default CardComponent;
