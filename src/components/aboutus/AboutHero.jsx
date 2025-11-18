import React from 'react'
import { ChevronRight } from 'lucide-react';
import aboutusme from "../../assets/aboutusimg.jpg"
import textAnimation from "../../assets/videos/brand_story_text_animation1.mp4"
import gif from "../../assets/about-us-gif.gif"
import centervideo from "../../assets/videos/About_Us_Center_Video.mp4"

const AboutHero = () => {
  return (
    <>
       {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto  px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="hover:text-gray-900 cursor-pointer">HOME</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">ABOUT US</span>
        </div>
      </div>

    <div className='flex flex-col items-center justify-center'>
        <img src={aboutusme} width={400} alt="" />
         <p className='font-normal text-lg text-center p-2'>“About Us” is so overrated. Let's call it the “About Me” <br /> page. So, you came a long way to know about me. Let <br /> us present to you MY STORY.</p>

         <div className='max-w-6xl rounded-2xl my-5 overflow-clip '>
            <video autoPlay muted controls={false}  loop playsInline  src={textAnimation}></video>
         </div>

         <p className='max-w-6xl text-center'>Once upon a time, somewhere in the Universe, 4 dreamers (my young co-founders) met with the idea of creating a brand that offers Global Fashion. It was the year 2018 with days of hard work and nights of dreams, they started my journey, 'The Journey of Beyoung.' First order in days and lakhs of orders in years? You wanna know the drill? Well. here is my secret recipe: </p>

         <img className='p-5 font-' src={gif} alt="" />

         <p className='text-center'> Yes, this is what we are.

               <div className='max-w-6xl rounded-2xl my-5 overflow-clip '>
            <video className='w-full' autoPlay muted controls={false}  loop playsInline  src={centervideo}></video>
         </div>

          <p className='max-w-6xl text-center'>While others are snoozing, Beyoung (that’s me ????) is serving the youth of Bharat who want aspirational and value for money fashion. Because no one should have to compromise on fashion—I stepped in to change the game. So, in a nutshell, I want to be your Fashion Partner. From morning jogs to date nights, meetings to hangouts, I get you the look you want with sass and convenience. Yours truly offers you what nobody else does - Customizable Combos. </p>

        
</p>



    </div>

    </>
  )
}

export default AboutHero