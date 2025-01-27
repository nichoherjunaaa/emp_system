import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// layouts
import MainLayout from './layouts/MainLayout'

// pages
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import BiodataPage from './pages/BiodataPage'
import PresensiPage from './pages/PresensiPage'
import LoginPage from './pages/LoginPage'
import InformasiPage from './pages/InformasiPage'
import AboutPage from './pages/AboutPage'
import KaryawanPage from './pages/KaryawanPage'

// store
import { store } from './store'

// action
import { action as LoginAction } from './pages/LoginPage'

// loader
import { loader as navLoader } from './components/NavList'

const router = createBrowserRouter([
  {
    path: '/system',
    element: <MainLayout />,
    loader: navLoader(store),
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
      },
      {
        path: 'informasi',
        element: <InformasiPage />,
      },
      {
        path: 'tentang',
        element: <AboutPage />,
      },
      {
        path: 'daftar',
        element: <KaryawanPage />
      }
    ],
  },
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
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