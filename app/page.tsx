import Image from 'next/image'
import React from 'react'
import { MdOutlineAlternateEmail,MdPhone,MdLocationPin,MdFreeBreakfast,MdOutlineAccessTime,MdCalendarToday,MdScreenSearchDesktop } from 'react-icons/md'
import Adinkra from '../public/adinkra.png'

function Page() {
  return (
    <div className="h-screen px-4 bg-slate-100">
    <div className="relative my-4 h-56 w-full bg-gradient-to-r from-blue-900 to-[#273775] rounded-lg">
        <Image src={Adinkra} alt="" className="z-10 absolute w-full h-56 object-cover rounded-lg" />
        <div className="z-20 h-full flex space-y-2 flex-col items-center justify-center">
            <h1 className="text-3xl text-white font-bold">How can we help you?</h1>
            <p className="font-medium text-white">Search for help from support articles, documentations and tutorials.</p>
            <div className="px-4 py-1 w-96 mx-auto bg-white flex items-center space-x-3 rounded-md border-4 border-yellow-400 overflow-hidden">
                <MdScreenSearchDesktop className="h-8 w-8 text-[#273775]" />
                <input  className="z-20 flex-1 bg-transparent border-none focus:ring-0 font-semibold text-[#273775] placeholder:text-[#273775]" type="search" placeholder="Search the help center" />
            </div>
        </div>
    </div>
                 
    <div className="w-full bg-slate-100">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-1/3">
              {/* Email & Phone */}
              <div className="p-4 w-full min-h-48 flex flex-col space-y-2 rounded bg-white border border-slate-300 shadow hover:shadow-xl shadow-blue-100 transition ease-in-out duration-150">
                 <h1 className="text-md text-blue-900 font-semibold">Email and Phone</h1>
                 <div className="flex items-center space-x-3">
                    <MdOutlineAlternateEmail className="h-4 w-4 text-blue-900"/>
                    <span>helpdesk@ucc.edu.gh</span>
                </div>
                <div className="flex items-center space-x-3">
                    <MdPhone className="h-4 w-4 text-blue-900"/>
                    <span>+233 (0) 244680840</span>
                </div>
              </div>

              {/* Face-to-Face support */}
              <div className="p-4 w-full min-h-48 flex flex-col space-y-2 rounded bg-white border border-slate-300 shadow hover:shadow-xl shadow-blue-100 transition ease-in-out duration-150">
                 <h1 className="text-md text-blue-900 font-semibold">Face-to-Face Support</h1>
                 <div className="flex items-center space-x-3">
                    <MdLocationPin className="h-4 w-4 text-blue-900"/>
                    <span>Visit the Basement, Main Library Building</span>
                </div>
                <div className="flex items-center space-x-3">
                    <MdFreeBreakfast className="h-4 w-4 text-blue-900"/>
                    <span>Lunch Break: 1230-1330 GMT</span>
                </div>
              </div>

              {/* Service hours */}
              <div className="p-4 w-full min-h-48 flex flex-col space-y-2 rounded bg-white border border-slate-300 shadow hover:shadow-xl shadow-blue-100 transition ease-in-out duration-150">
                 <h1 className="text-md text-blue-900 font-semibold">Service Hours</h1>
                 <div className="flex items-center space-x-3">
                    <MdOutlineAccessTime className="h-4 w-4 text-blue-900"/>
                    <span>0800-1700 GMT</span>
                </div>
                <div className="flex items-center space-x-3">
                    <MdCalendarToday className="h-4 w-4 text-blue-900"/>
                    <span>Mondays - Fridays</span>
                </div>
              </div>

              {/* Powered  By */}
              <div className="p-4 w-full min-h-48 flex flex-col space-y-2 rounded bg-white border border-slate-300 shadow hover:shadow-xl shadow-blue-100 transition ease-in-out duration-150">
                 <h1 className="text-sm text-blue-900 font-semibold">Developed and Managed by MIS - DICTS &copy; {new Date().getFullYear()}</h1>
              </div>
          </div>

          <div className="p-4 flex-1 flex flex-col space-y-8 bg-white border border-slate-300 rounded-lg ">
             <div className="">
                <h1 className="text-lg text-blue-900 font-semibold">Service Categories for Quick Help!</h1>
             </div>
             <div className="grid grid-cols-3 gap-3">
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Admissions</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Academic Services</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Student Portal</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Course Registration</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">E-learning</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Fees & Payments</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Wifi & Eduroam</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Staff Portal</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Staff directory</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Institutional Email</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">OSIS Issues</span>
                  </div>
                </div>
                <div className="min-h-[80px] [background:url('../public/adinkra.png')] border-4 border-blue-900 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white/20 to-blue-200/50 bg-blend-color-burn flex items-center justify-center ">
                     <span className="text-md font-medium text-blue-900 leading-[1.3rem] text-center">Payslip & xpay</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Page