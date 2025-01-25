import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import './App.css'
import BiodataPage from './pages/BiodataPage'
import PresensiPage from './pages/PresensiPage'
import LoginPage from './pages/LoginPage'
import { store } from './store'

import { action as LoginAction } from './pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/system',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'biodata',
        element: <BiodataPage />,
      },
      {
        path: 'presensi',
        element: <PresensiPage />,
      }
    ],
  },
  {
    path: '/',
    element: <LoginPage />,
    action: LoginAction(store)
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
      {/* Your app's children components */}
    </RouterProvider>
  )
}

export default App