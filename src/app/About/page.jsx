"use client"

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Arrow from "@/components/Arrow";

const Line = () => {
  return (
    <div className="z-5">
      <div className="relative w-1 mt-2 h-full bg-gray-600 dark:bg-gray-300">
        <div className="absolute -left-2.5 w-6 h-6 rounded-full bg-mytheme"></div>
      </div>
    </div>
  )
}

const InfoCard = ({ title, description, date }) => {
  return (
    <div className="w-5/12 relative bg-gray-300 dark:bg-slate-900 hover:border-b-4 hover:scale-105 shadow-lg p-4 rounded-2xl duration-200 z-10">
      <div className="shadow-lg p-2 md:p-4 bg-white text-gray-800 font-semibold rounded-md text-center w-fit">
        {title}
      </div>
      <div className="-mx-3 p-3 text-[12px] md:text-sm">
        {description}
      </div>
      <div className="text-sm font-semibold underline">
        {date}
      </div>
      {/*<div className="p-3 bg-white text-sm font-semibold rounded-md text-center w-fit">No company</div>*/}
    </div>
  );
};


const AboutPage = () => {

  const skillRef = useRef()
  const skillRefView = useInView(skillRef, {margin:"-80px"})
  const skills = [ "HTML5", "CSS3", "Javascript", "Typescript", "React.js", "Next.js", "TailwindCSS", "Framer-motion", "Figma", "Node.js", "Express.js", "MongoDB", "Prisma", "Blender", "CAD modeling", "3D Printing", "Visual Studio", "C#", "Android Studio", "Java", "Python" ];

  const experienceRef = useRef()
  const experienceRefView = useInView(experienceRef, {margin:"-100px"})

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full overflow-scroll lg:flex">

      {/*TEXT CONTAINER*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-20 flex flex-col gap-48 md:gap-56 lg:gap-36 xl:gap-64 lg:pr-0 lg:w-2/3 xl:1/2">
      {/*BIO*/}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-4xl">BIOGRAPHY</h1>
            <p className="md:text-xl">In my journey as a tech enthusiast, I&apos;ve had the privilege of diving deep into various tools and technologies that shape our digital world. My experience spans across Visual Studio, where I&apos;ve honed my skills in developing robust software solutions, and Android Studio, which has enabled me to create engaging and user-friendly mobile applications. These platforms have been instrumental in my growth as a versatile developer, allowing me to bring innovative ideas to life and solve complex problems with ease.</p>
            <p className="md:text-xl">Beyond the realm of software development, I have explored the fascinating world of 3D design and manufacturing. Using CAD modeling, I&apos;ve developed intricate and detailed models that serve both artistic and practical purposes. My expertise in 3D printing has brought these designs into the physical world, offering tangible solutions and creative expressions. This blend of digital and physical creation has not only expanded my technical skill set but also fueled my passion for continuous learning of what technology can achieve.</p>
            <Arrow/>
          </div>
          
      {/*SKILLS*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:"-500px"}} animate={skillRefView ? {x:"0"} : {}} className="font-bold text-3xl">SKILLS</motion.h1>
            <motion.div initial={{x:"-500px"}} animate={skillRefView ? {x:"0"} : {}} transition={{delay:0.2}} className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-2 rounded text-sm bg-gray-800 dark:bg-gray-200 text-white dark:text-black">{skill}</div> ))}
            </motion.div>
            <Arrow/>
          </div>

      {/*EXPERIENCE*/}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1 initial={{x:"-500px"}} animate={experienceRefView ? {x:"0"} : {}} className="font-bold text-3xl">EXPERIENCE</motion.h1>
            <motion.div initial={{x:"-500px"}} animate={experienceRefView ? {x:"0"} : {}} transition={{delay:0.2}}>

        {/*LIST ITEM 0*/}       
        <div className="flex justify-between h-fit">
                <div className="w-5/12 relative"></div>
                <Line/>
                <InfoCard
                  title="Fullstack Web"
                  description="I&apos;m a MERN stack developer, wielding MongoDB, Express, React, and Node.js like a pro. My passion lies in creating seamless, user-friendly applications that deliver powerful digital experiences. Every project is a chance to make the web a better place, one line of code at a time. 🚀"
                  date="2022-Present"/>
          </div>

        {/*LIST ITEM 1*/}       
        <div className="flex justify-between h-fit">
                <InfoCard
                title="Frontend Web"
                description="I&apos;m a frontend dev, crafting responsive, visually appealing interfaces with HTML, CSS, and JavaScript. Every project is a chance to enhance the digital experience and make the web more enjoyable for all. 🎨"
                date="2022"/>
                <Line/>
                <div className="w-5/12 relative"></div>
          </div>

        {/*LIST ITEM 2*/}
         <div className="flex justify-between h-fit">
                <div className="w-5/12 relative"></div>
                <Line/>
                <InfoCard
                title="Android Studio"
                description="Seasoned Android Studio Java developer with a knack for building user-friendly mobile applications. Expert in Java programming and Android SDK, focused on creating seamless, high-performance apps tailored to user needs."
                date="2021-2022"/>
           </div>

        {/*LIST ITEM 3*/}
         <div className="flex justify-between h-fit">
                <InfoCard
                title="Visual Studio"
                description="Experienced Visual Studio C# developer skilled in crafting robust applications using the .NET framework. Adept at problem-solving, writing clean code, and continuously updating projects to keep up with technological advancements."
                date="2020-2021"/>
                <Line/>
                <div className="w-5/12 relative"></div>
            </div>
              

            </motion.div>

          </div>
        </div>
    
        {/*IMAGE CONTAINER*/}
        <motion.div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-5 z-30" initial={{y:-200, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.5, delay:1, ease: "easeInOut" }}>
          <Image className="rounded-tl-[150px] rounded-br-[150px]" src="/about.png" alt="" height={600} width={600}/>
        </motion.div>
        
      </div>
    </motion.div>
  )
}

export default AboutPage