import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './index.tsx'
import '~/lib/dark-mode.ts'
import 'virtual:uno.css'
import { HelmetProvider } from 'react-helmet-async'
import '~/lib/locales'
import Home from "~/pages/Home.tsx";

const router = createBrowserRouter([
    {
        path: '/resume',
        element: <Main />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>,
)
