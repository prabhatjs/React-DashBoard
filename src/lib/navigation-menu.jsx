import { HiOutlineViewGridAdd } from "react-icons/hi";
import { HiOutlineCube } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiMiniUserCircle } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineCog } from "react-icons/hi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
export const SideBar_Menu=[
    {
        key:'Dashboard',
        label:'Dashboard',
        path:'/',
        icon:<HiOutlineViewGridAdd />
    },
    {
        key:'Products',
        label:'Products',
        path:'/products',
        icon:<HiOutlineCube />
    },
    {
        key:'Orders',
        label:'Orders',
        path:'/orders',
        icon:<HiOutlineShoppingCart/>
    },
    {
        key:'Customers',
        label:"Customers",
        path:'/customers',
        icon:<HiMiniUserCircle/>
    },
    {
        key:'Transaction',
        label:"Transaction",
        path:'/transaction',
        icon:<HiOutlineDocumentText/>
    },
    {
        key:'Message',
        label:"Message",
        path:'/message',
        icon:<HiOutlineDocumentText/>
    }
]

export const Bottom_LinkSideBar=[{
    
        key:'setting',
        label:"Setting",
        path:'/setting',
        icon:<HiOutlineCog/>
    },
    {
        key:'Support',
        label:"Support",
        path:'/support',
        icon:<HiOutlineQuestionMarkCircle/>
        
    }
]