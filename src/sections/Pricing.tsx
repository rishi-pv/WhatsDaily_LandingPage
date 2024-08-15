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
import CheckMark from '@/assets/check.svg'




export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">One All-Inclusive Subscription, No Tiers — First Month Free for a Limited Time!</p>
        <div>
          <div className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
            <h3 className='text-lg font-bold text-[#022c22]/50'>WhatsDaily Subscription</h3>
            <p className='section-description'>One Plan, All Features, No Hassle</p>
            <div>
              <span className='text-4xl font-bold tracking-tighter leading-none'>
                ₹30
              </span>
              <span>
                /month
              </span>
            </div>
            <ul>
              <li>
                <CheckMark className='h-6 w-6' />
                <span>Daily curated news directly on WhatsApp</span>
              </li>
              <li>
                <CheckMark className='h-6 w-6' />
                <span>Stay Informed with minimal effort</span>
              </li>
              <li>
                <CheckMark className='h-6 w-6' />
                <span>Special Updates and alerts included</span>
              </li>
              <li>
                <CheckMark className='h-6 w-6' />
                <span>No ads, just pure content</span>
              </li>
            </ul>
            <button className="btn btn-primary">Join for free</button>
          </div>
        </div>
      </div>
    </section>

  );
};
