import React, {MouseEvent} from "react";
import us from "./Users.module.css";
import avatar from "../../resources/images/user-avatar.png";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        isLoading,
        followingChanger,
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
                        onClick={() => {
                            pageNumberChanger(p)
                        }}
                    >{p}|</span>
                })
            }
            {
                isLoading ?
                    <Preloader/> :
                    users.map(u => {
                            const followClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
                                followingChanger(u.id, e.currentTarget.dataset.following)
                            }
                            const unFollowClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
                                followingChanger(u.id, e.currentTarget.dataset.following)
                            }

                            const button = u.followed ?
                                <button onClick={unFollowClickHandler} data-following="unfollow">Unfollow</button> :
                                <button onClick={followClickHandler} data-following="follow">Follow</button>

                            const following = u.followed ?
                                <div>You are subscribed</div> :
                                <div>You are not subscribed</div>

                            return <div key={u.id}>
                                <div>
                                    <NavLink to={"/profile/" + u.id}>
                                        <img
                                            src={u.photos.small ? u.photos.small : avatar}
                                            className={us.avatar} alt="#"
                                        />
                                    </NavLink>

                                </div>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    {following}
                                    {button}
                                </div>
                            </div>
                        }
                    )
            }
        </div>
    )
}

export default Users