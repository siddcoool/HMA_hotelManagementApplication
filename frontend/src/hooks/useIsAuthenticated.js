import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthenticationStatus } from '../common/constant/app';


/**
 * Hooks vs Component
 * 1. Name is title case for component whereas hooks name starts with "useSomething"
 * 2. Component returns JSX, hooks returns null | State
 */

const useIsAuthenticated = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const [user, setUser] = useState(null)
    const [authenticationStatus, setAuthenticationStatus] = useState(AuthenticationStatus.notAvailable)
    

    const check = () => {
        setAuthenticationStatus(AuthenticationStatus.loading)
        const user = localStorage.getItem('hma-user')
        if(!user && location.pathname !== "/register") {
            setAuthenticationStatus(AuthenticationStatus.notAvailable)
            navigate('/login')
        } else if(user) {
            setAuthenticationStatus(AuthenticationStatus.available)
            setUser(JSON.parse(user))
        } else {
            setAuthenticationStatus(AuthenticationStatus.notAvailable)
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
        authenticationStatus,
        setAuthenticate,
        deleteAuthenticated
    }
}

export default useIsAuthenticated;