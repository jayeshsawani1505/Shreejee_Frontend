import Testimonial from '@/components/Testimonial'
import Founder from '../../components/founder.png'
import Image from 'next/image'
import Testimonial2 from '@/components/Testimonial2'

const About = () => {
  return (
    <>
    <section className='w-[100%] font-lato h-[100%] py-[40px] container_maxWidth_14402 px-[40px] container_maxWidth_1440 md:px-[10px] pt-[130px]' >
    <h1 className='text-[25px] font-[600]'>About Us</h1>
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


<br/>

            </div>
            <div className='about_image md:w-[100%]' >
                <div data-aos='fade-left' className='w-[400px] md:w-[100%] h-[400px] flex justify-center items-center  rounded'>
                <Image alt='about photo' src={Founder} className='w-[100%] h-[90%] object-fill'/>

                </div>
            </div>

        </div>
        <br/>
        <br/>
        <br/>

        {/* <h1 className='text-[25px] font-[600]' data-aos='fade-right'>Testimonial</h1> */}
      <br/>

      {/* <div className='w-full overflow-x-auto flex gap-3 py-5 custom_slider'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div key={index} className='w-[450px] md:w-[300px] h-[auto] py-2 px-2 border-[1px] border-b_color rounded flex-shrink-0 '>
          <div className='w-[100%] flex justify-center'>
          <img src='http://res.cloudinary.com/brijesh070707/image/upload/v1722523970/xtq3rot0z4njc2ek8txl.png' className='w-[70px] h-[70px] rounded-[50%]'/>

          </div>
          <p className='text-center py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla libero sed sapien convallis, vel placerat ipsum sollicitudin. Integer sit amet arcu vel justo scelerisque tincidunt. Curabitur scelerisque sapien ac lorem porttitor, vel consequat purus convallis. Aliquam erat volutpat. Morbi ultrices, metus ac tempor fermentum, lorem arcu facilisis elit, sed varius mi urna vel arcu. Ut nec elit</p>
          <br/>
          <p className='text-center'>Brijesh Bhai</p>
            
          </div>
        ))}
      </div> */}
      
 
      


    </section>
    <Testimonial/>
    <Testimonial2/>
    </>
  )
}

export default About