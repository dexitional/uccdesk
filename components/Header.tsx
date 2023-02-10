import Image from 'next/image'
import React from 'react'
import Logo from '/public/logo.png'
import { MdOutlineSearch } from 'react-icons/md'

function Header() {
  return (
    <div className="p-2 w-full flex h-[5rem] bg-white shadow-md shadow-gray-200/50">
        <div className="px-6 py-1 w-72 h-full flex items-center space-x-4">
            <div className="px-2 py-2 w-14 h-full bg-slate-100 rounded ">
                <Image
                   src={Logo}
                   alt="Logo"
                   className="w-10 h-10 object-contain"
                />
            </div>
            <div className="text-3xl text-slate-500/60 font-indie font-semibold">Helpdesk</div>
        </div>
        <div className="flex-1 h-full flex items-center justify-end bg-slate-50 rounded">
           <div></div>
           <div className="flex space-x-2">
              {/* Search box */}
              <div className="px-4 py-2 w-96 flex space-x-2 rounded bg-gray-100 border border-slate-500/80">
                 <MdOutlineSearch className="h-5 w-5 text-slate-500/80"/>
                 <span>Search FAQs</span>
              </div>
              {/* Login box */}
              <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">Sign Up</button>
           </div>
        </div>
    </div>
  )
}

export default Header