import { useEffect, useState } from "react"
import useIsAuthenticated from "../../hooks/useIsAuthenticated"
import { AuthenticationStatus } from "../constant/app"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Loader from "../component/Loader"

const AuthenticationProvider = ({ children, isAdminProtected }) => {
    const { user, authenticationStatus } = useIsAuthenticated()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const refreshToken = async () => {
        try {
            setLoading(true)
            const { status, data } = await axios.get('/token')

            if (status === 200) {
                localStorage.setItem('hma-token', data)
                axios.defaults.headers.common.access_token = localStorage.getItem('hma-token')
            } else {
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
            navigate('/login')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log('Provider called')
        refreshToken()
    }, [])

    if (authenticationStatus === AuthenticationStatus.loading) {
        return <></>
    }

    if (loading) {
        return <Loader /> // splash screen
    }

    if (authenticationStatus === AuthenticationStatus.available) {
        if (isAdminProtected && !user.isAdmin) {
            throw new Error('Page not exist')
        }
    }
    return children
}

export default AuthenticationProvider;