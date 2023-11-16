import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


/**
 * Hooks vs Component
 * 1. Name is title case for component whereas hooks name starts with "useSomething"
 * 2. Component returns JSX, hooks returns null | State
 */

const useIsAuthenticated = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const [user, setUser] = useState(null)
    

    const check = () => {
        const user = localStorage.getItem('hma-user')
        console.log({
            user
        });
        if(!user && location.pathname !== "/register") {
            navigate('/login')
        } else if(user) {
            setUser(JSON.parse(user))
        }
        
    }

    const setAuthenticate = (user, token) => {
        if(!user){
            throw new Error("user is required")
        }
       localStorage.setItem('hma-user', JSON.stringify(user))
       localStorage.setItem('hma-token', token)
       axios.defaults.headers.common.access_token = token
       navigate('/')
    }

    const deleteAuthenticated = () => {
        localStorage.removeItem('hma-user')
        navigate('/login')
    }

    useEffect(() => {
        check()
    }, [])

    return {
        user,
        setAuthenticate,
        deleteAuthenticated
    }
}

export default useIsAuthenticated;