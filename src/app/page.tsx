import PreEvents from '../components/PreEvents';
import Footer from '../components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/bg.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10">
        <Hero/>
        <PreEvents/>
        <Footer />
      </div>
    </main>
  );
}