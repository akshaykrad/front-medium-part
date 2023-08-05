import React from 'react'
import { Formik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UpdatePost() {
	const location = useLocation()
	const data = location.state.item
	console.log(data)

  return (
	<div className='container mt-4'>
		<h3>Update Post</h3>
		<Formik
			initialValues={{
				title:`${data.title}`,
				topic:`${data.topic}`,
				imageUrl:`${data.imageUrl}`,
				body:`${data.description}`,
				author:`${data.author}`,
				date: `${new Date(data.date)}`,
				id:`${data.id}`,
			}}
			onSubmit={(values ,{ resetForm })=>{
				// setPosts(prev =>{
				// 	return([...prev,values])
				// })
				const newObject = {title:values.title,description:values.body}
				axios.put(`http://127.0.0.1:3000/api/v1/articles/${values.id}/edit1`,newObject)
				.then((res)=>{
					console.log(res.data)
				})
				.catch((error) => {
					console.error('Error:', error);
				});
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
							value={values.body}
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
							value={values.author}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25`}
							placeholder='Author name'
							/>
					</div>
					<button className='btn btn-success mt-4' type='submit'>Update Post</button><br/>
				</form>




			)}
		</Formik>
		
	</div>
  )
}
