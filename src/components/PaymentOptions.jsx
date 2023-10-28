import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import RumahZIS from "@/../public/RumahZIS.png";
import LazisNU from "@/../public/LazisNU.png";
import LazisMu from "@/../public/LazisMu.png";
import { useState } from "react";

export default function PaymentOptions({ setOpenPaymentOptions }) {
  const [swiper, setSwiper] = useState(null);
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen z-[100]">
      <div
        onClick={(e) => {
          e.preventDefault();
          setOpenPaymentOptions(false);
        }}
        className="bg-black/[50%] absolute w-full h-full backdrop-blur-[5px] flex justify-center items-center"
      ></div>
      <div className="bg-white relative z-[50] rounded-[54px] font-inter text-orange-main px-[50px] md:px-[60px] xl:px-[72px] py-[45px] md:py-[50px] xl:py-[52px] w-[90%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1190px]">
        <h1 className="font-bold text-[35px] md:text-[40px] xl:text-[64px] leading-[100%]">
          Donation
        </h1>
        <p className="italic text-[20px] md:text-[25px] xl:text-[32px]">
          Choose your donation partner
        </p>
        <div className="flex justify-center items-center mt-[30px] mb-[60px] gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="68"
            viewBox="0 0 59 68"
            fill="none"
            className="flex-shrink-0 cursor-pointer w-[40px] xl:w-[59px]"
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <path
              d="M-1.70474e-06 34L58.5 0.225004L58.5 67.775L-1.70474e-06 34Z"
              fill="#DC7700"
            />
          </svg>
          <Swiper
            spaceBetween={40}
            onSwiper={(swiper) => {
              console.log(swiper);
              setSwiper(swiper);
            }}
            loop={true}
          >
            <SwiperSlide>
              <DonationPartner
                image={RumahZIS}
                name="Rumah ZIS"
                desc="Donates to the people of Yogyakarta. Focuses mainly on orphans, beggars, and poor students."
              />
            </SwiperSlide>
            <SwiperSlide>
              <DonationPartner
                image={LazisNU}
                name="LAZIS NU (YK Branch)"
                desc="Affiliated with the Nahdlatul Ulama. Collects and distributes zakat, infaq, and sadaqah for charitable and humanitarian purposes."
              />
            </SwiperSlide>
            <SwiperSlide>
              <DonationPartner
                image={LazisMu}
                name="LAZISMU Yogyakarta"
                desc="Affiliated with the Muhammadiyah movement. Collects ZISWAF in general."
              />
            </SwiperSlide>
          </Swiper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="68"
            viewBox="0 0 59 68"
            fill="none"
            className="rotate-180 flex-shrink-0 cursor-pointer w-[40px] xl:w-[59px]"
            onClick={() => {
              swiper.slideNext();
            }}
          >
            <path
              d="M-1.70474e-06 34L58.5 0.225004L58.5 67.775L-1.70474e-06 34Z"
              fill="#DC7700"
            />
          </svg>
        </div>
        <button className="w-full select-none bg-orange-main text-white font-bold rounded-full py-3 text-[25px] md:text-[32px] xl:text-[40px]">
          Donate
        </button>
      </div>
    </div>
  );
}

function DonationPartner({ image, name, desc }) {
  return (
    <div className="flex flex-col xl:flex-row gap-[55px] justify-center items-center select-none">
      <Image src={image} className="!flex-shrink-0" alt="Partner Logo" />
      <div className="flex flex-col justify-center">
        <h1 className="text-[25px] md:text-[32px] xl:text-[48px] font-bold">
          {name}
        </h1>
        <p className="text-[20px] xl:text-[25px] text-justify">{desc}</p>
        <div className="flex gap-3 items-center text-[22px] xl:text-[25px] italic font-semibold my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="38"
            viewBox="0 0 27 38"
            fill="none"
          >
            <path
              d="M13.5 0C6.04607 0 0 5.9565 0 13.3C0 23.275 13.5 38 13.5 38C13.5 38 27 23.275 27 13.3C27 5.9565 20.9539 0 13.5 0ZM13.5 18.05C10.8386 18.05 8.67857 15.922 8.67857 13.3C8.67857 10.678 10.8386 8.55 13.5 8.55C16.1614 8.55 18.3214 10.678 18.3214 13.3C18.3214 15.922 16.1614 18.05 13.5 18.05Z"
              fill="#DC7700"
            />
          </svg>
          Sleman, Yogyakarta
        </div>
        <div className="flex gap-3 items-center text-[22px] xl:text-[25px] italic font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M4.24643 24.7528C9.90949 30.4157 19.0896 30.4157 24.7527 24.7528C30.4158 19.0899 30.4158 9.91006 24.7527 4.24717C19.0896 -1.41572 9.90949 -1.41572 4.24643 4.24717C-1.41548 9.91006 -1.41548 19.0899 4.24643 24.7528ZM10.6786 5.48252L12.8361 7.64004C13.2677 8.07154 13.3593 8.73851 13.06 9.27093L12.2492 10.7104C12.1518 10.883 12.1137 11.0828 12.1408 11.2791C12.1678 11.4754 12.2584 11.6574 12.3988 11.7973L17.2023 16.6007C17.3423 16.7409 17.5245 16.8313 17.7208 16.8581C17.9171 16.8849 18.1168 16.8467 18.2892 16.7491L19.7288 15.9383C19.9878 15.7924 20.2874 15.7352 20.582 15.7757C20.8765 15.8161 21.1497 15.9519 21.3597 16.1622L23.5185 18.3209C23.7735 18.5764 23.9167 18.9227 23.9167 19.2836C23.9167 19.6446 23.7735 19.9909 23.5185 20.2464L22.4965 21.2683C21.9296 21.8339 21.1918 22.1965 20.3978 22.2999C19.6037 22.4033 18.7977 22.2417 18.1048 21.8402L18.0074 21.7845C13.7723 19.3647 10.2302 15.8973 7.72059 11.715L7.22992 10.896C6.81285 10.2021 6.63985 9.38867 6.73843 8.58511C6.83701 7.78155 7.20152 7.03404 7.77395 6.46152L8.75298 5.48252C8.87935 5.35598 9.02944 5.25559 9.19464 5.1871C9.35984 5.1186 9.53693 5.08335 9.71577 5.08335C9.89461 5.08335 10.0717 5.1186 10.2369 5.1871C10.4021 5.25559 10.5522 5.35598 10.6786 5.48252Z"
              fill="#DC7700"
            />
          </svg>
          +62 812-1234-1234
        </div>
      </div>
    </div>
  );
}
