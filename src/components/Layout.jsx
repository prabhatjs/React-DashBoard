import { Outlet } from "react-router-dom"
import SIdeBar from "./SIdeBar"
import Header from "./Header"


function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <SIdeBar/>
        <div className="flex flex-col flex-1">
       <Header/>
        <div className="flex flex-1 p-4 min-h-0 overflow-auto">
        {<Outlet/>}
    </div>
    </div>
    </div>
  )
}

export default Layout