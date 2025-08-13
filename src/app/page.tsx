import Banner from '../components/Banner';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-urbanist">
      <Banner />
      <Header />
      <main className="pb-8">
        <MainLayout />
      </main>
    </div>
  );
}
