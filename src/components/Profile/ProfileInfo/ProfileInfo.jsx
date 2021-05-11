import React from 'react';
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
                <img src={props.profile.photos.small} alt="#" className={ProfileInfoStyles.avatar}/>
            </div>
            <div>{props.profile.fullName}</div>
        </div>
    </div>
}
export default ProfileInfo