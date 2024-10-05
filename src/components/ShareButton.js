"use client"
import React from 'react'
import { IoShareSocialOutline } from 'react-icons/io5'

const ShareButton = ({SingleBlog}) => {
    const handleShare = (data)=>{
        const currentDomain = window.location.origin;
        navigator.share({
         text:'Checkout this blog',
         url:`${window.location}`,
         title:data
        })
 }
  return (
    <IoShareSocialOutline onClick={()=>{handleShare(SingleBlog?.title)}} className='text-[20px] text-brand_color cursor-pointer my-3'/>
  )
}

export default ShareButton