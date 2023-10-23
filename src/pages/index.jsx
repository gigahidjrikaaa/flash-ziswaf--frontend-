import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/About";
import HomeSection from "@/components/sections/Home";
import LightningSection from "@/components/sections/Lightning";
import PICSection from "@/components/sections/PIC";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <PICSection />
      <LightningSection />
    </main>
  );
}
