import React from 'react'
import { socialMedia } from '../../data'

function Contact() {
  return (
    <footer className='w-full p-10 mb-[100px] md:mb-5' id="contact">
      <div className='flex flex-col items-center'>
        <h1 className='text-custom-teal w-45 text-center text-5xl mt-3 font-bold '>
          Contact
        </h1>
        <p className='text-custom-teal text-lg font-medium md:mt-3 my-1 text-center p-5'>If you have any suggestions, project or even you want to say “hello”, feel free to reach out to me via email, or any of the platforms below.</p>
        <a href="mailto:dylanhoshujie@gmail.com">

        </a>
      </div>

      <div className='flex md:flex-grow flex-col justify-between items-center'>
        <div className='flex items-center justify-center flex-wrap md:gap-3 gap-6 p-3 '>
          {socialMedia.map((profile) => (
            <div className='flex items-center justify-center flex-col'>
              <div className='text-custom-teal'>{profile.text}</div>
              <a href={profile.link} key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-custom-teal rounded-lg border border-custom-teal text-white'> 
                <img src={profile.img} alt={profile.img} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
        <p className='md:text-base text-sm md:font-normal font-light text-custom-teal'>Copyright © 2024 Dylan Ho Shu Jie</p>
      </div>

    </footer>
  )
}

export default Contact
