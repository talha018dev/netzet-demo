import CallToAction from './CallToAction';
import Features from './Features';
import HeroImage from './HeroImage';

export default function MainLayout() {
  return (
    <div className="relative max-w-[80%] mx-auto">
      <div className="absolute right-0 z-0">
        <HeroImage />
      </div>
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 max-w-[516px]">
        <div className="flex-1 max-w-2xl text-center lg:text-left text-white mt-15">
          <h1 className="text-[2.185rem] font-bold mb-0 leading-tight font-urbanist">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h1 className="text-[2.185rem] font-bold mb-6 font-urbanist" style={{ color: 'rgba(0, 231, 249, 1)', textShadow: '0px 4px 4px rgba(252, 0, 78, 1)' }}>
            Discover your way to success with Fametonic:
          </h1>
          <Features />
          <CallToAction />
        </div>
      </div>
    </div>
  );
} 