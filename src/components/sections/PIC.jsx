import Image from "next/image";
import Gigong from "@/../public/gigong.png";
import Mumtaz from "@/../public/mumtaz.png";
import Galih from "@/../public/galih.png";

export default function PICSection() {
  return (
    <section
      id="pic"
      className="flex flex-col justify-center items-center bg-white pb-[90px] px-[80px] font-inter text-orange-main"
    >
      <h1 className="text-[40px] font-bold w-full text-center xl:text-left mb-[30px]">
        People in Charge
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-[50px] place-items-center xl:place-items-start">
        <PicCard firstName="Giga" lastName="Hijdrika Aura Adkhy" />
        <PicCard firstName="Mumtaz" lastName="Humam Alfian Zulva" image={<Image src={Mumtaz} className="w-[70%]" alt="Mumtaz" />} />
        <PicCard firstName="Galih" lastName="Saputro" image={<Image src={Galih} className="w-[85%]" alt="Galih" />} />
      </div>
    </section>
  );
}

function PicCard({
  firstName = "FirstName",
  lastName = "Last Name",
  role = "Field Coordinator",
  image = (
    <Image src={Gigong} alt="Gigong" className="absolute bottom-[50px] w-[90%]" />
  ),
}) {
  return (
    <div className="flex flex-col max-w-[400px] w-full">
      <div className="bg-orange-main aspect-square rounded-[33px] flex justify-center items-center relative text-white overflow-hidden">
        {image}
        <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-b from-transparent to-orange-main to-[80%]">
          <div className="absolute bottom-0 pl-10 py-8">
            <h1 className="text-[45px] font-extrabold leading-[100%]">
              {firstName}
            </h1>
            <p className="text-[34px]">{lastName}</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-3 text-[30px]">{role}</p>
    </div>
  );
}
