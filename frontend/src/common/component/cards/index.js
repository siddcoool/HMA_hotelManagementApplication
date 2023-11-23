import axios from 'axios';
import './index.css'
import { formatDate } from '../../functions/date';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

const CardItem = (props) => {
    const { onClick, tryBook } = props
    const navigate = useNavigate()
    const { price, description,_id} = props.room
    console.log({tryBook})
    const handleBookingSubmit = async () => {
        try {
            const payload = {
                
                startDate: formatDate(tryBook.startDate),
                endDate: formatDate(tryBook.endDate),
                status: 'success',
                paymentMode: 'cash',
            }

           const {status,data} = await axios.post(`/booking/${_id}`,payload)
            console.log({
                payload
            })

            if(status === 200) { 
                toast.success(data.message)
                navigate('/thank-you')
                 
            } else {
                toast.warning('Booking Failed')
            }


          // api call
        } catch (error) {
            if(!error.response){
                toast.error('Internal server error')
            }
            if(error.response.data.message) {
                toast.error(error.response.data.message)
            }
            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
              } else {
                // Log the entire error response for debugging purposes
                console.error('Error Response:', error.response);
              }
        }
    };
    return (
        <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_price" >price: {price}</div>
                {(
                    <div className="ag-courses-item_date-box">

                        <span className="ag-courses-item_date">{description}</span>
                    </div>
                )}
            </a>
            {(tryBook.startDate && tryBook.endDate)?<button onClick={handleBookingSubmit}>Book</button>:<></>}
        </div>
    );
};

const Cards = (prop) => {
    
    return (
        <div className="ag-format-container">
            <div className="ag-courses_box">
                {prop.items.map((item) => (
                    <CardItem  tryBook={prop.tryBook} onClick={prop.onClick} room={item} />
                ))}
            </div>
        </div>
    );
};

export default Cards;
