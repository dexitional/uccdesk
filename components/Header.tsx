import Image from 'next/image'
import React from 'react'
import Logo from '/public/logo.png'
import { MdOutlineSearch } from 'react-icons/md'
import Link from 'next/link'

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
        <div className="px-6 flex-1 h-full flex items-center space-x-10 justify-end bg-slate-50/50 rounded">
           <div className="flex space-x-8 font-semibold text-gray-500">
               <Link href="">Home</Link>
               <Link href="/tutorials" className="cursor-pointer">Tutorials</Link>
               <Link href="/faq" className="cursor-pointer">FAQs</Link>
               <Link href="/blog" className="cursor-pointer">Blog</Link>
               <Link href="/ticket/status" className="cursor-pointer">Check Ticket Status</Link>
           </div>
           <div className="flex space-x-2">
              {/* Search box */}
              <div className="px-3 py-2 w-96 flex items-center space-x-3 rounded bg-slate-200/70 border border-slate-500/80">
                 <MdOutlineSearch className="h-5 w-5 "/>
                 <span className="text-sm">Search FAQ and Content ...</span>
              </div>
              {/* Login box */}
              <Link href="/ticket/apply" className="px-5 py-2 rounded bg-[#273775] text-yellow-300 font-medium">Open a New Ticket</Link>
           </div>
        </div>
    </div>
  )
}

export default Header