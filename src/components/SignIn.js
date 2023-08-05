import { Formik } from 'formik'
import React from 'react'
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SignIn() {

	const navigate = useNavigate();

	const home = () =>{
		navigate('/')
	}
	const signUp = () =>{
		navigate('/signup')
	}

	const SignInSchema = yup.object().shape({
		email:yup.string().email('Enter a valid email id').required('Email is required'),
		password:yup.string().required('Password is required'),
	})

  return (
	<div className='container mt-4'>
		<button className='btn mb-4 btn-info'onClick={home}>Home</button>
		<button className='btn ms-2 mb-4 btn-info'onClick={signUp}>Sign Up</button>
		<h3>Sign In</h3>
		<Formik
			initialValues={{
				email:'',
				password:'',
			}}
			validationSchema={SignInSchema}
			onSubmit={(values ,{ resetForm })=>{
				console.log(values);
				// resetForm();
				const newObject = {username:'akshay',password:values.password}
				axios.post("http://127.0.0.1:3000/api/v1/login",newObject)
				.then((res)=>{
					console.log(res.data)
				}).catch((err)=>{
					console.log(err)
				})
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
					<div className='mt-4 '>
						<input 
							type='text'
							name='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25 ${touched.email && !!errors.email && "border border-danger"}`}
							placeholder='Enter your email'
							/>
						{touched.email && !!errors.email && (
							<span className="fs-6 text-danger">{errors.email}</span>
							)}
					</div>
					<div className='mt-4'>
						<input 
							type='text'
							name='password'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25 ${touched.password && !!errors.password && "border border-danger"}`}
							placeholder='Password'
							/>
						{touched.password && !!errors.password && (
							<span className="fs-6 text-danger">{errors.password}</span>
							)}
					</div>
					<button className='btn btn-primary mt-4' type='submit'>SignIn</button>
					<button className='btn btn-danger mx-2 mt-4' type='reset'>Reset</button>
				</form>
			)}
		</Formik>
	</div>
  )
}
