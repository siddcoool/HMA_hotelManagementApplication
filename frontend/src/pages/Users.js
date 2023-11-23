import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from "../common/component/UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);
    const getUser = async () => {
        try {
            const response = await axios.get('/user')
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    console.log({ users })

    return (
        <div className ='outer-div'>
            {users.map((user) => {
                return (<>
                    <UserCard user={user}></UserCard>
                </>
                )
            })}
        </div>
    )
}

export default Users;