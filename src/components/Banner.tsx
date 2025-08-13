import Image from 'next/image';

export default function Banner() {
  return (
    <div className="banner-gradient py-3 px-4 text-center text-sm font-semibold text-balance mx-auto">
      <div className="text-base lg:text-2xl font-extrabold text-center lg:text-left inline-block">

        <span className="text-[#00E7F9] relative">
          FRESH BEGINNINGS SALE:
          <Image
            src="/rocket.png"
            alt="Rocket"
            width={24}
            height={24}
            className="absolute top-0 -left-8 mr-2"
          />
        </span>
        Extra 25% OFF, Limited Spots - start your journey today!
      </div>
    </div>
  );
} 