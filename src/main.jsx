import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DMtable from './components/DMTable.jsx'
import SEOtable from './components/SEOtable.jsx'
import WEBtable from './components/WEBtable.jsx'

const router = createBrowserRouter([{
  path:"/",
  element: <App />,
  children: [
    {
    path: "/digital-marketing-pricing",
    element: <DMtable />
    }, 
    {
      path: "/seo-pricing",
      element: <SEOtable />
    }, 
    {
      path: "/website-development-pricing",
      element: <WEBtable />
    } 
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
