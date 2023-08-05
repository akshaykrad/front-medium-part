import React, { useState } from 'react'


export default function FollowButton() {
        
    const [isFollowing, setIsFollowing] = useState(false);

	const handleFollowClick = () => {
		// Simulate API call to follow/unfollow action
		setIsFollowing((prevIsFollowing) => !prevIsFollowing)
	};

	return (
		<button
			className={`follow-button ${isFollowing ? 'following' : 'not-following'}`}
			onClick={handleFollowClick}
		>
			{isFollowing ? 'Following' : 'Follow'}
		</button>
	)
}