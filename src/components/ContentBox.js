import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'


export default function ContentBox() {

	// const [postData , setPostData] = useState([])


	// useEffect(()=>{
	// 	axios.get("https://jsonplaceholder.typicode.com/posts")
	// 	.then((res)=>{
	// 		setPostData(res.data)
	// 	})
	// },[])
	const postData = [
		{title:'This is some title',body:'This is its body'},
		{title:'This is some title',body:'This is its body'},
		{title:'This is some title',body:'This is its body'},
		{title:'This is some title',body:'This is its body'},
	]


  return (
	<div>
		{
			postData.map((data)=>{
				return(
					<PostCard title={data.title} body={data.body}/>
				)
			})
			
		}
	</div>
  )
}
