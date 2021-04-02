import React from 'react';
import PostStyle from './Post.module.css'


function Post(props) {
	return (
		<div className={PostStyle.post}>
			<div className={PostStyle.useravatar}>

			</div>
			<div className={PostStyle.usertext}>
				{props.message}
			</div>
			<span>Like {props.likecounts}</span>
		</div>
	);
}
export default Post;