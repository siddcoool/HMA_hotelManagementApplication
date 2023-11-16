import axios from 'axios'
import { useState } from 'react'

const MyBookings = async () => {
    const [bookings, setbookings] = useState()
    const { startDate, endDate } = await axios.get('/me/booking')

    return (
        <div>bookings</div>
    )
}

export default MyBookings;