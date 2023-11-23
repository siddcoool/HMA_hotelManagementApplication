import useIsAuthenticated from "../../hooks/useIsAuthenticated"
import { AuthenticationStatus } from "../constant/app"

const AuthenticationProvider = ({ children, isAdminProtected }) => {
    const { user, authenticationStatus } = useIsAuthenticated()

    if(authenticationStatus === AuthenticationStatus.loading) {
        return <></>
    }

    if(authenticationStatus === AuthenticationStatus.available) {
        if(isAdminProtected && !user.isAdmin) {
            throw new Error('Page not exist')
        }
    }

    return children

}

export default AuthenticationProvider;