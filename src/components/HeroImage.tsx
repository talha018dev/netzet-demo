import Image from 'next/image';
import heroImage from '../../public/hero-image.png';

export default function HeroImage() {
  return (
    <div className="flex items-center justify-center relative mx-auto w-full h-100 md:h-[679px] max-w-[666px] max-h-[679px]">
      <Image
        src={heroImage}
        alt="Fametonic App Interface"
        priority
        fill
        className="w-full h-auto object-contain"
      />
    </div>
  );
} 