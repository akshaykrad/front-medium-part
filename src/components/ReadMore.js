import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './PostCard.css'
import axios from 'axios'
import PostList from './PostList'

export default function ReadMore() {

	const location = useLocation()
	const data = location.state

	const [topData , setTopData] = useState([])
	const [simData, setSimData] = useState([])

	const navigate = useNavigate()



	useEffect(()=>{
		axios.get("http://127.0.0.1:3000/topArticles")
		.then((res)=>{
			setTopData([res.data[0],res.data[1],res.data[2] ])
			// console.log(res.data)
		})
	},[])
	useEffect(()=>{
		axios.get(`http://127.0.0.1:3000/similarArticles?id=${data.item.id}`)
		.then((res)=>{
			setSimData([res.data[0],res.data[1],res.data[2] ])
		})
	},[])

  return (
	<div className='container w-50 mt-4'>
		<span className='tags'>{data.item.topic}</span>
		<h2 className='title'>{data.item.title}</h2>
		
		<h5>Author: {data.item.user_id}</h5>
		<div className='d-flex justify-content-between mb-2'>
			<span>{new Date(data.item.created_at).toDateString()}</span>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
		</div>
		<img width='100%' height='470px' src='https://miro.medium.com/v2/resize:fit:875/1*r5coQ_IUZNe0yjOH7vq_6w.jpeg'/>
		<p className='mt-2'>{data.item.description}</p>
		<h2 className='fw-bold'>Similar Articles</h2>
		<PostList postData={simData}/>
		<h2 className='fw-bold'>Top Articles</h2>
		<PostList postData={topData}></PostList>
	</div>
  )
}
