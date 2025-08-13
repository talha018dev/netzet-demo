import Image from 'next/image';
import heroImage from '../../public/hero-image.png';

export default function HeroImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={heroImage}
        alt="Fametonic App Interface"
        priority
      />
    </div>
  );
} 