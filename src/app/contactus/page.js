import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const ContactUs = () => {
  return (
    <section className='w-[100%] h-[100%] py-[40px] px-[40px] container_maxWidth_1440 md:px-[10px] pt-[130px] container_maxWidth_14402'>
     <div className='w-[100%] flex gap-4 md:flex-col'>
        <div className='w-[70%] h-[100%] p-[20px] md:w-[100%] rounded border-brand_b_color border-[1px]'>
        <h1 className='text-[25px] font-[600]'>Contact Us</h1>
        <br/>
     <ContactForm/>
        </div>
        <div className='w-[25%] h-[100%] md:w-[100%] border-b_color border-[1px] rounded p-[20px]'>
        <h1 className='text-[25px] font-[600]'>Get in touch</h1>
        <br/>
        <h1>By E-mail:</h1>
        <a href="mailto:info@shreejeeremedies.com" className='font-[600]'>shreejeeremedies@gmail.com</a>
<br></br>
        <br/>
        <h1>By Phone:</h1>
        <a href="tel:+918128126453" className='font-[600]'>
  +91 8128126453
</a>

<br></br>
        <br/>
        <h1>Address:</h1>
        <a href='https://www.google.com/maps/dir//D%2F9%2F2%2FB,+Diamond+Park,+opposite+cartec+honda,+GIDC+Naroda,+Ahmedabad,+Gujarat+382330/@23.0302,72.5772,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e872c00000001:0x7d71ad4ee5c4b717!2m2!1d72.6665734!2d23.0940983?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D'><p className='font-[600]'>D/9/2/B, Diamond Park, opposite cartec honda, GIDC Naroda, Ahmedabad, Gujarat 382330</p></a>
        <br/>
        <a href='https://www.google.com/maps/place/Nikol,+Ahmedabad,+Gujarat+380038/@23.0477668,72.6708084,14z/data=!3m1!4b1!4m6!3m5!1s0x395e86d53c2ed683:0x161958a4f45e809a!8m2!3d23.0499889!4d72.6699673!16s%2Fm%2F010wlvj0?entry=ttu' className='flex items-center gap-1'><IoLocationSharp className='text-brand_color'/> Find us on google</a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117442.62015507933!2d72.52237784335937!3d23.094098300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e872c00000001%3A0x7d71ad4ee5c4b717!2sShreejee%20Remedies!5e0!3m2!1sen!2sin!4v1724666939832!5m2!1sen!2sin" width="100%" height="256" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <br/>
        <h1>Contact us on Whatsapp</h1>
        <a href="https://wa.me/918128126453" className='font-[600] flex gap-2 items-center' target="_blank" rel="noopener noreferrer">
  <FaWhatsapp className='text-green-500 text-[20px]' />
  +91 81281 26453
</a>



        </div>
     </div>

    </section>
  )
}

export default ContactUs