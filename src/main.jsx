import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import BookInfo from './components/BookInfo';
import Spinner from './components/Spinner';
import ErrorPage from './components/ErrorPage';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'books',
        element:<Books/>,
        loader:()=>fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'bookinfo/:id',
        element:<BookInfo />,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'loader',
        element:<Spinner/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
