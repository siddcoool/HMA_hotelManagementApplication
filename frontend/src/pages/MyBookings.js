import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BookingCard from "../common/component/BookingCard";
import BookingCard2 from '../common/component/BookingCard2'


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
    
    const cancelBookings = (BookingId) => {

    }
console.log({bookings})
    return (
        <>
            <div>bookings</div>
            {/* <BookingCard bookings={bookings}  /> */}
            <BookingCard2 bookings={bookings} {cancelBookings}/>
        </>

    )
}

export default MyBookings;