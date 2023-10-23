import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Home1 from "@/../public/home-1.png";
import Home2 from "@/../public/home-2.png";
import Home3 from "@/../public/home-3.png";
import Home4 from "@/../public/home-4.png";
import LightningNetwork from "@/../public/lightning-network.png";
import "swiper/css";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen relative pb-[120px]">
      <div className="top-0">
        <Swiper
          spaceBetween={0}
          allowTouchMove={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide className="relative min-h-screen">
            <Image
              src={Home1}
              className="absolute w-screen min-w-[920px] select-none"
              alt="Home 1"
            />
            <SliderContent />
          </SwiperSlide>
          <SwiperSlide className="relative min-h-screen">
            <Image
              src={Home2}
              className="absolute w-screen min-w-[920px] select-none"
              alt="Home 2"
            />
            <SliderContent
              headerTitle={"Donate to Mosque Construction"}
              headerContent={
                "Make a million prayers possible, one brick at a time."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="relative min-h-screen">
            <Image
              src={Home3}
              className="absolute w-screen min-w-[920px] select-none"
              alt="Home 3"
            />
            <SliderContent 
              headerTitle={"Donate to Orphans"}
              headerContent={
                "Be their hero. Be their hope. Be the change."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="relative min-h-screen">
            <Image
              src={Home4}
              className="absolute w-screen min-w-[920px] select-none"
              alt="Home 4"
            />
            <SliderContent
              headerTitle={"Donate to Disaster Relief"}
              headerContent={
                "Help rebuild and reconstruct society."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function SliderContent({headerTitle, headerContent}) {
  return (
    <div className="text-[20px] md:text-[25px] xl:text-[32px] relative z-1 flex flex-col gap-[50px] md:gap-[80px] xl:gap-[115px] justify-start pt-[100px] md:pt-[150px] xl:pt-[200px] items-center min-h-screen font-inter">
      <div>
        <h1 className="text-[35px] md:text-[40px] xl:text-[64px] px-[44px] text-shadow-orange text-orange-main font-bold text-center">
          {headerTitle || "Donate to Palestinians"}
        </h1>
        <p className="text-center max-w-[90%] mx-auto">
          {headerContent || "Help our brethren to fight for their freedom."}
        </p>
      </div>

      <div className="max-w-[90%] md:max-w-[600px] xl:max-w-[900px] overflow-hidden bg-white rounded-[40px] xl:rounded-[60px] pb-[55px]">
        <p className="w-full py-[8%] px-[5%] md:py-[50px] md:px-[30px] xl:py-[60px] xl:px-[44px] rounded-[40px] xl:rounded-b-[60px] bg-orange-main text-center">
          Then steadfastly continue to duly establish the Prayer, and
          <span className="font-bold"> give the Zakât-Charity</span>.
          <br />
          <span className="italic">(Sûrat Al-Mujâdilah, 58:13)</span>
        </p>
        <div className="text-orange-main pt-[60px] pb-5 px-[5%] md:px-[30px] xl:px-[44px] flex flex-col justify-center items-center gap-[60px]">
          <p className="text-center max-w-[800px] text-[25px] md:text-[30px] xl:text-[40px] mx-auto">
            Faster and more transparent donations with
            <span className="font-bold"> Lightning Network!</span>
          </p>
          <Image
            src={LightningNetwork}
            className="w-full"
            alt="Lightning Network"
          />
          <div className="flex flex-col xl:flex-row gap-5 justify-evenly w-full font-bold">
            <button className="bg-orange-main text-white rounded-full flex-shrink-0 py-5 xl:px-20">
              Learn Now
            </button>
            <button className="box-border text-orange-main border-[3px] border-orange-main rounded-full flex-shrink-0 py-5 xl:px-20">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
