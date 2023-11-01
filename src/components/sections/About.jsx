import Logo from "@/../public/Logo.png";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-white !pt-[90px] xl:pt-[120px] py-[20px] md:py-[35px] xl:py-[50px] px-[5%] md:px-[50px] xl:px-[80px] font-inter font-bold"
    >
      <h1 className="text-orange-main text-center text-[35px] md:text-[40px] xl:text-[64px] w-full">
        About <span className="bg-orange-main text-white">Flash ZISWAF</span>
      </h1>
      <div className="flex flex-col xl:flex-row text-orange-main justify-center items-center xl:items-start mt-[50px] md:mt-[70px] xl:mt-[90px] gap-[40px] lg:gap-[50px] xl:gap-[70px]">
        <Image src={Logo} alt="Logo" className="w-[300px] xl:w-[430px] flex-shrink-0 aspect-square" />
        <p className="text-[20px] font-inter font-normal text-justify max-w-[735px]">
          FLASH ZISWAF, sebuah inovasi dalam pengelolaan dana amal, memanfaatkan
          teknologi Bitcoin Lightning Network untuk memberikan solusi yang
          efisien dan transparan dalam rangkaian ZISWAF (Zakat, Infaq, Shadaqah,
          dan Wakaf). Dengan fokus utama pada penyaluran dana zakat, kami
          menawarkan pendekatan yang cermat dan terarah, memastikan bahwa setiap
          sumbangan sampai kepada penerima yang tepat sesuai dengan syariat
          Islam. Melalui teknologi blockchain, para donatur dapat dengan mudah
          melacak penggunaan dana mereka, memungkinkan tingkat transparansi yang
          belum pernah terjadi sebelumnya. Selain itu, platform kami juga
          memungkinkan penyaluran dana sedekah secara murah, cepat, dan dapat
          dilacak dengan mudah untuk bantuan korban bencana dan proyek
          kemanusiaan internasional, menjembatani kesenjangan antara donatur dan
          penerima dengan efisiensi yang tinggi. 
          <br/>
          <br/>
          Selain itu, kami juga
          menawarkan solusi inovatif untuk pengelolaan dana wakaf yang sesuai
          dengan prinsip syariah Islam. Melalui integrasi teknologi blockchain,
          kami memungkinkan pengelolaan dana wakaf dengan benar dan transparan,
          memastikan bahwa dana tersebut digunakan sesuai dengan tujuan yang
          telah ditentukan. Keamanan dan privasi data adalah prioritas utama
          kami, sehingga Anda dapat yakin bahwa dana dan informasi pribadi Anda
          terlindungi dengan baik. Dengan aplikasi yang mudah digunakan,
          platform kami memberikan pengalaman donatur yang lebih baik,
          memudahkan mereka dalam memberikan kontribusi untuk tujuan amal dengan
          cepat dan efisien. Dengan platform kami, kami berkomitmen untuk
          meningkatkan pengalaman beramal Anda dan memberikan dampak positif
          yang lebih besar dalam ZISWAF.
        </p>
      </div>
    </section>
  );
}
