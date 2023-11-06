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
        if(!user && location.pathname !== "/register") {
            navigate('/login')
        } else if(user) {
            setUser(JSON.parse(user))
        }
        
    }

    const setAuthenticate = (user) => {
       localStorage.setItem('hma-user', JSON.stringify(user))
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