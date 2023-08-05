// import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function AddPost() {



  return (
    <div className='container mt-4'>
		<h3>Add New Post</h3>
		<Formik
			initialValues={{
				title:'',
				topic:'',
				imageUrl:'',
				body:'',
				author:'',
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
					<div className='mt-4 '>
						<input
							type='text'
							name='author'
							value={values.content}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25`}
							placeholder='Author name'
							/>
					</div>
					<button className='btn btn-success mt-4' type='submit'>Add Post</button><br/>
				</form>




			)}
		</Formik>
		
	</div>
  )
}
