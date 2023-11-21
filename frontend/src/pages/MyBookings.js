import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BookingCard from "../common/component/bookingCard";


const MyBookings = (props) => {
    const [bookings, setBookings] = useState([])

    const fetchBookings = async () => {
        try {
            const res = await axios.get(`/booking/me`)
            const { data } = res
            return setBookings(data);
        } catch (error) {
            toast.error('Failed to load rooms')
            return error
        }
    }

    useEffect(() => {
             fetchBookings()
        }, [])
    
console.log({bookings})
    return (
        <>
            <div>bookings</div>
            <BookingCard bookings={bookings}  />
        </>

    )
}

export default MyBookings;