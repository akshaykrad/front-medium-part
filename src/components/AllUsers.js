import React, { useEffect, useState } from 'react'
import UsersCard from './UsersCard'
import axios from 'axios'

export default function AllUsers() {

	const [data,setData] = useState([])

	useEffect(()=>{
		axios.get("http://127.0.0.1:3000/users")
		.then((res)=>{
			setData(res.data)
		})
	},[])


  return (
	<div>
		<h1 className='mx-4 mt-2'>All Users</h1>
		{
			data.map((item)=>{
				return <UsersCard item={item} />
			})
		}
	</div>
  )
}
