import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createHashRouter } from 'react-router-dom'

const ZoomRedirect = () => {
    window.location.href = 'https://upenn.zoom.us/j/8111458210'
    return null
}

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/zoom",
        element: <ZoomRedirect />,
    }
])

createRoot(document.getElementById("root") as Element).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
