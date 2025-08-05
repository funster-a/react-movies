import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './reset.css'
import './index.css'
import Homepage from './pages/Home.tsx'
import Loginpage from './pages/Login.tsx'
import Movie from './pages/Movie.tsx'
import MoviesShowspage from './pages/MoviesShowspage.tsx'
import Show from './pages/Shows.tsx'
import Subscriptionpage from './pages/Subscription.tsx'
import Supportpage from './pages/Support.tsx'

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
    path: '/movie/:id',
    element: <Movie />
  },
  {
    path: '/moviesshows',
    element: <MoviesShowspage />
  },
  {
    path: '/show/:id',
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
