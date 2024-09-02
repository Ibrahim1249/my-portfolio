import { Outlet } from "react-router-dom"
import Aside from "./components/Aside"
import Navbar from "./components/Navbar"

function Home() {
  return (
     <main>
       <Aside />
        <div className="main-content">
           <Navbar />
           <Outlet />
        </div>
     </main>
  )
}

export default Home