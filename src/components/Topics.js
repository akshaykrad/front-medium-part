import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

export default function Topics() {

	const [topicData, setTopicData] = useState([])

	useEffect(()=>{
		axios.get("http://127.0.0.1:3000/listTopic")
		.then((res)=>{
			setTopicData(res.data)
			console.log(res.data)
		})
	},[])


  return (
	<>
	<NavBar />
		<div className='border border-success m-2 text-center'>
			<h1 className='fw-bold'>Topics</h1>
			{
				topicData.map((item)=>{
					return (
						<div className='m-5'>
							<span className='bg-secondary border rounded p-3'>{item}</span>
						</div>
						)
					})
			}
		</div>
	</>
  )
}
