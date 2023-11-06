import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


/**
 * Hooks vs Component
 * 1. Name is title case for component whereas hooks name starts with "useSomething"
 * 2. Component returns JSX, hooks returns null | State
 */

const useIsAuthenticated = () => {
    const navigate = useNavigate();

    const check = () => {
        const user = localStorage.getItem('hma-user')
        if(user) {
        } else {
            navigate('/login')
        }
    }

    const setAuthenticate = () => {
       localStorage.setItem('hma-user', true)
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
        setAuthenticate,
        deleteAuthenticated
    }
}

export default useIsAuthenticated;