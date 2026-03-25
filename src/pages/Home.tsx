import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { RSVPForm } from '@/components/RSVPForm';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-y-hidden">
      <Hero color="white" />

      <RSVPForm />

      <Footer />
    </div>
  );
};
