import Image from 'next/image';

export default function Banner() {
  return (
    <div className="banner-gradient py-3 px-4 text-center text-sm font-semibold">
      <span className="flex items-center justify-center gap-2 text-2xl font-extrabold">
        <Image
          src="/rocket.png"
          alt="Rocket"
          width={24}
          height={24}
          className="inline-block"
        />
        <span className="text-[#00E7F9]">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
      </span>
    </div>
  );
} 