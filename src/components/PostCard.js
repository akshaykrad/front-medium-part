import React from 'react'

export default function PostCard(props) {
	const authorized = true
  return (
	<div>
		<div className="card w-75 m-4">
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.body}</p>
				<button className='btn btn-primary m-1'>Read More</button>
				{
					authorized &&
					<>
				<button className='btn btn-secondary m-1'>Edit</button>
				<button className='btn btn-danger m-1'>Delete</button>
					</>
				}
			</div>
		</div>
	</div>
  )
}
