import ArrowRight from '@/assets/arrow-right.svg';
import Image from 'next/image';
import Logo from '@/assets/WhatsDaily_Logo(Rounded).png';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='flex justify-center items-center py-3 bg-green-950 text-white text-sm gap-3'>
        <p className='text-white/60 hidden md:block'>Daily news at the best place possible</p>
        <div className='inline-flex gap-1 justify-centre items-center'>
          <p className='font-medium'>Join Today</p>
          <ArrowRight className='h-4 w-4 inline-flex items-center justify-center' />
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-centre justify-between'>
            <Image src={Logo} alt='WD Logo' height={50} width={50} />
            <MenuIcon className='h-5 w-5 md:hidden' />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className='bg-green-950 text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Join for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
