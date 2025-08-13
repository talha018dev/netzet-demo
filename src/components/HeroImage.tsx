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
        // width={666}
        // height={679}
        className="w-full h-auto object-contain"
        // sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, (max-width: 1050px) 50vw, 100vw"
      />
    </div>
  );
} 