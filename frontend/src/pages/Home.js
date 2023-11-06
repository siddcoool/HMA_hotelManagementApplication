import useIsAuthenticated from "../hooks/useIsAuthenticated"

function Home() {

    const { deleteAuthenticated } = useIsAuthenticated()

    return (
        <div>
            <button onClick={deleteAuthenticated}>Logout</button>
        </div>
    )
}

export default Home