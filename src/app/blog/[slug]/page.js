import axios from 'axios';
import Head from 'next/head';
import BackArrow from '@/components/BackArrow';
import ShareButton from '@/components/ShareButton';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export async function generateMetadata({ params }) {
  let singleBlog = null;
  try {
    const response = await axios.get(`${BASE_URL}/api/blogs/blogs/${params.slug}`);
    singleBlog = response.data;
  } catch (error) {
    console.error(error);
  }

  return {
    title: `${singleBlog?.title} | Shreejee Remedies`,
    description: singleBlog?.description || 'Read more about Shreejee Remedies',
    openGraph: {
      title: singleBlog?.title,
      description: singleBlog?.description,
      images: [
        {
          url: singleBlog?.imageUrl,
          alt: singleBlog?.title,
        },
      ],
    },
  };
}

const SingleBlog = async ({ params }) => {
  let singleBlog = null;
  try {
    const response = await axios.get(`${BASE_URL}/api/blogs/blogs/${params.slug}`);
    singleBlog = response.data;
    console.log(response.data)
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Head>
        <title>{singleBlog?.title} | Shreejee Remedies</title>
        <meta name="description" content={singleBlog?.description || 'Read more about Shreejee Remedies'} />
        <meta property="og:title" content={singleBlog?.title} />
        <meta property="og:description" content={singleBlog?.description} />
        <meta property="og:image" content={singleBlog?.imageUrl} />
      </Head>
      <section className='w-[100%] h-[100%] py-[40px] px-[40px] container_maxWidth_14402 container_maxWidth_1440 md:px-[10px] pt-[130px] min-h-[500px]'>
        <div className='flex justify-start'>
          <BackArrow />
        </div>
        <div className='w-[100%] flex justify-center'>
          <div className='w-[600px] md:w-[100%] md:px-3'>
            <div className='blog_image h-[300px]'>
              <img src={singleBlog?.imageUrl} className='w-[100%] h-[100%] object-contain' alt={singleBlog?.title} />
            </div>
            <div className='w-[100%] flex justify-end'>
              <ShareButton singleBlog={singleBlog} />
            </div>
            <div className='blog_title mt-8'>
              <h1 className='text-[27px] font-[700]'>{singleBlog?.title}</h1>
            </div>
            <br />
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: singleBlog?.content || "" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
