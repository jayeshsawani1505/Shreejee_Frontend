"use client"
import React, { useState } from 'react'

const ContactForm = () => {
 const [FirstName,setFirstName]=useState("")
 const [LastName,setLastName]=useState("")
 const [Email,setEmail]=useState("")
 const [Message,setMessage]=useState("")
  return (
    <form>
    <div className='w-[100%] flex gap-7'>
        <div className='flex-1'>
        <label>First Name</label><br/>
        <input onChange={(e)=>setFirstName(e.target.value)} value={FirstName} type='text' required className='w-[100%] border-b_color border-[1px] p-2 rounded mt-[3px]' placeholder='jayesh'/>
        </div>
        <div className='flex-1'>
        <label>Last Name</label>
        <input onChange={(e)=>setLastName(e.target.value)} type='text' required className='w-[100%] border-b_color border-[1px] p-2 rounded mt-[3px]' placeholder='bhai'/>
        </div>
    </div>
    <br/>
    <label>Email</label>
    <input onChange={(e)=>setEmail(e.target.value)} type='email' required className='w-[100%] border-b_color border-[1px] p-2 rounded mt-[3px]' placeholder='jayeshbhai@gmail.com'/>
    <br/>
    <br/>
    <label>Message</label>
    <textarea onChange={(e)=>setMessage(e.target.value)} placeholder='Type any message...' className='w-[100%] h-[200px]  border-b_color border-[1px] p-2 rounded mt-[3px]' required></textarea>
    <br/>
    <br/>
    <button className='py-2 px-4 rounded bg-brand_colors text-white' type='submit'>Submit</button>
</form>
  )
}

export default ContactForm