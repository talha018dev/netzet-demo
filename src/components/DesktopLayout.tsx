import CallToAction from './CallToAction';
import Features from './Features';
import HeroImage from './HeroImage';

export default function DesktopLayout() {
  return (
    <div className="hidden lg:flex items-center justify-between gap-12 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p className="text-xl subtitle-gradient font-semibold mb-8">
          Discover your way to success with Fametonic:
        </p>
        
        <Features />
        <CallToAction />
      </div>

      {/* Right Content - Hero Image */}
      <div className="flex-1">
        <HeroImage />
      </div>
    </div>
  );
} 