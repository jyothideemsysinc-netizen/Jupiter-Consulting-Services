import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { Mission } from '../components/Mission';
import { Stats } from '../components/Stats';
import { Team } from '../components/Team';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Mission />
      <Stats />
      <Team />
      <CTA />
    </main>
  );
}
