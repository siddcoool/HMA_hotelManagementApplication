import { Link, Navigate, useNavigate } from "react-router-dom";
import useIsAuthenticated from "../hooks/useIsAuthenticated";

const HorizontalLayout = ({ children }) => {
    const { user, deleteAuthenticated } = useIsAuthenticated()
    const navigate = useNavigate();
    console.log({user})

    const goToCreateRooms = () => {
        navigate('/room/create')
    }

    if (!user) {
        return <></>
    }

    return <>
        <ul class='flex-space-between'>
            <div>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about' >About</Link></li>
                <li><Link to='/contact' >Contact</Link></li>

            </div>
            <div className="flex-space-between align_center">
            {user.isAdmin?<button onClick={goToCreateRooms}>CreateRooms</button>:<></>}
                <li><Link to='/mybookings' >My Bookings</Link></li>
                <p style={{ color: 'white', paddingRight: 10 }}>Hi {user?.name}</p>
                <button class="logoutButton" onClick={deleteAuthenticated}>Logout</button>
            </div>
        </ul>
        {children}
    </>
}

export default HorizontalLayout;