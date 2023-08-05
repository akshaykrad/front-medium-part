import { Formik } from 'formik'
import React from 'react'
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SignUp() {

	const navigate = useNavigate();

	const home = () =>{
		navigate("/")
	}	
	const signIn = () =>{
		navigate("/signin")
	}	

	const SignUpSchema = yup.object().shape({
		name:yup.string().required('Name is required'),
		email:yup.string().email('Enter a valid email id').required('Email is required'),
		password:yup.string().required('Password is required'),
		cPassword:yup.string().oneOf([yup.ref('password')],'Passwords do not match').required('Confirm password is required'),
	})
  return (
	
	<div className='container mt-4'>
		<button className='btn mb-4 btn-info'onClick={home}>Home</button>
		<button className='btn ms-2 mb-4 btn-info'onClick={signIn}>Sign In</button>
		<h3>Sign Up</h3>
		<Formik
			initialValues={{
				name:'',
				email:'',
				password:'',
				cPassword:'',
			}}
			validationSchema={SignUpSchema}
			onSubmit={(values ,{ resetForm })=>{
				console.log(values.email);
				const newObject = {name:values.name,email:values.email,password:values.password}
				// resetForm();
				axios.post("http://127.0.0.1:3000/api/v1/signup",newObject)
				.then((res)=>{
					console.log(res.data)
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
					<div className='mt-4'>
						<input 
							type='text'
							name='name'
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25 ${touched.name && !!errors.name && "border border-danger"}`}
							placeholder='Enter your name'
						/>
						{touched.name && !!errors.name && (
							<span className="fs-6 text-danger">{errors.name}</span>
							)}
					</div>
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
					<div className='mt-4'>
						<input 
							type='text'
							name='cPassword'
							value={values.cPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`form-control input-sm w-25 ${touched.cPassword && !!errors.cPassword && "border border-danger"}`}
							placeholder='Confirm Password'
						/>
						{touched.cPassword && !!errors.cPassword && (
							<span className="fs-6 text-danger">{errors.cPassword}</span>
							)}
					</div>
					<button className='btn btn-primary mt-4' type='submit'>SignUp</button>
					<button className='btn btn-danger mx-2 mt-4' type='reset'>Reset</button>
				</form>




			)}
		</Formik>
		
		
	</div>
  )
}
