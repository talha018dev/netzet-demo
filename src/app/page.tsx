
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-urbanist">
      {/* Top Banner */}
      <div className="banner-gradient py-3 px-4 text-center text-sm font-semibold">
        <span className="flex items-center justify-center gap-2">
          🚀 FRESH BEGINNINGS SALE: Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>

      {/* Header */}
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

      {/* Main Content */}
      <main className="px-4 lg:px-8 pb-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <p className="text-xl subtitle-gradient font-semibold mb-8">
              Discover your way to success with Fametonic:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-lg">Start growing your influence right away—no waiting required!</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-lg">Create viral TikToks and Reels step by step with easy-to-follow lessons</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-lg">Use a Personal AI Worker to boost your content</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-lg">Learn from expert-led courses designed for aspiring influencers</p>
              </div>
            </div>

            <button className="gradient-bg glow-effect text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform">
              GET STARTED &gt;
            </button>
            <p className="text-sm text-gray-400 mt-2">1-minute quiz for personalized Insights</p>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="/hero-image.png"
                alt="Fametonic App Interface"
                width={400}
                height={500}
                className="w-auto h-auto max-w-full max-h-[500px] object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Hero Image - Mobile */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src="/hero-image.png"
                alt="Fametonic App Interface"
                width={300}
                height={400}
                className="w-auto h-auto max-w-[280px] max-h-[350px] object-contain"
                priority
              />
            </div>
          </div>

          {/* Mobile Content */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <p className="text-lg subtitle-gradient font-semibold mb-6">
              Discover your way to success with Fametonic:
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-left">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-base">Start growing your influence right away—no waiting required!</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-base">Create viral TikToks and Reels step by step with easy-to-follow lessons</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-base">Use a Personal AI Worker to boost your content</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <span className="text-yellow-400 text-lg">✨</span>
                <p className="text-base">Learn from expert-led courses designed for aspiring influencers</p>
              </div>
            </div>

            <button className="gradient-bg glow-effect text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform w-full">
              GET STARTED &gt;
            </button>
            <p className="text-sm text-gray-400 mt-2">1-minute quiz for personalized Insights</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 lg:px-8 py-6 border-t border-gray-800">
        <div className="text-center text-sm text-gray-400 space-y-2">
          <p>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
          <p>Fametonic 2025 ©All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
