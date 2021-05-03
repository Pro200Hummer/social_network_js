import React from "react";
import us from './Users.module.css'
import axios from "axios";
import avatar from "../../resources/images/user-avatar.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(r => {
            console.log(r)
            this.props.setUsers(r.data.items.map(i => {
                if (i.photos.small === null) {
                    return {...i, photos: {...i.photos, small: avatar}}
                }
                return i
            }))
            this.props.setUsersCount(r.data.totalCount)
        })
    }

    pageNumberChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(r => {
            console.log(r)
            this.props.setUsers(r.data.items.map(i => {
                if (i.photos.small === null) {
                    return {...i, photos: {...i.photos, small: avatar}}
                }
                return i
            }))
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages = [...pages, i]
        }

        return <div>
            {
                pages.map((p, i) => {
                    return <span
                        key={i}
                        className={this.props.currentPage === p ? `${us.selected} ${us.pageNumber}` : `${us.pageNumber}`}
                        onClick={(e) => {this.pageNumberChanger(p)}}
                    >{p}|</span>
                })
            }
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