import { Image, PencilRuler, Shield } from 'lucide-react'
import React, { useState } from 'react'

const SideNav = ({selectedIndex}) => {
   const menuList = [
    {
       id:1,
       name:'Icon',
       icon:PencilRuler
  },
  {
    id:2,
    name:'Background',
    icon:Image
},
{
  id:3,
  name:'Upgrade',
  icon:Shield
}
];

const [activeIndex,setActiveIndex] = useState(0);

  return (
    <div className='w-64 fixed border shadow-sm h-screen'>
            <div>
              {menuList.map((menu,index)=>(
                <h2 
                onClick={()=> {setActiveIndex(index)
                  selectedIndex(index)}}
                className={`p-2 text-lg px-7 text-white-500 my-2 cursor-pointer flex items-center gap-2 hover:bg-blue-700 hover:text-white
                 ${activeIndex==index &&'bg-blue-700 text-white' }
                `}
                key={index}>
                  <menu.icon/>
                  {menu.name}</h2>
              ))}
            </div>
      </div>
  )
}

export default SideNav