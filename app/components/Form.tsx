"use client"
import React, { useState } from 'react';
interface FormData {
  firstname: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstname?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Form: React.FC = () => {
 const [formData, setFormData] = useState<FormData>({
  firstname: '',
  email: '',
  phone: '',
  message: '',
 })

 const [errors, setErrors] = useState<FormErrors>({});
 const [successMessage, setSuccessMessage] = useState<string>('');

 const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  setErrors ((prevErrors) => ({...prevErrors,[name]: undefined}));
 }
 
const validationForm = (event: React.FormEvent<HTMLFormElement>) => {
  const newErrors: FormErrors = {};
  if (!formData.firstname)newErrors.firstname = 'Please enter your first name.';
  if (!formData.email) newErrors.email = 'Please enter your email address.';
  if (!formData.phone) newErrors.phone = 'Please enter your phone number.';
  if (!formData.message) newErrors.message = 'Please enter your message.';
  return newErrors;
}
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const validateErrors = validationForm(event);
  if (Object.keys(validateErrors).length > 0) {
    setErrors(validateErrors);
    return
  }
  console.log('Form submitted:', formData);
  setSuccessMessage('Thank you for your message! We will get back to you soon.');
  setTimeout(() => {
    setSuccessMessage('');
  }, 5000);
  // Reset form
  setFormData({
    firstname: '',
    email: '',
    phone: '',
    message: '',
  });

}
  return (
   <div id='contacts'>
       <div className="text-center text-black text-4xl font-semibold font-['Clash Display'] py-8">Get In Touch</div>
    <div className='lg:flex w-full xl:mx-auto justify-center'>
        <form action="" onSubmit={handleSubmit}>
                <div className='lg'>
                <div className='lg:grid grid-cols-2 gap-4'>
                <div>
                <label htmlFor="">Firstname</label>
                <input type="text" name='firstname' id='firstname' placeholder='firstname' className='placeholder:text-[#828282] text-sm font-normal w-full' value={formData.firstname} onChange={handleChange}/>
                {errors.firstname && <p className='text-red-500'>{errors.firstname}</p>}
                </div>
                <div>
                <label htmlFor='email'>Email Address</label>
            <input type="email" name="email" id="email" placeholder='Email' className='placeholder:text-[#828282] text-sm font-normal w-full' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            </div>
            <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" placeholder='+234' className='placeholder:text-[#828282] text-sm font-normal w-full' value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className='text-red-500'>{errors.phone}</p>}

          <label htmlFor='message'>Message</label>
          <textarea name="message" id="message" className='rounded-lg border border-[#cacaca] justify-start items-start gap-[8.33px] inline-flex placeholder:text-[#828282] text-sm font-normal w-full p-3' value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <p className='text-red-500'>{errors.message}</p>}

          
        <button className='cta' type='submit'>Send us a Message</button>

        
            </div>
        </form>

    <section className="contact">
          <div>
          <div className="text-black text-base font-semibold font-['Clash Display'] mt-10">Call Us</div>
          <div className="text-black text-sm font-normal font-['Clash Display'] mt-10">Call our team Monday - Friday  from 8am to 5pm</div>
          <div className="flex gap-1 mt-8">
            <img src="/ic_round-facebook.svg" alt="" />
          <div className="text-black text-sm font-semibold font-['Clash Display'] underline">+234 903 162 9371  </div>
          </div>

          <div className="text-black text-base font-semibold font-['Clash Display'] mt-8">Chat with Us</div>
          <div className="flex gap-1 mt-8">
            <img src="/ic_round-facebook.sv" alt="" />
          <div className="text-black text-sm font-semibold font-['Clash Display'] underline">Send us a message on Facebook  </div>
          </div>
          <div className="flex gap-1 mt-8">
            <img src="/cib_linkedin.svg" alt="" />
          <div className="text-black text-sm font-semibold font-['Clash Display'] underline">+Send us a message on Linkedin  </div>
          </div>
          <div className="flex gap-1 mt-8">
            <button>
            <img src="/prime_twitter.svg" alt="" />
            </button>
          <div className="text-black text-sm font-semibold font-['Clash Display'] underline ">Send us a message on X  </div>
          </div>

          </div>

       </section>
      
   </div>
   </div>
   
  ) 
}

export default Form
