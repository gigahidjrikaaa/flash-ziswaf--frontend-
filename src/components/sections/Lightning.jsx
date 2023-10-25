import Image from "next/image";
import Lightning from "@/../public/lightning.png";

export default function LightningSection() {
  return (
    <section
      id="lightning"
      className="text-white bg-orange-main py-[90px] font-inter"
    >
      <h1 className="text-[35px] md:text-[40px] xl:text-[64px] font-bold text-center mb-[90px] px-[5%]">
        Lightning Network?
      </h1>
      <div className="flex flex-col-reverse justify-center items-center xl:flex-row gap-[40px] xl:gap-[150px] xl:justify-center xl:items-start">
        <p className="text-[20px] max-w-[840px] text-justify px-[5%] md:px-0">
          The Lightning Network stands as a layer-2 innovation atop the Bitcoin
          blockchain, designed to facilitate swift transactions with minimal
          fees. Its remarkable capability lies in processing millions of
          transactions within a matter of seconds. Unlike traditional blockchain
          transactions, the Lightning Network enables users to execute
          transactions instantly, eliminating the need to wait for confirmation
          on the main blockchain. The key mechanism involves the establishment
          of payment channels between users. By opening these channels,
          participants can engage in a series of transactions without each one
          being recorded on the main blockchain.
          <br />
          <br />
          This approach not only accelerates transaction speed but also
          significantly reduces the associated fees. In essence, the Lightning
          Network serves as an agile and cost-effective solution, enhancing the
          overall efficiency and scalability of the Bitcoin ecosystem
        </p>
        <Image src={Lightning} alt="Lightning Logo" />
      </div>

      <h1 className="text-[32px] xl:text-[40px] font-bold text-center mb-[30px] md:mb-[42px] mt-[50px] lg:mt-[95px] px-[5%] md:px-0">
        Advantages of Lightning Network
      </h1>
      <h1 className="text-[40px] xl:text-[64px] font-bold text-center mb-20">
        Fast
      </h1>
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=SZVlmJKP7Chagdgo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="mx-auto w-[90%] lg:max-w-[900px] xl:max-w-[1100px] aspect-video"
      ></iframe>
    </section>
  );
}
