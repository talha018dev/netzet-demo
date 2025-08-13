import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <Image
          src="/hero-image.png"
          alt="Fametonic App Interface"
          width={400}
          height={500}
          className="w-auto h-auto max-w-[280px] max-h-[350px] lg:max-w-full lg:max-h-[500px] object-contain"
          priority
        />
      </div>
    </div>
  );
} 