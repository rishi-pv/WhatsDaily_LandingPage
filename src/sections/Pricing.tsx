// const pricingTiers = [
//   {
//     title: "Free",
//     monthlyPrice: 0,
//     buttonText: "Get started for free",
//     popular: false,
//     inverse: false,
//     features: [
//       "Up to 5 project members",
//       "Unlimited tasks and projects",
//       "2GB storage",
//       "Integrations",
//       "Basic support",
//     ],
//   },
//   {
//     title: "Pro",
//     monthlyPrice: 9,
//     buttonText: "Sign up now",
//     popular: true,
//     inverse: true,
//     features: [
//       "Up to 50 project members",
//       "Unlimited tasks and projects",
//       "50GB storage",
//       "Integrations",
//       "Priority support",
//       "Advanced support",
//       "Export support",
//     ],
//   },
//   {
//     title: "Plan Details",
//     monthlyPrice: 30,
//     buttonText: "Get started for free",
//     features: [
//       "Up to 5 project members",
//       "Unlimited tasks and projects",
//       "200GB storage",
//       "Integrations",
//       "Dedicated account manager",
//       "Custom fields",
//       "Advanced analytics",
//       "Export capabilities",
//       "API access",
//       "Advanced security features",
//     ],
//   },
// ];
'use client';
import CheckMark from '@/assets/check.svg';
import CircleMark from '@/assets/circle.svg';
import { motion } from 'framer-motion';



export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">One All-Inclusive Subscription, No Tiers — First Month Free for a Limited Time!</p>
        <div className='py-8'>
          <div className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#022c22,#d1fae5_70%)]">
            <h3 className='text-lg font-bold text-[#022c22]/70'>WhatsDaily Subscription</h3>
            <p className='section-description'>One Plan, All Features, No Hassle</p>
            <div className='flex items-baseline gap-1 mt-[30px]'>
              <span className='text-4xl font-bold tracking-tighter leading-none'>
                ₹30
              </span>
              <span className='tracking-tight font-bold'>
                /month
              </span>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
              <ul className='flex flex-col my-8 gap-5'>
                <li className='items-center flex gap-4'>
                  <CheckMark className='h-6 w-6' />
                  <span>Daily curated and insights news directly on WhatsApp</span>
                </li>
                <li className='items-center flex gap-4'>
                  <CheckMark className='h-6 w-6' />
                  <span>Stay Informed with minimal effort</span>
                </li>
                <li className='items-center flex gap-4'>
                  <CheckMark className='h-6 w-6' />
                  <span>Special Updates and alerts included</span>
                </li>
                <li className='items-center flex gap-4'>
                  <CheckMark className='h-6 w-6' />
                  <span>No ads, just pure content</span>
                </li>
              </ul>
              <div className=' text-sm px-4 py-1.5 rounded-xl border border-white/60 bg-emerald-950/60'>
                <motion.span
                  animate={{
                    backgroundPositionX: "-100%",
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 3,
                    ease: 'linear'
                  }}
                  className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'>
                  Coming soon
                </motion.span>
                <ul className='flex flex-col my-8 gap-5'>
                  <li className='items-center flex gap-4'>
                    <CircleMark className='h-6 w-6' />
                    <span>Personalized Content</span>
                  </li>
                  <li className='items-center flex gap-4'>
                    <CircleMark className='h-6 w-6' />
                    <span>Regional News</span>
                  </li>
                  <li className='items-center flex gap-4'>
                    <CircleMark className='h-6 w-6' />
                    <span>Multimedia Content</span>
                  </li>
                  <li className='items-center flex gap-4'>
                    <CircleMark className='h-6 w-6' />
                    <span>Community Discussions</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-primary w-full mt-[30px]">Join for free</button>
          </div>
        </div>
      </div>
    </section>

  );
};
