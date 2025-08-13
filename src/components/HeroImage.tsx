import Image from 'next/image';

interface HeroImageProps {
  isMobile?: boolean;
}

export default function HeroImage({ isMobile = false }: HeroImageProps) {
  const imageProps = isMobile 
    ? {
        width: 300,
        height: 400,
        className: "w-auto h-auto max-w-[280px] max-h-[350px] object-contain"
      }
    : {
        width: 400,
        height: 500,
        className: "w-auto h-auto max-w-full max-h-[500px] object-contain"
      };

  return (
    <div className="flex justify-center">
      <div className="relative">
        <Image
          src="/hero-image.png"
          alt="Fametonic App Interface"
          {...imageProps}
          priority
        />
      </div>
    </div>
  );
} 