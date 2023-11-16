import { useEffect, useState } from "react";
import useIsAuthenticated from "../hooks/useIsAuthenticated"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import Loader from "../common/component/Loader";
import Cards from "../common/component/cards";
const url = "https://jsonplaceholder.typicode.com/users";


function Home() {

    const [rooms, setRooms] = useState([])
    const navigate = useNavigate();
    const { user, deleteAuthenticated } = useIsAuthenticated()

    const fetchRooms = async () => {
        try {
            const res = await axios.get("/room");
            const { data } = res
            return setRooms(data);
        } catch (error) {
            toast.error('Failed to load rooms')
            return
        }
    }

    const goToBooking = (room) => {
        navigate(`/room/${room._id}/booking`)
    }

    useEffect(() => {
        fetchRooms();
    }, [])

    if (!user) {
        return <></>
    }
    if (rooms.length === 0) {
        return <Loader />
    }

    return (
        <div>
            <center>
                <Cards items={rooms} onClick={goToBooking} />
                {rooms.map((room) => {
                })}
            </center>
        </div>
    )
}


export default Home