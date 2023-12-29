import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import SEOtable from './components/SEOtable.jsx'
import WEBtable from './components/WEBtable.jsx'
import DMtable from './components/DigitalMarketingTable.jsx'
import Services from './components/Services.jsx'

const router = createBrowserRouter([{
  path:"/",
  element: <App />,
  children: [
    {
    path: "/digital-marketing-package",
    element: <DMtable />
    },
    {
      path: "/seo-package",
      element: <SEOtable />
    },
    {
      path: "/website-development-package",
      element: <WEBtable />
    },
    {
      path: "/all-packages",
      element: <Services />
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
