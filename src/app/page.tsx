
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-urbanist">
      <Banner />
      <Header />
      
      {/* Main Content */}
      <main className="px-4 lg:px-8 pb-8">
        <MainLayout />
      </main>

      <Footer />
    </div>
  );
}
