/* eslint-disable react/prop-types */
import { FcParallelTasks } from "react-icons/fc";
import { Bottom_LinkSideBar, SideBar_Menu } from "../lib/navigation-menu";
import { Link, useLocation } from "react-router-dom";
function SIdeBar() {
  return (
    <div className="flex flex-col bg-sidbar-color w-60 p-4 text-yellow-50">
        <div className=" flex flex-row items-center gap-2 px-1 py-3">
        <FcParallelTasks />
        <h3 className="text-white">3amcodes</h3>
        </div>
        <div className="flex-1 py-8 flex-col gap-2 ">
            {
                SideBar_Menu.map((item,key)=>(
               <SideBarLink key={key} item={item}></SideBarLink>
                ))
            }
        </div>
        <div >
            {
            Bottom_LinkSideBar.map((item,key)=>(
                <SideBarLink key={key} item={item} />
            ))
            }</div>
    </div>
  )
}

function SideBarLink({item}){
    const {pathname}=useLocation();
    return(
        <Link to={item.path} className={`flex gap-2 items-center px-1 py-3 ${pathname===item.path ? "text-black" :"text-white"} hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base`}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default SIdeBar;