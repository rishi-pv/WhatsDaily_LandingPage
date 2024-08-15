import ArrowRight from '@/assets/arrow-right.svg';
import mobileMockup from '@/assets/Mobile_Mockup(Tilted).png';
import Image from 'next/image';
import WAMessageBlob from '@/assets/WhatsApp 3D Render.png';
import WAIcon from '@/assets/Whatsapp_3D.png';


export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#022c22,#ecfdf5_70%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-green-400 to-green-950 text-transparent bg-clip-text mt-6">
              Stay Informed,
              <br className="md:block" />
              Every Day
            </h1>
            <p className="text-xl tracking-tight text-green-950 mt-6">
              WhatsDaily delivers the latest news directly to your WhatsApp. Get curated stories and updates that matter to you, all in a single daily message.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Join for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className='h-5 w-5'/>
              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <Image src={mobileMockup} alt='Moblie Mockup' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-20'/>
            <Image src={WAIcon} alt='WA Icon 3D' height={220} width={220} className='hidden md:block -top-8 md:absolute'/>
            <Image src={WAMessageBlob} alt='WA Message Blob' height={120} className='hidden lg:block absolute top-[524px] left-[248px] rotate-[-10deg]'/>
          </div>
        </div>
      </div>
    </section>
  );
};
