import React from 'react'

export default function UsersCard() {
  return (
	<div className='container d-flex border border-primary mt-3'>
		{/* <div className='border border-danger' style={{borderRadius: '8px'}}>Image</div> */}
		<div  className='d-flex align-items-center'>
			<img src='user.png' style={{width:'50px',height:'50px'}}></img>

		</div>
		<div className='px-3 py-1'>
			<div><span className='text-primary'>Username:</span>Akshay_Kumar</div>
			<div><span className='text-primary'>Email:</span>wewill@win</div>
			<div><span className='text-primary'>Aricles Published:</span>200</div>
			<div><span className='text-primary'>Joined at:</span> Already working</div>
		</div>
	</div>
  )
}
