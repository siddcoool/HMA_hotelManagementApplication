import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { formatDate } from '../common/functions/date';

const BookingComponent = () => {
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        status: 'success',
        paymentMode: 'cash',
    });
    const { roomId } = useParams();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBookingSubmit = async () => {
        try {
            const payload = {
                ...formData,
                startDate: formatDate(formData.startDate),
                endDate: formatDate(formData.endDate),
            }

           const {status,data} = await axios.post(`/booking/${roomId}`,payload)
            console.log({
                payload
            })

            if(status === 200) { 
                toast.success(data.message)
                 
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
        <div className='booking_container'>
            <h2>Create Booking</h2>
            <form>
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        min={new Date()}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        min={formData.startDate}
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                    />
                </label>
                <button
                    type="button"
                    onClick={() => handleBookingSubmit(/* Pass roomId here */)}
                >
                    Create Booking
                </button>
            </form>
        </div>
    );
};

export default BookingComponent;
