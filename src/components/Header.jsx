import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FcBusinessman } from "react-icons/fc";

function Header() {
  return (
    <div className="h-16 bg-header-color px-4 flex justify-between items-center ">
            <div className=" relative flex items-center">
                <HiOutlineSearch className="text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2"></HiOutlineSearch>
            <input type='text' placeholder="Search" className="text-sm focus:outline-none bg-header-color active:outline-none h-10 w-[24rem] border border-blue-300 rounded-full px-8"></input>
            </div>
            <div className="flex items-center gap-3">
                <HiOutlineChatAlt fontSize={24}></HiOutlineChatAlt>
                <HiOutlineBell  fontSize={24}></HiOutlineBell>
                <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-full py-1.5 px-3 h-10 w-10  font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        <FcBusinessman fontSize={24}/>
          
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-black 
          transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] 
          focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Your Profile
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">⌘A</kbd>
            </button>
          </MenuItem>
          </MenuItems>
       </Menu>
            </div>
            <div className="fixed top-24 w-52 text-right">
      
        </div>
   </div>
  )
}

export default Header