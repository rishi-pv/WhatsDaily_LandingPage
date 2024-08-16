import ArrowRight from "@/assets/arrow-right.svg";
import starImage from '@/assets/star.png';
import newsImage from '@/assets/News3DIcon.png';
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#ecfdf5] to-emerald-200 py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title text-center">Join for free today</h2>
          <p className="section-description text-center mt-5">Start Your Journey with Premium News Delivered Daily!</p>
        <Image 
        src={starImage} 
        alt="Star Image" 
        width={260} 
        className="hidden md:block absolute -left-[250px] -top-[137px]"/>
        <Image 
        src={newsImage} 
        alt="News Image" 
        width={260} 
        className=" hidden md:block absolute -right-[231px] -top-[19px] rotate-[-20deg]"
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
