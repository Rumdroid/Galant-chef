import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-black/50 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary">FINELINE SAFETY SOLUTIONS</h1>
        </div>
      </div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}