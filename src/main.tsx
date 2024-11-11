import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage.tsx'
import Loginpage from './pages/Loginpage.tsx'
import Movie from './pages/Movie.tsx'
import MoviesShowspage from './pages/MoviesShowspage.tsx'
import Show from './pages/Show.tsx'
import Subscriptionpage from './pages/Subscriptionpage.tsx'
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
    path: '/movieId',
    element: <Movie />
  },
  {
    path: '/moviesshows',
    element: <MoviesShowspage />
  },
  {
    path: '/showId',
    element: <Show />
  },
  {
    path: '/subscription',
    element: <Subscriptionpage />
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
