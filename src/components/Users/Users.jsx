import React from "react";
import us from "./Users.module.css";


const Users = (props) => {

    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        followClick,
        unfollowClick,
        pageNumberChanger,
    } = props

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages = [...pages, i]
    }

    return (
        <div>
            {
                pages.map((p, i) => {
                    return <span
                        key={i}
                        className={currentPage === p ? `${us.selected} ${us.pageNumber}` : `${us.pageNumber}`}
                        onClick={(e) => {
                            pageNumberChanger(p)
                        }}
                    >{p}|</span>
                })
            }
            {
                users.map(u => {
                        const followClickHandler = () => {
                            followClick(u.id)
                        }
                        const unFollowClickHandler = () => {
                            unfollowClick(u.id)
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
    )
}

export default Users