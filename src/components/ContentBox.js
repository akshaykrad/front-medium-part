import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FeatureBox from './FeatureBox'
import './PostCard.css'
import NavBar from './NavBar'
import PostList from './PostList'


export default function ContentBox(props) {

	const [postData , setPostData] = useState([])

	//http://127.0.0.1:3000/api/v1/articles (get)
	//http://127.0.0.1:3000/api/v1/users (get)
	//http://127.0.0.1:3000/api/v1/articles/id/edit (put)
	//http://127.0.0.1:3000/api/v1/articles/new (post)
	//http://127.0.0.1:3000/api/v1/articles/id (delete method)
	//http://127.0.0.1:3000/api/v1/signup (post request)
	//http://127.0.0.1:3000/api/v1/users (post)
	//http://127.0.0.1:3000/api/v1/users/id  (get)
	//http://127.0.0.1:3000/api/v1/users/id  (delete)
	//http://127.0.0.1:3000/api/v1/login (post)
	//http://127.0.0.1:3000/api/v1/logout (delete)


	// useEffect(()=>{
	// 	axios.get("http://127.0.0.1:3000/api/v1/articles")
	// 	.then((res)=>{
	// 		setPostData(res.data)
	// 		console.log(res.data)
	// 	})
	// },[])


	const navigate = useNavigate()

	const onSignIn = () =>{
		navigate('/signin')
	}
	const onSignUp = () =>{
		navigate('/signup')
	}

	const postDataa = [
		{id:0,title:'This is some food',body:'This is its body',author:'akshay',topic:'cricket',date:'5 Jun 2023'},
		{id:1,title:'This is some apples',body:'This is banana',author:'abhishek',topic:'education',date:'7 Jun 2023'},
		{id:2,title:'This is some title',body:'This is its boy',author:'adhana',topic:'cricket',date:'15 Mar 2023'},
		{id:3,title:'This is some title',body:'This is its body',author:'akshay',topic:'cricket',date:'23 Aug 2022'},
	]

	const handleFilter = (query) =>{
		console.log(query)
		const filteredItems = postDataa.filter((item)=>{
			return (
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				item.body.toLowerCase().includes(query.toLowerCase())
			)}
		)
		setPostData(filteredItems)
	}
	

  return (
	<div className='m-2 '>
		<FeatureBox handleFilter={handleFilter}/>
		<PostList postDataa={postDataa} valid={props.valid}/>
	</div>
  )
}
