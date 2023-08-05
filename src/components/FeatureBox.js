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

  return (
	<div className='ms-4'>
		<label>Filter</label>
		<input value={ftext} onChange={handleFtext}/>
		<button className='m-1' onClick={findClick}>Find</button>
	</div>
  )
}
