import Image from "next/image";
import { Karantina, Inter, Kaushan_Script } from "next/font/google";

const karantina = Karantina({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const kaushan = Kaushan_Script({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`bg-white font-sans dark:bg-white px-20 ${inter.className}`}>
      {/* Section 1 */}
      <section className="w-full flex justify-between  items-center">
        <div className="w-[50%]">
          <span className="text-[40px]">Hi, I’m Idham Asgap</span>
          <h1 className={`${karantina.className} text-[200px] leading-44`}>FULLSTACK<br /> DEVELOPER</h1>
          <p className="text-[20px] w-[60%] text-justify">
            Saya adalah seorang fullstack developer web dan mobile app, saya telah berpengalaman dalam bidang ini selama 2 tahun lebih, saya sangat tertarik dengan dunia teknoligi. selain itu saya juga senang membuat desain grafis dan 3d, berikut saya juga lampirkan cv saya dibawah.
          </p>
          <div className="mt-5">
            <a href="" className={`${kaushan.className} text-[20px] bg-black text-white px-10  py-2 rounded-full`}>My CV</a>
          </div>
        </div>
        <div className="w-[30%] rounded-b-full overflow-hidden">
          <Image
            src="/my-foto.png"
            alt="Next.js logo"
            width={500}
            height={200}
            priority
            className="w-full"
          />
        </div>
      </section>
      {/* section 2 */}
      <section className="grid grid-cols-2 items-center mt-20">
        <div className="">
          <span className={`${kaushan.className} text-[40px]`}>Lets</span>
          <h1 className={`${karantina.className} text-[200px] leading-44`}>EXPLORE MY<br /> PORTFOLIO</h1>
        </div>
        <div className="">
          <p className="text-[20px] w-[60%] text-justify">
            Berikut ini adalah beberapa projek saya yang saya kerjakan dalam 2 tahun lebih ini, untuk detailnya bisa lihat saja dibawah.
          </p>
        </div>
      </section>
      {/* card */}
      <div className="grid grid-cols-3 gap-10 justify-center mt-10">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-200 w-[80%] flex justify-center items-center rounded-4xl h-[400px]">
            Portfolio
          </div>
        ))}
      </div>
      {/* section 3 */}
      <section className="grid grid-cols-1 items-center mt-20">
        <div className="">
          <h1 className={`${karantina.className} text-[200px] leading-44`}>EXPERIENCE</h1>
        </div>
        <div className="">
          <p className="text-[20px] w-[60%] text-justify">
            Berikut ini adalah beberapa tempat saya bekerja.
            <ul className="list-disc ml-5">
              <li>PT SINARMAS TBK - Magang Kerja</li>
              <li>POLRES CIANJUR - Operator</li>
              <li>PT ORCA MOTO INDONESIA - Fullstack Developer</li>
            </ul>
          </p>
        </div>
      </section>
      {/* section 4 */}
      <section className="flex flex-row-reverse justify-between items-center w-full mt-20">
        <div className="">
          <h1 className={`${karantina.className} text-[200px] leading-44`}>OTHER<br/> MY SKILL</h1>
        </div>
        <div className="flex gap-5">
          <a href="" className={`${kaushan.className} text-[20px] bg-black text-white px-10  py-2 rounded-full`}>Drible</a>
          <a href="" className={`${kaushan.className} text-[20px] bg-black text-white px-10  py-2 rounded-full`}>Instagram</a>
          <a href="" className={`${kaushan.className} text-[20px] bg-black text-white px-10  py-2 rounded-full`}>Shutterstock</a>
        </div>
      </section>
      {/* card */}
      <div className="grid grid-cols-3 gap-10 justify-center mt-10">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-200 w-[80%] flex justify-center items-center rounded-4xl h-[400px]">
            Portfolio
          </div>
        ))}
      </div>
      {/* footer */}
      <footer className="mt-20">
        <div className="flex justify-between items-center">
          <div className="">
            <p className={`${karantina.className} text-[160px] leading-32`}>HAVE A PROJECT <br/> OR OPPORTUNITY ? LETS TALK</p>
          </div>
          <div className="text-[30px]">
            <div className="">
              <a href="">Linkedin</a>
            </div>
            <div className="">
              <a href="">Whatsapp</a>
            </div>
            <div className="">
              <a href="">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
