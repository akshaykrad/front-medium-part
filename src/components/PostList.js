import React from 'react'
import PostCard from './PostCard'
import { useNavigate } from 'react-router-dom'

export default function PostList(props) {

	const navigate = useNavigate()
	

	
	
	
	const handleReadMore = (e) =>{
		console.log(e)
		const item = props.postData[e]
		navigate(`/readmore/${e}`,{state:{ item }})
	}

  return (
	<div>

		{
			props.postData.map((data)=>{
				return(
					<PostCard data={data} handleReadMore={handleReadMore} valid={props.valid}/>
				)
			})
		}
	</div>
  )
}
