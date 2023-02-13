import React from 'react'
import { GiMonoWheelRobot } from 'react-icons/gi'
import { FcButtingIn, FcList, FcLink } from 'react-icons/fc'
import {FaRegFilePdf,FaLink } from 'react-icons/fa'
import { SiMicrosoftword,SiMicrosoftexcel,SiMicrosoftpowerpoint } from 'react-icons/si'

//import Adinkra from './public/adinkra.png'

function ChatBot() {
  return (
    <div className="my-1 mx-2 mb-1 p-2 h-full flex flex-col space-y-2 overflow-hidden">
        <div className="relative px-1 py-3 h-14 flex items-center space-x-4 border border-[#273775]/50 rounded-lg bg-blue-50 shadow">
             <GiMonoWheelRobot className="w-10 h-10 text-[#273775]" />
             <div className="absolute top-1 right-1 px-1.5 py-0.5 flex items-center space-x-1 font-bold rounded bg-[#273775] text-yellow-300 text-[10px] tracking-widest shadow-sm shadow-blue-200/50">
                <span className="text-[8px]">LIVE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse"></span>
             </div>
             <div className="py-1 flex flex-col space-y-0">
                <span className="text-lg text-[#273775] font-semibold tracking-widest">UCC AI</span>
                <span className="text-[0.6rem] text-blue-900 font-medium">Official UCC Chatbot - 24/7 helpdesk for UCC</span>
             </div>
        </div>
        
        <div className="relative h-[87.5%] flex flex-col">
           <div className="p-3 pb-14 flex-1 flex flex-col space-y-4 bg-slate-50/60 border rounded-lg overflow-y-scroll scrollbar-hide">
               <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div>Nice man making people smile and the decision to retire are fairly possible to make us unite</div>
               </div>
               <div className="relative px-6 py-4 w-[95%]  bg-blue-100 text-slate-700 text-xs font-semibold rounded-tl-3xl rounded-br-3xl">
                  <FcButtingIn className="absolute -top-2 -right-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div>Nice man making people smile and the decision to retire are fairly possible to make us unite</div>
               </div>
               <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div>Nice man making people smile and the decision to retire are fairly possible to make us unite</div>
               </div>
               <div className="relative px-6 py-4 w-[95%]  bg-blue-100 text-slate-700 text-xs font-semibold rounded-tl-3xl rounded-br-3xl">
                  <FcButtingIn className="absolute -top-2 -right-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div>Nice man making people smile and the decision to retire are fairly possible to make us unite</div>
               </div>
               <div className="relative px-6 py-4 w-[95%]  bg-blue-100 text-slate-700 text-xs font-semibold rounded-tl-3xl rounded-br-3xl">
                  <FcButtingIn className="absolute -top-2 -right-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div>Nice man making people smile and the decision to retire are fairly possible to make us unite</div>
               </div>
               <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div>Nice man making people smile and the decision to retire are fairly possible to make us unite</div>
               </div>

               {/* Chips */}
               <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5 ">
                    <span className="my-2 font-bold text-[#273775]">Pick a Category of Issue</span>
                    <button className="p-2 rounded bg-slate-50 border border-slate-300 text-[#273775]">Leave issues</button>
                    <button className="p-2 rounded bg-slate-50 border border-slate-300 text-[#273775]">Appointment issues</button>
                  </div>
               </div>

               {/* URL PDF Resource */}
               <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5 ">
                    <span className="my-2 font-bold text-[#273775]">Follow Link to Resource Below</span>
                    <button className="p-3 rounded flex items-center space-x-2 bg-slate-50 border border-slate-300 text-[#273775]">
                        <FaRegFilePdf className="w-6 h-6 text-red-500" />
                        <span className="text-[10px] text-left">PDF RESOURCE ON TECHNOLOGY</span>
                    </button>
                  </div>
               </div>

                {/* URL DOC Resource */}
                <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5 ">
                    <span className="my-2 font-bold text-[#273775]">Follow Link to Resource Below</span>
                    <button className="p-3 rounded flex items-center space-x-2 bg-slate-50 border border-slate-300 text-[#273775]">
                        <SiMicrosoftword className="w-6 h-6 text-blue-800" />
                        <span className="text-[10px] text-left">DOC RESOURCE ON TECHNOLOGY</span>
                    </button>
                  </div>
                </div>

                 {/* URL EXCEL Resource */}
                 <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5 ">
                    <span className="my-2 font-bold text-[#273775]">Follow Link to Resource Below</span>
                    <button className="p-3 rounded flex items-center space-x-2 bg-slate-50 border border-slate-300 text-[#273775]">
                        <SiMicrosoftexcel className="w-6 h-6 text-green-800" />
                        <span className="text-[10px] text-left">XLS RESOURCE ON TECHNOLOGY</span>
                    </button>
                  </div>
                </div>

                 {/* URL POWERPOINT Resource */}
                 <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5 ">
                    <span className="my-2 font-bold text-[#273775]">Follow Link to Resource Below</span>
                    <button className="p-3 rounded flex items-center space-x-2 bg-slate-50 border border-slate-300 text-[#273775]">
                        <SiMicrosoftpowerpoint className="w-6 h-6 text-red-400" />
                        <span className="text-[10px] text-left">PPT RESOURCE ON TECHNOLOGY</span>
                    </button>
                  </div>
                </div>

                {/* URL LINK Resource */}
                <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5 ">
                    <span className="my-2 font-bold text-[#273775]">Follow Link to Resource Below</span>
                    <button className="p-3 rounded flex items-center space-x-2 bg-slate-50 border border-slate-300 text-[#273775]">
                        <FcLink className="w-6 h-6 text-red-500" />
                        <span className="text-[10px] text-left">URL RESOURCE ON TECHNOLOGY</span>
                    </button>
                  </div>
               </div>

               {/* Profile Card */}
               <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5">
                    <span className="my-2 font-bold text-[#273775]">Profile Card</span>
                    <div className="bg-slate-50 flex flex-col border border-gray-300 rounded-lg  overflow-hidden">
                        <div className="h-28 bg-blue-100 border-b"></div>
                        <div className="p-2 text-xs">
                            Ebenezer Kwabena Blay Ackah
                            John is creating well man   
                        </div>
                        <div className="py-3 px-2 flex items-center justify-between bg-slate-100 border-t">
                           <button className="px-2 py-1 rounded bg-slate-50 border border-slate-300 text-[#273775]">Leave</button>
                           <button className="px-2 py-1 rounded bg-slate-50 border border-slate-300 text-[#273775]">Appointment</button>
                        </div>
                    </div>
                </div>
               </div>


               {/* Image Card */}
               <div className="relative px-6 py-4 w-[95%]  bg-slate-200 text-slate-700 text-xs font-semibold rounded-tr-3xl rounded-bl-3xl">
                  <GiMonoWheelRobot className="absolute -top-2 -left-2 p-0.5 w-6 h-6 bg-slate-100 border border-slate-400 rounded-full text-[#273775]" />
                  <div className="flex flex-col text-left space-y-0.5">
                    <span className="my-2 font-bold text-[#273775]">Image Card</span>
                    <div className="bg-slate-50 flex flex-col border border-gray-300 rounded-lg  overflow-hidden">
                        <div className="h-28 bg-blue-100 border-b"></div>
                        <div className="p-2 text-xs">
                            Ebenezer Kwabena Blay Ackah
                            John is creating well man   
                        </div>
                    </div>
                </div>
               </div>


            </div>
           <div className={`absolute bottom-0 w-full py-1 px-3 bg-white bg-[url(/public/adinkra.png)] flex items-center space-x-2 rounded-lg border-2 border-[#273775] border-shadow-md shadow-[#273775]/20`}>
               <input type="text" placeholder="Enter Message" className="flex-1 rounded-lg border-none focus:outline-none focus:ring-0 text-sm" />
               <button className="px-3 py-1.5 flex items-center justify-center text-[10px] font-bold text-yellow-300 tracking-widest rounded-md bg-[#273775]">SEND</button>
           </div>
        </div>

    </div>
  )
}

export default ChatBot