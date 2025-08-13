import Image from 'next/image';
import heroImage from '../../public/hero-image.png';

export default function HeroImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={heroImage}
        alt="Fametonic App Interface"
        priority
        // width={666}
        // height={679}
        // className="w-full h-auto object-contain"
        sizes="(max-width: 768px) 100vw,(max-width: 1050px) 50vw"
      />
    </div>
  );
} 