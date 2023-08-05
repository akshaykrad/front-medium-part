import React, { useState } from 'react'
import './PostCard.css'

export default function FeatureBox(props) {

	const [ftext,setFtext] = useState('')

	const findClick = () =>{
		props.handleFilter(ftext)
	}

	const handleFtext = (e) =>{
		setFtext(e.target.value)
	}
	const reset = () =>{
		props.handleReset()
	}



  return (
	<div className='ms-4'>
		<label>Filter</label>
		<input value={ftext} onChange={handleFtext}/>
		<button className='m-1 btn border border-primary' onClick={findClick}>Find</button>
		<button className='m-1 btn border border-primary' onClick={reset}>Reset</button>
		<br />
		<label>Sort by </label>
		<button className='btn m-1 border border-primary' onClick={props.sortbyLikes}>Likes</button>
		<button className='btn m-1 border border-primary' onClick={props.sortbyComments}>Comment</button>
	</div>
  )
}
