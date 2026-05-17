import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Usp } from '@/components/sections/usp';
import { Accommodation } from '@/components/sections/accommodation';
import { Bbq } from '@/components/sections/bbq';
import { FarmExperiences } from '@/components/sections/farm-experiences';
import { Gallery } from '@/components/sections/gallery';
import { Facilities } from '@/components/sections/facilities';
import { Qa } from '@/components/sections/qa';
import { Reservation } from '@/components/sections/reservation';
import { Access } from '@/components/sections/access';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Usp />
        <Accommodation />
        <Bbq />
        <FarmExperiences />
        <Gallery />
        <Facilities />
        <Qa />
        <Reservation />
        <Access />
      </main>
      <Footer />
    </>
  );
}
