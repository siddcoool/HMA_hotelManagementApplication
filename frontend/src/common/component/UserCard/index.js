import axios from 'axios';
import './index.css'
import { useEffect, useState } from 'react';

const UserCard = ({ user }) => {
    const [loading, setLoading] = useState(false)
    const [block, setBlock] = useState(user.isBlocked)
    const blockUser = async () => {
        if (loading) {
            return
        }
        if (user.isAdmin) return
        try {
            setLoading(true)

            const id = user._id
            const { status } = await axios.put(`/user/${id}/block/toggle`)
            if (status == 200) {
                setBlock(!block)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="card card_layout" >
            <div className="header">
                <div className="content">
                    <span className="title">Name : {user.name}</span>
                    <p className="message">Email : {(user.email)} </p>
                    <p className="message">: {(user.endDate)} </p>
                    {!user.isAdmin &&
                        <button onClick={() => blockUser()}>
                            {
                                loading ? "Saving..." :
                                    block ? "Unblock" : "Block"
                            }
                        </button>}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
