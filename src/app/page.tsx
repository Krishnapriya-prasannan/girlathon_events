
import PreEvents from '../components/PreEvents';
import Footer from '../components/Footer';
import Hero from '@/components/Hero';
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,theme(colors.pink.900/10),transparent_35%)]" />

      <div className="block sm:hidden absolute inset-0 bg-[radial-gradient(circle_at_5%_20%,theme(colors.pink.900/10),transparent_35%)]" />
      <Hero/>
      <PreEvents/>
      <Footer />
    </main>
  );
}
