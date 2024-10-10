"use client"

import { useRouter } from "next/navigation"


const Success=()=>{
    const router = useRouter();
return(<>
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <div className="mb-4">
          <div className="inline-block bg-green-100 p-4 rounded-full">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4m5 4.5A9.5 9.5 0 1 1 12 2.5a9.5 9.5 0 0 1 9.5 9.5z" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Success!</h2>
        <p className="text-gray-600 mb-6">Your Payment completed successfully.</p>
        <button
          onClick={()=>   router.push('/')}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>

</>)

}
export default Success;