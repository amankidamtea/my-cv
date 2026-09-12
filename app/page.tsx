import Image from "next/image";
import { Karantina, Inter, Kaushan_Script } from "next/font/google";

const karantina = Karantina({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const kaushan = Kaushan_Script({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`bg-white font-sans dark:bg-white px-4 sm:px-8 md:px-12 lg:px-20 ${inter.className}`}>
      <div className="flex gap-4  fixed top-5 right-0 left-0  w-full justify-center py-2 px-2">
        <div className="bg-black/60 backdrop-blur-md rounded-full shadow py-2 flex gap-4 lg:w-fit w-full px-10 text-white">
          <a href="">About</a>
          <a href="">Portfolio</a>
          <a href="">Skill</a>
          <a href="">Tools kit</a>
        </div>
      </div>
      {/* Section 1 */}
      <section className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 pt-10 md:pt-0">
        <div className="w-full md:w-[50%]">
          <span className="text-[24px] sm:text-[32px] md:text-[40px] ">Hi, I&apos;m Idham Asgap</span>
          <h1 className={`${karantina.className} text-[64px] mt-2 sm:text-[100px] md:text-[140px] lg:text-[200px] leading-[0.85]`}>
            FULLSTACK<br /> DEVELOPER
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-3 w-full md:w-[80%] lg:w-[60%] text-justify italic">
            Hi, I’m Idham, a Full Stack Developer with over 2 years of experience building web and mobile applications.

            I enjoy building digital products from end to end — from designing the interface and developing the frontend, to building APIs, managing databases, and deploying applications to production. I’m particularly interested in creating systems that can solve real-world problems and make processes more efficient.

            Technology isn’t my only interest. I also enjoy graphic design and 3D design, which allows me to explore the creative side of building digital products.

            For me, development is not just about writing code. It’s about understanding problems, finding the right solutions, and continuously learning along the way.
          </p>
          <div className="mt-5">
            <a href="" className={`${kaushan.className} text-[16px] sm:text-[20px] bg-black text-white px-6 sm:px-10 py-2 rounded-full inline-block`}>
              My CV
            </a>
          </div>
        </div>
        <div className="w-[60%] sm:w-[45%] md:w-[30%] rounded-b-full overflow-hidden">
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
      <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-16 md:mt-20 gap-6 md:gap-4">
        <div className="">
          <span className={`${kaushan.className} text-[28px] sm:text-[34px] md:text-[40px]`}>Lets</span>
          <h1 className={`${karantina.className} text-[56px] sm:text-[90px] md:text-[130px] lg:text-[200px] leading-[0.85]`}>
            EXPLORE MY<br /> PORTFOLIO
          </h1>
        </div>
        <div className="">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] w-full md:w-[80%] lg:w-[60%] text-justify italic">
            Here are some of the projects I’ve worked on throughout my 2+ years of experience as a Full Stack Developer. Each project represents my experience in building web and mobile applications, solving real-world problems, and exploring different technologies.
          </p>
        </div>
      </section>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-center mt-10">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-200 w-full flex justify-center items-center rounded-4xl h-60 sm:h-72 md:h-100">
            Portfolio
          </div>
        ))}
      </div>

      {/* section 3 */}
      <section className="grid grid-cols-1 items-center mt-16 md:mt-20">
      <div>
        <h1
          className={`${karantina.className} text-[56px] sm:text-[100px] md:text-[150px] lg:text-[200px] leading-[0.85]`}
        >
          EXPERIENCE
        </h1>
      </div>

      <div className="mt-10">
        <div className="text-[16px] sm:text-[18px] md:text-[20px] w-full md:w-[90%] lg:w-[80%]">
          <p className="mb-8 text-justify">
            Here are some of the professional experiences and projects that have
            contributed to my journey in technology, development, and creative work.
          </p>

          <div className="space-y-8">
            {/* PT Orca Moto Indonesia */}
            <div className="border-t border-black/20 pt-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h2 className="font-semibold">
                    PT ORCA MOTO INDONESIA
                  </h2>
                  <p className="text-gray-600">
                    Full Stack Developer
                  </p>
                </div>

                <span className="text-gray-500">
                  May 2024 — Present
                </span>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Develop and maintain web and mobile applications to support
                business and operational processes. Build REST APIs, dashboards,
                authentication systems, real-time features, and manage application
                deployment and infrastructure.
              </p>
            </div>

            {/* Freelance Designer */}
            <div className="border-t border-black/20 pt-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h2 className="font-semibold">
                    FREELANCE
                  </h2>
                  <p className="text-gray-600">
                    Graphic & 3D Designer
                  </p>
                </div>

                <span className="text-gray-500">
                  2020 — Present
                </span>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Work on various graphic design and creative projects, including
                visual concepts, digital assets, branding materials, and 3D
                visualization. Combine technical and creative skills to create
                functional and visually engaging digital experiences.
              </p>
            </div>

            {/* POLRES Cianjur */}
            <div className="border-t border-black/20 pt-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h2 className="font-semibold">
                    POLRES CIANJUR
                  </h2>
                  <p className="text-gray-600">
                    Data Entry / Operator
                  </p>
                </div>

                <span className="text-gray-500">
                  2021 · 10 months
                </span>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Performed data entry, data processing, administrative
                documentation, and maintained data accuracy to support daily
                operational activities.
              </p>
            </div>

            {/* PT Sumalindo */}
            <div className="border-t border-black/20 pt-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h2 className="font-semibold">
                    PT SUMALINDO HUTANI JAYA II
                  </h2>
                  <p className="text-gray-600">
                    Forestry Planning Intern
                  </p>
                </div>

                <span className="text-gray-500">
                  Internship
                </span>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Assisted the forestry planning team with data collection,
                documentation, planning activities, and preparation of
                planning-related reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* section 4 */}
      <section className="flex flex-col md:flex-row-reverse justify-between items-center w-full mt-16 md:mt-20 gap-6 md:gap-4">
        <div className="">
          <h1 className={`${karantina.className} text-[56px] sm:text-[100px] md:text-[140px] lg:text-[200px] leading-[0.85] text-center md:text-left`}>
            OTHER<br /> MY SKILL
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          <a href="" className={`${kaushan.className} text-[14px] sm:text-[18px] md:text-[20px] bg-black text-white px-5 sm:px-8 md:px-10 py-2 rounded-full`}>
            Drible
          </a>
          <a href="" className={`${kaushan.className} text-[14px] sm:text-[18px] md:text-[20px] bg-black text-white px-5 sm:px-8 md:px-10 py-2 rounded-full`}>
            Instagram
          </a>
          <a href="" className={`${kaushan.className} text-[14px] sm:text-[18px] md:text-[20px] bg-black text-white px-5 sm:px-8 md:px-10 py-2 rounded-full`}>
            Shutterstock
          </a>
        </div>
      </section>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-center mt-10">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-200 w-full flex justify-center items-center rounded-4xl h-60 sm:h-72 md:h-100">
            Portfolio
          </div>
        ))}
      </div>

      {/* footer */}
      <footer className="mt-16 md:mt-20 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          <div className="">
            <p className={`${karantina.className} text-[40px] sm:text-[70px] md:text-[110px] lg:text-[160px] leading-[0.9]`}>
              HAVE A PROJECT <br /> OR OPPORTUNITY ? LETS TALK
            </p>
          </div>
          <div className="text-[18px] sm:text-[24px] md:text-[30px] flex flex-row md:flex-col gap-4 md:gap-0">
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
