import React from 'react';
import ProfileStyles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




function Profile(props) {
debugger
    return (
        <div className={ProfileStyles.profile}>
            <div className={ProfileStyles.image}>
                <img src="https://img1.liveinternet.ru/images/attach/c/8/100/815/100815377________20120830_1918196980.jpg"/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;