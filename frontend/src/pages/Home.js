import useIsAuthenticated from "../hooks/useIsAuthenticated"

function Home() {

    const { user, deleteAuthenticated } = useIsAuthenticated()

    if(!user) {
        return <></>
    }

    return (
        <div>
            Hello {user.name}
            <button onClick={deleteAuthenticated}>Logout</button>
        </div>
    )
}

export default Home