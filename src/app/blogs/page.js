import React from 'react';
import axios from 'axios';
import BlogButtons from '@/components/BlogButtons';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const truncateContent = (content, length = 230) => {
  return content.length > length ? content.substring(0, length) + '......' : content;
};

const Blogs = async () => {
  let allBlogs = [];

  try {
    const response = await axios.get(`${BASE_URL}/api/blogs/blogs`);
    allBlogs = response.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="w-full h-full py-10 px-10 container_maxWidth_1440 container_maxWidth_14402 md:px-2 pt-32">
      <h1 className="text-2xl font-semibold">Blogs</h1>
      <br />
      <br />
      <div className="w-full flex flex-wrap gap-5 md:flex-col">
        {allBlogs.length === 0 ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-[calc(50%_-_10px)] md:w-full h-[530px] md:h-[600px] border border-gray-300 rounded animate-pulse"
            >
              <div className="w-full h-[300px] bg-gray-300"></div>
              <div className="w-full pl-4 pr-2 mt-2">
                <div className="w-3/4 h-6 bg-gray-300 rounded mt-4"></div>
                <div className="w-full h-20 bg-gray-300 rounded mt-2"></div>
                <div className="w-full flex items-center gap-3 mt-4">
                  <div className="py-2 px-4 w-24 h-10 bg-gray-300 rounded"></div>
                  <div className="py-2 px-4 w-24 h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          allBlogs.map((item, index) => (
            <div
              key={index}
              className="w-[calc(50%_-_10px)] md:w-full h-[530px] md:h-[600px] border border-b_color rounded"
            >
              <div className="w-full h-[300px]">
                <img
                  src={item?.imageUrl}
                  alt={item?.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full pl-4 pr-2 mt-3">
                <h1 className="font-bold text-2xl">{item?.title}</h1>
                <div
                  className="prose mr-2 mt-2"
                  dangerouslySetInnerHTML={{ __html: truncateContent(item?.content) }}
                />
         <BlogButtons item={item}/>

              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Blogs;
