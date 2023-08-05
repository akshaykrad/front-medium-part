import React from 'react'
import { useNavigate } from 'react-router-dom'
import './UserCard.css'

export default function UsersCard(props) {

	const navigate = useNavigate()

	const gotoprofile =()=>{
		const obj = props.item
		navigate(`/profile/${props.item.id}`,{state:{obj}})
	}



  return (
	<div className='container d-flex border border-primary mt-3' onClick={gotoprofile}>
		{/* <div className='border border-danger' style={{borderRadius: '8px'}}>Image</div> */}
		<div  className='d-flex align-items-center'>
			<img src='user.png' style={{width:'50px',height:'50px'}}></img>

		</div>
		<div className='px-3 py-1'>
			<div><span className='text-primary'>Username:</span>{props.item.username}</div>
			<div><span className='text-primary'>Email:</span>{props.item.email}</div>
			<div><span className='text-primary'>Aricles Published:</span>200</div>
			<div><span className='text-primary'>Joined at:</span>{props.item.created_at}</div>
		</div>
	</div>
  )
}
