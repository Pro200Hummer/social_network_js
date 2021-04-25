import React from 'react';
import ps from './MyPosts.module.css'
import Post from './Posts/Post';


function MyPosts(props) {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.post} likecounts={p.likeCounts}/>)

    const addPost = () => {
        props.addNewPost()
    }
    const updateNewPostText = (e) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={ps.action}>
            <div className={ps.title}>My posts</div>
            <div>
                <textarea
                    onChange={updateNewPostText}
                    value={props.profilePage.newPostText}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
}

export default MyPosts;