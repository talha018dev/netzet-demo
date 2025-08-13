import CallToAction from './CallToAction';
import FeaturesMobile from './FeaturesMobile';
import HeroImage from './HeroImage';

export default function MobileLayout() {
  return (
    <div className="lg:hidden">
      {/* Hero Image - Mobile */}
      <div className="mb-8">
        <HeroImage isMobile={true} />
      </div>

      {/* Mobile Content */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p className="text-lg subtitle-gradient font-semibold mb-6">
          Discover your way to success with Fametonic:
        </p>
        
        <FeaturesMobile />
        <CallToAction isMobile={true} />
      </div>
    </div>
  );
} 