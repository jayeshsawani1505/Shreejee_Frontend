

import HomeHeroButton from '@/components/HomeHeroButton';
import Founder from '../components/founder.png'
import Image from 'next/image';
import HomeAboutButton from '@/components/HomeAboutButton';
import OurProduct from '@/components/OurProduct';
import Testimonial from '@/components/Testimonial';
import BannerSlider from '@/components/BannerSlider';
import Testimonial2 from '@/components/Testimonial2';



const Home = () => {
    const whyChooseUs = [
        {
          icon: "🌱",
          mainTitle: "Pure & Natural",
          content: "Our products are made from high-quality, natural ingredients, free from synthetic chemicals and artificial additives. Experience the purity and effectiveness of nature's best."
        },
        {
          icon: "🤝",
          mainTitle: "Ethical & Sustainable",
          content: "We are committed to ethical sourcing and sustainable practices. Our eco-friendly products and packaging help reduce your carbon footprint."
        },
        {
          icon: "🧖‍♀️",
          mainTitle: "Holistic Wellness",
          content: "We believe in holistic well-being. Our products are designed to nourish your body, mind, and soul, promoting a balanced and healthy lifestyle."
        },
        {
          icon: "🛡️",
          mainTitle: "Trusted Quality",
          content: "Quality is our priority. We rigorously test all our products to ensure they meet the highest standards, providing you with safe and effective solutions for your personal care needs."
        }
      ];
      
  return (
    <>
    <section className='w-[100%] h-[100%] py-[40px] px-[40px] container_maxWidth_1440 md:px-[10px] pt-[130px] overflow-hidden container_maxWidth_14402'>
      <div className='w-[100%] h-[100%] flex justify-between items-center mt-6 md:flex-col'>
      <div className='pitch_title w-[50%] md:w-[100%]'>
      <h2 className='font-lato font-[600] text-[35px] md:text-center' data-aos='fade-right'>
  Elevate Your Well-Being with Nature&apos;s Touch:
  <span className='text-brand_color'>Discover the Power of Premium Ayurvedic & Products and Expertly Crafted Formulations</span>
</h2>

      <br/>
     <HomeHeroButton/>
      </div>
      {/* <div className='product_slider mr-5 md:mt-10 md:mr-0' data-aos='fade-left'>
  <div className='slide_products_wrapper'>
    <div className='slide_products'>
      <div className='slide'>
        <img src='https://res.cloudinary.com/drsuiuchs/image/upload/v1724489401/products/hte11adoxjuhrydkppt8.png' className='slide_image' alt='slider images'/>
      </div>
      <div className='slide'>
        <img src='https://res.cloudinary.com/drsuiuchs/image/upload/v1724669123/products/new_products/z53g3tgnfoex9jdr1zd8.png' className='slide_image' alt='slider images'/>
      </div>
      <div className='slide'>
        <img src='https://res.cloudinary.com/drsuiuchs/image/upload/v1724491933/products/g9xlx5uh8paw9lfdio23.png' className='slide_image' alt='slider images'/>
      </div>
      <div className='slide'>
        <img src='https://res.cloudinary.com/drsuiuchs/image/upload/v1725011080/remedy_5_page-0001_qgdxzc.jpg' className='slide_image' alt='slider images'/>
      </div>
    </div>
  </div>
</div> */}
<BannerSlider/>
      </div>
    </section>

    <br/>
    <br/>
    <br/>
    <br/>   <br/>
    <br/>
    <section className='w-[100%] h-[100%] py-[40px] px-[40px] md:px-[10px] container_maxWidth_1440 overflow-hidden'>
        <h1 className='text-[25px] font-[600]' data-aos='fade-right'>About Us</h1>
        <br/>
        <br/>
        <div className='w-[100%] h-[100%] flex justify-between items-center md:flex-col font-lato'>
            <div className='pr-[50px] pt-[20px] md:pr-0 md:text-center md:mb-6 md:w-[100%]' data-aos='fade-right'>
            <h1>
  <span className='text-brand_color font-[600]'>Shreejee Remedies</span> is emerging Ayurvedic Pharmaceutical Company which
  was established in the year <span className='text-brand_color font-[600]'>1993</span>. The company is manufacturing and supplying
  Ayurvedic products which are formulated through best-in-grade raw material
  and ingredients.
</h1>
<br />
<p>
  The core objective of our company is to provide a comprehensive range of &quot;Quality Remedies&quot; at &quot;Affordable Prices&quot; to medical stores, hospitals, NGOs, chemists, nursing homes, and Remedies centers. As an old company, we aim to grow at a rapid pace with the motive to achieve a prominent market presence all over the world. Further, our strong portfolio of business models and accurately composed Ayurvedic products help us in becoming a prominent Manufacturer and Supplier amongst the rest.
</p>
<br />

<HomeAboutButton/>
            </div>
            <div className='about_image md:w-[100%]' >
                <div data-aos='fade-left' className='w-[400px] md:w-[100%] h-[400px] flex justify-center items-center border-[1px] rounded'>
                <Image alt='about photo' src={Founder} className='w-[100%] h-[90%] object-fill' loading='lazy'/>
                </div>
            </div>

        </div>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>   
    <br/>
    <br/>

    <section className='w-[100%] h-[100%] py-[40px] px-[40px] container_maxWidth_1440 md:px-[10px] overflow-hidden'>
    <h1 className='text-[25px] font-[600]' data-aos='fade-right'>Why Choose Us</h1>
    <br/>
    <br/>
    <br/>

    <div className='w-[100%] h-[100%] flex justify-between gap-5 md:flex-col' data-aos='fade-left'>
    {whyChooseUs.map((item,index)=>(
        <div className='flex flex-col justify-between items-center w-[60%] md:w-[100%]' key={index}>
            <h1 className='text-[40px]'>{item.icon}</h1>
            <h2 className='text-[22px] font-[600]'>{item.mainTitle}</h2>
            <p className='text-center'>{item.content}</p>
        </div>
    ))

    }

    </div>
    </section>

    <br/>
    <br/>
    <br/>
    <br/>   


    <OurProduct/>
    
    <br/>
    <br/>

    <Testimonial/>
    <Testimonial2/>


    </>
  )
}

export default Home