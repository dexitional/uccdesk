import React from 'react'
import ChatBot from './ChatBot'

function Sidebar() {
  return (
    <div className="w-1/4 bg-slate-50">
        <div className="my-4 mx-3 p-2 h-[90vh] bg-white border-4 border-[#273775]/80 rounded-t-lg rounded-b-3xl shadow-xl">
            <div className="mx-4 my-2 p-1 bg-[#273775] border border-[#273775] rounded-lg flex items-center justify-between font-bold text-xs text-gray-600 tracking-widest">
                <div className="p-2 flex-1 flex items-center justify-center bg-white border-4 border-yellow-400 rounded-lg shadow text-lg text-[#273775] font-bold cursor-pointer">UCC AI</div>
                <div className="p-2 flex-1 flex items-center justify-center text-white">UCC AI</div>
            </div>
            <ChatBot />
        </div>
     </div>
  )
}

export default Sidebar