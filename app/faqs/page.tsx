import Image from 'next/image'
import React from 'react'
import { MdOutlineAlternateEmail,MdPhone,MdLocationPin,MdFreeBreakfast,MdOutlineAccessTime,MdCalendarToday,MdScreenSearchDesktop } from 'react-icons/md'
import { FcDocument,FcQuestions } from 'react-icons/fc'
import Adinkra from '../../public/adinkra.png'

function Page() {
  return (
    <div className="h-screen px-4 bg-slate-100">
    <div className="relative my-4 h-28 w-full bg-gradient-to-r from-blue-900 to-[#273775] rounded-lg">
        <Image src={Adinkra} alt="" className="z-10 absolute w-full h-28 object-cover rounded-lg" />
        <div className="z-20 h-full flex space-y-1 flex-col items-center justify-center">
            <h1 className="text-3xl text-yellow-300 font-bold">Frequently Asked Questions</h1>
            <p className="font-medium text-white">Help from support articles  and documentations.</p>
        </div>
    </div>
                 
    <div className="w-full bg-slate-100">
       <div className="flex flex-col space-y-2">
          <div className="p-4 flex space-x-3 bg-white border border-slate-200 rounded-lg shadow-lg shadow-[#273775]/10">
             <FcQuestions className="h-7 w-7" />
             <div className="flex flex-col space-y-0.5">
               <span className="text-yellow-500 text-xs font-bold">QUESTION</span>
                <h1 className="text-md font-medium text-[#273775]">Student Portal</h1>
                <div className="text-gray-800 font-xs italic hidden">How to Reset Student Portal Password</div>
             </div>
          </div>
          
       </div>
    </div>
    </div>
  )
}

export default Page