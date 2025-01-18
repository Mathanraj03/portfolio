import React from 'react'
import { Toaster, toast } from 'sonner'
import { AiOutlineEye, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp, } from 'react-icons/ai'
import { motion } from 'framer-motion';


function Contact() {

  const socialMediaLink = [
    { label: 'linkedin', link: 'https://www.linkedin.com/in/mathan-raj-2439b6285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: (<AiOutlineLinkedin className='h-7 w-7 hover:text-[#9b36fa] hover:scale-125 ' />) },
    { label: 'github', link: 'https://github.com/Mathanraj03', icon: (<AiOutlineGithub className='h-7 w-7 hover:text-[#9b36fa] hover:scale-125 ' />) },
    { label: 'whatsapp', link: 'https://wa.me/+919442802613', icon: (<AiOutlineWhatsApp className='h-7 w-7 hover:text-[#9b36fa] hover:scale-125 ' />) },
    { label: 'e-mail', link: 'mailto:hello.mathanraj@gmail.com', icon: (<AiOutlineMail className='h-7 w-7 hover:text-[#9b36fa] hover:scale-125 ' />) },
    
  ]

  const fadeAnimation={
    initial:{
      opacity:0,
      y:100
    },
    animate:{
      opacity:1,
      y:0,
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0304d506-ca54-42ec-bea4-91fb6560cb14");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success('Message send successfully');
    }
  }

  return (
    <div className='min-h-screen '>
      <div className=" max-w-3xl m-auto">
        <motion.h1
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
          transition={{ duration:0.7}}
          viewport={{once:true}}
          className='text-4xl font-bold text-center py-8 '
        >
          Contact
        </motion.h1>
        <motion.div
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
          transition={{ delay:0.2, duration:0.7}}
          viewport={{once:true}}
          className=' bg-white rounded-xl shadow-lg p-8 ' >
        <form onSubmit={onSubmit} action="submit"
          className='space-y-6 '>
            <div>
              <label htmlFor="name"
                className='text-sm font-medium text-gray-700' >
                Name
              </label>
              <input type="text"
                name='name'
                required
                className='w-full px-4 py-2 border border-gray-500 rounded-md '
              />
            </div>
            <div>
              <label htmlFor="emale"
                className='text-sm font-medium text-gray-700'>
                Email
              </label>
              <input type="email"
                name='email'
                required
                className='w-full px-4 py-2 border border-gray-500 rounded-md '
              />
            </div>
            <div>
              <label htmlFor="message"
              className='text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea name="message"
                rows='4'
                required
                className='w-full px-4 py-4 rounded-md border border-gray-500 '
              >
              </textarea>
            </div>
            <div>
              <Toaster position='top-center' />
              <button type='submit'
                className='bg-[#9b36fa] hover:bg-[#8707ff] w-full  text-gray-100 rounded-md py-2 px-2   ' >
                Send Message
              </button>
            </div>
        </form>
        </motion.div>
        <div className='flex gap-4 justify-center py-6'>
          {socialMediaLink.map((item, index) =>
            <motion.a
              key={index}
              variants={fadeAnimation}
              initial="initial"
              whileInView="animate"
              transition={{ delay:0.2*(index+1), duration:0.5}}
              // viewport={{once:true}}
              href={item.link} >
                {item.icon}
            </motion.a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact;
