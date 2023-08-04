import { Formik } from 'formik'
import React from 'react'
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";

export default function SignIn() {

	// const navigate = useNavigate();

	const signUpBtn = () =>{
		// navigate('/signup')
	}

	const SignInSchema = yup.object().shape({
		email:yup.string().email('Enter a valid email id').required('Email is required'),
		password:yup.string().required('Password is required'),
	})

  return (
	<div className='container mt-4'>
		<h3>Sign In</h3>
		<Formik
			initialValues={{
				email:'',
				password:'',
			}}
			validationSchema={SignInSchema}
			onSubmit={(values ,{ resetForm })=>{
				console.log(values);
				resetForm();
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
		<button className='btn mt-4 btn-success'onClick={signUpBtn}>Go to Sign Up Page</button>
	</div>
  )
}
