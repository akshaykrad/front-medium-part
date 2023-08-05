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
	const [prevData , setPrevData] = useState([])
	const [page, setPage] = useState(1);

	//http://127.0.0.1:3000/articles (get)                 (DONE)(WORKING)
	//http://127.0.0.1:3000/users (get)                    (DONE)(WORKING)           
	//http://127.0.0.1:3000/articles/id/edit (put)         ()
	//http://127.0.0.1:3000/articles/new (post)            ()
	//http://127.0.0.1:3000/articles/id (delete method)    ()
	//http://127.0.0.1:3000/signup (post request)          ()
	//http://127.0.0.1:3000/users (post)                   ()
	//http://127.0.0.1:3000/users/id  (get)                (DONE)(WORKING)
	//http://127.0.0.1:3000/users/id  (delete)             ()
	//http://127.0.0.1:3000/login (post)                   ()
	//http://127.0.0.1:3000/logout (delete)                ()
	//http://127.0.0.1:3000/showArticle?id=1 (get)         (DONE)(WORKING)
	//http://127.0.0.1:3000/sortByLike (get)               (DONE)
	//http://127.0.0.1:3000/sortByComment (get)            (DONE)
	//http://127.0.0.1:3000/userSearch?s= (get)            (DONE)
	//http://127.0.0.1:3000/articleSearch?s= (get)         (DONE)
	//http://127.0.0.1:3000/topicSearch?s= (get)           (DONE)
	//http://127.0.0.1:3000/topArticles (get)              (DONE)
	//http://127.0.0.1:3000/similarArticles?id=5           (DONE)
	//http://127.0.0.1:3000/listTopic                      (DONE)

	
	


	useEffect(()=>{
		axios.get("http://127.0.0.1:3000/articles")
		.then((res)=>{
			setPostData(res.data)
		})
	},[])

	const getPostCardData = async () => {
		const res = await fetch("http://192.168.0.102:3000/articles");
		const data = await res.json();
		// append new data after old data 
		setPostData((prev) => [...prev, ...data]);
		// console.log(data)
	}

	// get data from hook
	useEffect(() => {
		getPostCardData();
	}, [page]);



	const navigate = useNavigate()

	const onSignIn = () =>{
		navigate('/signin')
	}
	const onSignUp = () =>{
		navigate('/signup')
	}


	const handleFilter = (query) =>{
		console.log(query)
		const filteredItems = postData.filter((item)=>{
			return (
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				item.description.toLowerCase().includes(query.toLowerCase())
			)}
		)
		setPostData(prev=>{
			setPrevData(prev)
			return(filteredItems)
		})

	}
	const handleReset = () =>{
		setPostData(prevData)
	}
	useEffect(() => {
		window.addEventListener("scroll", handleinfinitescroll);
	}, []);

	const handleinfinitescroll = async () => {
		try {
			if (window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.scrollHeight) {

				setPage((prev) => prev + 1); 
			}

		} catch (error) {
			console.log(error);
		}
	};

	
	useEffect(() => {
		window.addEventListener("scroll", handleinfinitescroll);
		return () => window.removeEventListener("scroll", handleinfinitescroll);
	}, []);
	

  return (
	<div className='m-2 '>
		<FeatureBox handleFilter={handleFilter} handleReset={handleReset}/>
		<PostList postData={postData} valid={props.valid}/>
	</div>
  )
}
