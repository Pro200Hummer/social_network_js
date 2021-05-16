import React from 'react';
import avatar from "../../../resources/images/user-avatar.png";
import ProfileInfoStyles from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        <div>
            <div>{props.profile.aboutMe}</div>
            <div>
                <img src={props.profile.photos.small ? props.profile.photos.small : avatar}
                     className={ProfileInfoStyles.avatar}
                />
            </div>
            <div>{props.profile.fullName}</div>
        </div>
    </div>
}
export default ProfileInfo