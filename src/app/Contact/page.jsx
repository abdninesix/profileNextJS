"use client"
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

const ContactPage = () => {

  const text = "Say hello and let's start with your project;"
  
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState({})

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    setErrors({})

    const formValues = {
      user_message: form.current.user_message.value,
      user_email: form.current.user_email.value,
    };
    
    const newErrors = {};
    
    if (!formValues.user_message) { newErrors.user_message = "This field is required"; }
    if (!formValues.user_email) { newErrors.user_email = "This field is required"; }
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (result) => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        },
      );
  };


  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full overflow-auto flex flex-col items-center justify-center gap-4 lg:gap-20 lg:flex-row pb-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        
        <div className="h-[180px] lg:h-full lg:w-[500px] p-10 lg:mt-36 flex items-start justify-center text-justify text-3xl md:text-6xl">
          <div>
            {text.split("").map((letter,index) => (
              <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:2, repeat:Infinity, delay:index*0.1}}>{letter}</motion.span>
            ))}
          </div>
        </div>


        <motion.form onSubmit={sendEmail} ref={form} className="shadow-md shadow-gray-800 bg-gray-500 p-4 rounded-2xl h-2/3 w-[350px] lg:h-[550px] md:w-[500px] lg:mt-5 text-lg flex flex-col gap-5 justify-center" initial={{opacity:0, y:"30vh"}} animate={{opacity:1, y:"0%"}} transition={{delay:1, duration:0.5}}>
            <span>Your message:</span>
            <textarea rows={8} name="user_message" placeholder="Dear Abdullah," className="p-2 rounded-xl bg-gray-200 dark:bg-slate-800 resize-none"/>
            {errors.user_message && <span className="text-red-700">{errors.user_message}</span>}
            <span>Your email:</span>
            <input name="user_email" type="text" placeholder="something@somthing.com" className="p-2 rounded-xl bg-gray-200 dark:bg-slate-800 resize-none"/>
            {errors.user_email && <span className="text-red-700">{errors.user_email}</span>}
            <button className="bg-gray-700 hover:bg-red-600 text-white rounded-lg p-2 mt-3 w-fit">Send</button>
            {success && <span className="text-green-400 text-center">Your message has been sent!</span>}
            {error && <span className="text-red-300 text-center">Something went wrong!</span>}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default ContactPage