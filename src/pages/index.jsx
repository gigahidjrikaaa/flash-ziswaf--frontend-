import Navbar from "@/components/Navbar";
import PaymentOptions from "@/components/PaymentOptions";
import AboutSection from "@/components/sections/About";
import HomeSection from "@/components/sections/Home";
import LightningSection from "@/components/sections/Lightning";
import PICSection from "@/components/sections/PIC";
import { useState } from "react";

export default function Home() {
  const [openPaymentOptions, setOpenPaymentOptions] = useState(false);
  return (
    <main>
      <Navbar />
      <HomeSection setOpenPaymentOptions={setOpenPaymentOptions} />
      <AboutSection />
      <PICSection />
      <LightningSection />
      {
        openPaymentOptions && (
          <PaymentOptions setOpenPaymentOptions={setOpenPaymentOptions} />
        )
      }
    </main>
  );
}
