import React from 'react'
import { useLocation } from 'react-router-dom'
import './PostCard.css'

export default function ReadMore() {

	const location = useLocation()
	const data = location.state
  return (
	<div className='container w-50 mt-4'>
		<span className='tags'>{data.item.topic}</span>
		<h2 className='title'>{data.item.title}</h2>
		<h5>Author: {data.item.author} </h5>
		<div className='d-flex justify-content-between mb-2'>
			<span>{data.item.date}</span>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
		</div>
		<img width='100%' height='470px' src='https://miro.medium.com/v2/resize:fit:875/1*r5coQ_IUZNe0yjOH7vq_6w.jpeg'/>
		<p className='mt-2'>{data.item.description}</p>
		{/* <button className='btn m-1 btn-primary'>Edit</button>
		<button className='btn m-1 btn-primary'>Delete</button> */}
	</div>
  )
}
