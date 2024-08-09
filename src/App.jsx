import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout';
import About from './about/About';
import Home from './home/Home';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio';
function App() {
  const myrouter = createBrowserRouter([{
    path: "/", element: <Layout />, children: [
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/home", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "*", element: <Home /> },
      { index:true, element: <Home /> }
    ]
  }])
  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  )
}
export default App

