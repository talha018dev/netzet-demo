import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src="/hero-image.png"
        alt="Fametonic App Interface"
        width={800}
        height={600}
        className="w-full h-full object-cover lg:object-contain"
        priority
      />
    </div>
  );
} 