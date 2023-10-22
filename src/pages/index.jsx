import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/About";
import HomeSection from "@/components/sections/Home";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <AboutSection />
    </main>
  );
}
