
import Banner from '../components/Banner';
import DesktopLayout from '../components/DesktopLayout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MobileLayout from '../components/MobileLayout';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-urbanist">
      <Banner />
      <Header />
      
      {/* Main Content */}
      <main className="px-4 lg:px-8 pb-8">
        <DesktopLayout />
        <MobileLayout />
      </main>

      <Footer />
    </div>
  );
}
