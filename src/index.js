import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn';
import ContentBox from './components/ContentBox';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import AddPost from './components/AddPost';
import ReadMore from './components/ReadMore';
import NavBar from './components/NavBar';
import UpdatePost from './components/UpdatePost';
import AllUsers from './components/AllUsers';
import RecommendedPosts from './components/RecommendedPosts';
import SimilarAuthor from './components/SimilarAuthor';
import Topics from './components/Topics';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <NavBar />
    <ContentBox valid={false}/>
    </>,
  },
  { 
    path: "/signin",
    element: <SignIn /> 
  },
  { 
    path: "/signup",
    element: <SignUp /> 
  },
  { 
    path: "/profile/:id",
    element: <Profile /> 
  },
  {
    path:'/readmore/:id',
    element:<ReadMore />
  },
  {
    path:'/addPost',
    element:<AddPost />
  },
  {
    path:'/editPost/:id',
    element:<UpdatePost />
  },
  {
    path:'/allusers',
    element:<AllUsers />
  },
  {
    path:'/recom',
    element:<RecommendedPosts />
  },
  {
    path:'/recom',
    element:<SimilarAuthor />
  },
  {
    path:'/alltopics',
    element:<Topics />
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
