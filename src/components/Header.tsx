export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-6 lg:px-8">
      <div className="text-2xl font-bold gradient-text">
        fame tonic
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">About us</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
      </nav>
      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
} 