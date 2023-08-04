// import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

export default function AddPost() {

	// const [posts,setPosts] = useState([])

	// useEffect(() => {
	// 	// Try to retrieve liked movies from localStorage when the component mounts
	// 	const storedPosts = localStorage.getItem('postArr');
	// 	if (storedPosts) {
	// 	  setPosts(JSON.parse(storedPosts));
	// 	}
	//   }, []);

	//   useEffect(() => {
	// 	// Update the localStorage whenever the likedMovies state changes
	// 	localStorage.setItem('postArr', JSON.stringify(posts));
	//   }, [posts]);

	//   const uuid = () =>{

	//   }


  return (
    <div className='container mt-4'>
		<h3>Add New Post</h3>
		{/* {console.log(posts)} */}
		<Formik
			initialValues={{
				title:'',
				topic:'',
				imageUrl:'',
				date: new Date(),
				id:Math.random().toString(16).slice(2),
			}}
			onSubmit={(values ,{ resetForm })=>{
				// setPosts(prev =>{
				// 	return([...prev,values])
				// })
				console.log(values)
			}}
		>
			{({
				handleBlur,
				handleChange,
				handleSubmit,
				values,
				touched,
				errors,
			})=>(
				<form noValidate onSubmit={handleSubmit}>
					<div className='mt-4'>
						<input 
							type='text'
							name='title'
							value={values.title}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25`}
							placeholder='Enter Title here'
						/>
					</div>
					<div className='mt-4 '>
						<input 
							type='text'
							name='topic'
							value={values.topic}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25`}
							placeholder='Enter your email'
							/>
					</div>
					<div className='mt-4 '>
						<input 
							type='text'
							name='imageUrl'
							value={values.imageUrl}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25`}
							placeholder='Enter Image url'
							/>
					</div>
					<div className='mt-4 '>
						<textarea
							type='text'
							name='content'
							value={values.content}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25`}
							placeholder='Enter Content'
							/>
					</div>
					<button className='btn btn-success mt-4' type='submit'>Add Post</button>
				</form>




			)}
		</Formik>
		
	</div>
  )
}
