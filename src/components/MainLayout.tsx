import CallToAction from './CallToAction';
import Features from './Features';
import HeroImage from './HeroImage';

export default function MainLayout() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p className="text-lg lg:text-xl subtitle-gradient font-semibold mb-6 lg:mb-8">
          Discover your way to success with Fametonic:
        </p>
        
        <Features />
        <CallToAction />
      </div>

      {/* Right Content - Hero Image */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <HeroImage />
      </div>
    </div>
  );
} 