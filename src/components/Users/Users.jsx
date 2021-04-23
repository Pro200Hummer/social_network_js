import React from "react";
import us from './Users.module.css'
import * as axios from "axios";

const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return <div>
        {
            props.users.map(u => {
                    const followClickHandler = () => {
                        props.follow(u.id)
                    }
                    const unFollowClickHandler = () => {
                        props.unfollow(u.id)
                    }

                    const button = u.followed ?
                        <button onClick={followClickHandler}>Follow</button> :
                        <button onClick={unFollowClickHandler}>Unfollow</button>
                    return <div key={u.id}>
                        <div><img src={u.photos.small} className={us.avatar}/></div>
                        <div>
                            {button}
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                }
            )
        }
    </div>
}

export default Users