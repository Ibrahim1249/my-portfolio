import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './components/About'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'


function App() {
  const appRouter = createBrowserRouter([{
    path : "/",
    element : <Home/>,
    children : [
      {
         path : "/",
         element: <About />
      },
      {
        path : "resume",
        element : <Resume />
      },
      {
        path : "project",
        element : <Project />
      },
      {
         path : "contact",
         element : <Contact />
      }
    ],
    errorElement : <h1>Page Not Found , Check URL</h1>
  }]) 
  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  )
}

export default App