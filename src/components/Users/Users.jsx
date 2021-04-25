import React from "react";
import us from './Users.module.css'
import axios from "axios";
import avatar from "../../resources/images/user-avatar.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(r => {
            console.log(r)
            this.props.setUsers(r.data.items.map(i => {
                if(i.photos.small === null){
                    return {...i, photos:{...i.photos, small: avatar}}
                }
                return i
            }))
        })
    }
    render(){
        return <div>
            {
                this.props.users.map(u => {
                        const followClickHandler = () => {
                            this.props.follow(u.id)
                        }
                        const unFollowClickHandler = () => {
                            this.props.unfollow(u.id)
                        }

                        const button = u.followed ?
                            <button onClick={followClickHandler}>Follow</button> :
                            <button onClick={unFollowClickHandler}>Unfollow</button>
                        return <div key={u.id}>
                            <div><img src={u.photos.small} className={us.avatar} alt="#"/></div>
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
}


/*const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(r => {
            console.log(r)
            props.setUsers(r.data.items.map(i => {
                if(i.photos.small === null){
                    return {...i, photos:{...i.photos, small: avatar}}
                }
                return i
            }))
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
                        <div><img src={u.photos.small} className={us.avatar} alt="#"/></div>
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
}*/



export default Users