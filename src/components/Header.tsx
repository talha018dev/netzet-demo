import Image from 'next/image';
import logoDesktop from '../../public/logo-desktop.png';

export default function Header() {
  return (
    <header className="max-w-[80%] mx-auto flex justify-between items-start mt-9">
      <div className="flex items-center mx-auto md:ml-0 md:mr-auto">
        <Image
          src={logoDesktop}
          alt="Fametonic Logo"
          priority
        />
      </div>
      <nav className="hidden md:flex items-center gap-10 mr-18">
        <a href="#" className="text-[#A9A9A9] hover:text-gray-300 transition-colors">About us</a>
        <a href="#" className="text-[#A9A9A9] hover:text-gray-300 transition-colors">Contact</a>
      </nav>
      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  )
} 