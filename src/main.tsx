import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Homepage from './pages/Homepage.tsx'
import Loginpage from './pages/Loginpage.tsx'
import MoviesOpenpage from './pages/MoviesOpenpage.tsx'
import MoviesShowspage from './pages/MoviesShowspage.tsx'
import ShowsOpenpage from './pages/ShowsOpenpage.tsx'
import Subcriptionpage from './pages/Subcriptionpage.tsx'
import Supportpage from './pages/Supportpage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/login',
    element: <Loginpage />
  },
  {
    path: '/moviesopen',
    element: <MoviesOpenpage />
  },
  {
    path: '/moviesshows',
    element: <MoviesShowspage />
  },
  {
    path: '/showsopen',
    element: <ShowsOpenpage />
  },
  {
    path: '/subscription',
    element: <Subcriptionpage />
  },
  {
    path: '/support',
    element: <Supportpage />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
