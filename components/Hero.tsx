"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Lottie from 'lottie-react';
import animationData from '@/data/developer.json'; // Adjust the path to your JSON animation file


// Dynamically import motion from Framer Motion, disabling SSR



const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight fill="white" className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]" />
        <Spotlight fill="blue" className="top-2 left-80 h-[80vh] w-[50vw]" />
      </div>

      <div className="h-[50rem] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="absolute top-4 right-5 flex justify-end items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a key={info.id} target='blank' href={info.link}>
        <div
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <img src={info.img} alt="icons" width={20} height={20} />
        </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Dynamic Web Developer
          </h2>
          

          <div className="w-60 h-60 mt-8">
          <Lottie animationData={animationData} loop={true} />
        </div>

          
          
         
            
          {/* <MotionImg
  src="/myimg (2).png"
  alt="Anis"
  className="w-60 h-44 rounded-lg shadow-lg pt-4"
  style={{
    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  initial={{ scale: 0.5, opacity: 0 }} // Start smaller
  animate={{ scale: 1, opacity: 1 }} // Scale up to full size
  transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
  whileHover={{ scale: 1.1, rotateY: 10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }} // Flip effect on hover
/> */}
        <TextGenerateEffect
            words="I build websites that are fast, secure, and accessible"
            className="text-4xl md:text-5xl lg:text-6xl text-center mt-4"
          />


          

          

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Anis, A FullStack Developer based in Tunis.
          </p>

          {/* MagicButton to Download CV */}
          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="left"
              otherClasses="mt-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
