import Image from "next/image";
import messageMockup from '@/assets/iP14Pro_Mockup.png';
import messageIcon from '@/assets/message.png';
import cursorIcon from '@/assets/cursor.png'

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#ecfdf5] py-16 md:py-20 overflow-x-clip">
      <div className="container">
        <div className="tag">Never Miss a Beat</div>
        <h2 className="section-title mt-6">
          Curated news delivered to WhatsApp
        </h2>
        <h3 className="section-subtitle">Handpicked Stories</h3>
        <p className="section-description mt-2">Get the top headlines and stories that matter most, all in one place, without the noise</p>
        <h3 className="section-subtitle">Tailored for You</h3>
        <p className="section-description mt-2">Choose your favorite topics and receive news that matches your interests and preferences</p>
        <h3 className="section-subtitle">Daily Updates</h3>
        <p className="section-description mt-2">Receive your daily news briefing at the same time every morning, so you're always informed before you start your day</p>
        <h3 className="section-subtitle">Clean & Simple</h3>
        <p className="section-description mt-2">No ads, no clutter—just straightforward news designed for quick and easy reading.</p>
        <div className="relative">
        <Image src={messageMockup} alt='Message Mockup' className="mt-10 rounded-lg" />
        <Image src={messageIcon} alt="Message Icon" height={100} className=" hidden md:block absolute right-20 top-20 rotate-[20deg]"/>
        <Image src={cursorIcon} alt="Cursor Icon" height={100} className="hidden md:block absolute bottom-32 left-28 rotate-[90deg]"/>
        </div>
      </div>
    </section>
  );
};
