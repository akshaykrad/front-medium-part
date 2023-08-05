import React, { useEffect, useState } from 'react'
import ContentBox from './ContentBox'
import './PostCard.css'
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'
import PostList from './PostList'
import axios from 'axios'
import './Profile.css'

export default function Profile() {

	const [postData,setPostData] = useState([])

	const location = useLocation()
	const data = location.state.obj
	// console.log(data)
	

	useEffect(()=>{
		axios.get(`http://127.0.0.1:3000/showArticle?id=${data.id}`)
		.then((res)=>{
			setPostData(res.data)
			// console.log(res.data)

		})
	},[])

  return (
  <>
	<NavBar />
	<div className='profile'>
		<img className='mt-4 ms-4' src='user.png' width='150px' height='150px'/>
		<div className='ms-4 mt-2'>
			<h1 className='fw-bold'>{data.username}</h1>
			<div><span className='text-primary'>Email:</span>{data.email}</div>
			<div><span className='text-primary'>Aricles Published:</span>200</div>
			<div><span className='text-primary'>Joined at:</span> {data.created_at}</div>
		</div>
	</div>
	<h2 className='ms-4 fw-bold mb-2 mt-5'>All articles by you</h2>
	{/* <ContentBox valid={true}/> */}
	<PostList postData={postData} valid={true}/>
  </>
  )
}
