import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Page
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'

const router = createBrowserRouter([
  {
    path : "/",
    element : <LoginPage/>
  },
  {
    path : "register",
    element : <RegisterPage/>
  },
  {
    path : "dashboard",
    element : <MainLayout/>,
    children : [
      {
        index : "true",
        element : <HomePage/>
      },
      {
        path : "course",
        element : <CoursePage/>
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App
