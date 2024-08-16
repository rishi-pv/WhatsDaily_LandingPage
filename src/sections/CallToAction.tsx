'use client';
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from '@/assets/star.png';
import newsImage from '@/assets/News3DIcon.png';
import Image from "next/image";
import { motion,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const CTARef = useRef(null);
  const { scrollYProgress } = useScroll({
    target:CTARef,
    offset:["start end","end start"],
  });
  const TranslateY = useTransform(scrollYProgress,[0,1],[150,-150]);
  return (
    <section ref={CTARef} className="bg-gradient-to-b from-[#ecfdf5] to-emerald-200 py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title text-center">Join for free today</h2>
          <p className="section-description text-center mt-5">Start Your Journey with Premium News Delivered Daily!</p>
        <motion.img 
        src={starImage.src} 
        alt="Star Image" 
        width={260} 
        className="hidden md:block absolute -left-[250px] -top-[137px]"
        style={{
          translateY:TranslateY,
        }}
        />
        <motion.img 
        src={newsImage.src} 
        alt="News Image" 
        width={260} 
        className=" hidden md:block absolute -right-[231px] -top-[19px] rotate-[-20deg]"
        style={{
          translateY:TranslateY,
          rotate:-20,
        }}
        />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Join for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>
  );
};
