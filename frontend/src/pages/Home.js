import { useEffect, useState } from "react";
import useIsAuthenticated from "../hooks/useIsAuthenticated"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Loader from "../common/component/Loader";
import Cards from "../common/component/cards";
import { getTomorrowDate } from "../common/functions/date";

function Home() {

    const [rooms, setRooms] = useState([])

    const navigate = useNavigate();
    const { user } = useIsAuthenticated()

    const [formData, setFormData] = useState({
        startDate: '',
        endDate: ''
    });

    const fetchRooms = async () => {
        try {
            const res = await axios.get("/room", {
                params: formData, headers: { key: "value" }
            });
            const { data } = res
            return setRooms(data);
        } catch (error) {
            toast.error('Failed to load rooms')
            return
        }
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const goToBooking = (room) => {
        navigate(`/room/${room._id}/booking`)
    }

    const goToCreateRooms = () => {
        navigate('/room/create')
    }

    useEffect(() => {
        fetchRooms();
    }, [formData])

    if (!user) {
        return <></>
    }
    if (rooms.length === 0) {
        return <Loader />
    }

    return (
        <div>
            <center>
                <div style={{ width: "20%" }}>
                    <label>
                        Start Date:
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            min={getTomorrowDate()}
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
                    <button onClick={goToCreateRooms}>CreateRooms</button>
                </div>
                <Cards items={rooms} onClick={goToBooking} />
                
            </center>
        </div>
    )
}


export default Home