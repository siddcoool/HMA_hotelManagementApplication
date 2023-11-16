import { Link } from "react-router-dom";
import useIsAuthenticated from "../hooks/useIsAuthenticated";

const HorizontalLayout = ({ children }) => {
    const { user, deleteAuthenticated } = useIsAuthenticated()

    return <>
        <ul class='flex-space-between'>
            <div>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about' >About</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
            </div>
            <div className="flex-space-between align_center">
                <p style={{ color: 'white', paddingRight: 10 }}>Hi {user?.name}</p>
                <button class="logoutButton" onClick={deleteAuthenticated}>Logout</button>
            </div>
        </ul>
        {children}
    </>
}

export default HorizontalLayout;