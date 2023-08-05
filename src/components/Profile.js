import React from 'react'
import ContentBox from './ContentBox'
import './PostCard.css'
import NavBar from './NavBar'

export default function Profile() {
  return (
  <>
	<NavBar />
	<div className='profile'>
		<img className='mt-4 ms-4' src='user.png' width='150px' height='150px'/>
		<div className='ms-4 mt-2'>
			<h1 className='fw-bold'>Akshay_Kumar</h1>
			<div><span className='text-primary'>Email:</span>wewill@win</div>
			<div><span className='text-primary'>Aricles Published:</span>200</div>
			<div><span className='text-primary'>Joined at:</span> Already working</div>
		</div>
	</div>
	<h2 className='ms-4 fw-bold mb-2 mt-5'>All articles by you</h2>
	<ContentBox valid={true}/>
  </>
  )
}
