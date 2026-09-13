"use client";
import Image from "next/image";
import { Karantina, Inter, Kaushan_Script } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { MenuIcon, X } from "lucide-react";

const karantina = Karantina({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const kaushan = Kaushan_Script({ weight: "400", subsets: ["latin"] });

const portFolioData = [
  {
    title: "Optracs",
    image: "/portfolio/orca-ecomerce.png",
    link: "https://optracs.com/",
    category: "Web",
  },
  {
    title: "Optracs",
    image: "/portfolio/optracs.png",
    link: "https://optracs.com/",
    category: "Web",
  },
  {
    title: "Optracs",
    image: "/portfolio/coreapi.png",
    link: "https://optracs.com/",
    category: "Web",
  },
  {
    title: "Optracs",
    image: "/portfolio/harada.png",
    link: "https://optracs.com/",
    category: "Web",
  },
];

const toolSets = [
  { title: "VS Code", image: "/toolset/vscode.png" },
  { title: "Docker Desktop", image: "/toolset/docker.png" },
  { title: "Postman", image: "/toolset/postman.png" },
  { title: "Figma", image: "/toolset/figma.png" },
  { title: "Blender", image: "/toolset/blender.png" },
  { title: "Inkscape", image: "/toolset/inkscape.png" },
  { title: "CorelDraw", image: "/toolset/coreldraw.png" },
  { title: "Trello", image: "/toolset/trello.png" },
  { title: "Claude", image: "/toolset/claude.png" },
  { title: "ChatGPT", image: "/toolset/chatgpt.png" },
];

// Nav order = scroll order. "about" is Section 1 (the hero/intro section).
const navItems = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "toolset", label: "Toolset" },
  { id: "techstack", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
];

// Height of the fixed navbar + a little breathing room, used so the scrolled-to
// section doesn't end up hidden behind the pill navbar.
const SCROLL_OFFSET = 96;

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const toolsetRef = useRef<HTMLElement>(null);
  const techstackRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  // Controls the slide-in nav panel below the `md` breakpoint. From `md` up,
  // the nav is always visible as a static pill and this flag has no effect.
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sectionRefs = React.useMemo(
    () => ({
      about: aboutRef,
      portfolio: portfolioRef,
      toolset: toolsetRef,
      techstack: techstackRef,
      experience: experienceRef,
    }),
    []
  );

  const [activeSection, setActiveSection] = useState<string>("about");

  const handleScrollTo = (id: string) => {
    const element = sectionRefs[id as keyof typeof sectionRefs]?.current;
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
    setMobileNavOpen(false);
  };

  // Scroll-spy: whichever section sits in the "focus band" (roughly the
  // middle of the viewport) becomes the active nav highlight.
  useEffect(() => {
    const elements = Object.entries(sectionRefs)
      .map(([id, ref]) => ({ id, el: ref.current }))
      .filter((entry): entry is { id: string; el: HTMLElement } => !!entry.el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        // Prefer the entry closest to the top of the focus band.
        const closest = visible.reduce((best, entry) =>
          entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best
        );

        const id = closest.target.getAttribute("data-section");
        if (id) setActiveSection(id);
      },
      {
        // Focus band: a thin strip roughly a third of the way down the viewport.
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <div className={`bg-white font-sans dark:bg-white px-4 sm:px-8 md:px-12 lg:px-20 ${inter.className}`}>
      {/* navbar */}
      <div className="fixed top-5 left-0 right-0 z-50 flex w-full justify-center px-2 py-2">
        {/* mobile trigger bar: visible below md, and hidden while the panel is open */}
        <div
          className={`${
            mobileNavOpen ? "hidden" : "flex"
          } w-full items-center justify-between rounded-full bg-black/50 px-4 py-2 text-white shadow backdrop-blur-md md:hidden`}
        >
          <h1 className={`${kaushan.className} text-2xl`}>Idham Asegap</h1>
          <button onClick={() => setMobileNavOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </button>
        </div>

        {/* nav panel: static pill row from md up, slide-in panel from the right below md */}
        <div
          className={`fixed inset-y-0 right-0 z-50 flex w-3/4 max-w-xs flex-col items-start justify-start gap-2 bg-black/50 px-6 py-8 text-white shadow backdrop-blur-md transition-transform duration-300 ease-in-out ${
            mobileNavOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:z-auto md:w-fit md:max-w-none md:translate-x-0 md:flex-row md:items-center md:justify-center md:gap-1 md:rounded-full md:bg-black/50 md:px-8 md:py-2 ${inter.className}`}
        >
          {/* close button only exists below md; from md up the panel is always visible so there's nothing to close */}
          <button
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close menu"
            className="mb-4 self-end md:hidden"
          >
            <X />
          </button>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`w-full rounded-full px-3 py-2 text-left text-xs transition-colors duration-300 sm:text-sm md:w-fit md:px-5 md:text-center md:text-base ${
                activeSection === item.id
                  ? "bg-white text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* backdrop: tap outside the panel to close it (mobile only) */}
        {mobileNavOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setMobileNavOpen(false)}
          />
        )}
      </div>

      {/* Section 1 — About */}
      <section
        ref={aboutRef}
        data-section="about"
        className="flex w-full scroll-mt-24 flex-col items-center justify-between gap-10 pt-32 md:flex-row md:gap-8 md:pt-40"
      >
        <div className="w-full md:w-[50%]">
          <span className="text-[24px] sm:text-[32px] md:text-[40px]">Hi, I&apos;m Idham Asgap</span>
          <h1 className={`${karantina.className} mt-2 text-[64px] leading-[0.85] sm:text-[100px] md:text-[140px] lg:text-[200px]`}>
            FULLSTACK
            <br /> DEVELOPER
          </h1>
          <p className="mt-5 w-full text-justify text-[16px] italic leading-relaxed sm:text-[18px] md:w-[80%] md:text-[20px] lg:w-[60%]">
            Hi, I’m Idham, a Full Stack Developer with over 2 years of experience building web and mobile applications.
            <br />
            <br />
            I enjoy building digital products from end to end — from designing the interface and developing the
            frontend, to building APIs, managing databases, and deploying applications to production. I’m
            particularly interested in creating systems that can solve real-world problems and make processes more
            efficient.
            <br />
            <br />
            Technology isn’t my only interest. I also enjoy graphic design and 3D design, which allows me to explore
            the creative side of building digital products.
            <br />
            <br />
            For me, development is not just about writing code. It’s about understanding problems, finding the right
            solutions, and continuously learning along the way.
          </p>
          <div className="mt-6">
            <a
              href=""
              className={`${kaushan.className} inline-block rounded-full bg-black px-6 py-2 text-[16px] text-white sm:px-10 sm:text-[20px]`}
            >
              My CV
            </a>
          </div>
        </div>
        <div className="w-[60%] overflow-hidden rounded-b-full sm:w-[45%] md:w-[30%]">
          <Image
            src="/my-foto.png"
            alt="Idham Asgap"
            width={500}
            height={200}
            priority
            className="w-full"
          />
        </div>
      </section>

      {/* Section 2 — Portfolio */}
      <section ref={portfolioRef} data-section="portfolio" className="mt-24 scroll-mt-24 md:mt-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-6">
          <div>
            <span className={`${kaushan.className} text-[28px] sm:text-[34px] md:text-[40px]`}>Lets</span>
            <h1 className={`${karantina.className} text-[56px] leading-[0.85] sm:text-[90px] md:text-[130px] lg:text-[200px]`}>
              EXPLORE MY
              <br /> PORTFOLIO
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="w-full text-justify text-[16px] italic sm:text-[18px] md:w-[80%] md:text-[20px] lg:w-[60%]">
              Here is a collection of projects that showcase my work across technology and creative design. From
              building web and mobile applications to creating 2D graphics and 3D designs, each project reflects my
              interest in combining technical skills with creativity to bring ideas into reality.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
              <a
                href=""
                className={`${kaushan.className} rounded-full bg-black px-5 py-2 text-[14px] text-white sm:px-8 sm:text-[18px] md:px-10 md:text-[20px]`}
              >
                Dribbble
              </a>
              <a
                href=""
                className={`${kaushan.className} rounded-full bg-black px-5 py-2 text-[14px] text-white sm:px-8 sm:text-[18px] md:px-10 md:text-[20px]`}
              >
                Instagram
              </a>
              <a
                href=""
                className={`${kaushan.className} rounded-full bg-black px-5 py-2 text-[14px] text-white sm:px-8 sm:text-[18px] md:px-10 md:text-[20px]`}
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {portFolioData.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-60 w-full items-start justify-center overflow-hidden rounded-4xl bg-gray-200 p-2 sm:h-72 md:h-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={200}
                priority
                className="w-[50%] object-cover shadow-2xl"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Section 3 — Toolset */}
      <section ref={toolsetRef} data-section="toolset" className="mt-24 scroll-mt-24 md:mt-32">
        <div className="flex w-full flex-col items-center justify-between md:flex-row-reverse">
          <h1 className={`${karantina.className} text-center text-[56px] leading-[0.85] sm:text-[100px] md:text-left md:text-[140px] lg:text-[200px]`}>
            MY TOOLSET
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-2 justify-center gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-5">
          {toolSets.map((tool, i) => (
            <div
              key={i}
              className="flex h-60 w-full items-center justify-center rounded-4xl bg-white shadow-lg sm:h-72 md:h-70"
            >
              <Image
                src={tool.image}
                alt={tool.title}
                width={500}
                height={200}
                priority
                className="w-[30%] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Tech Stack */}
      <section ref={techstackRef} data-section="techstack" className="mt-24 scroll-mt-24 md:mt-32">
        <h1 className={`${karantina.className} text-[56px] leading-[0.85] sm:text-[100px] md:text-[150px] lg:text-[200px]`}>
          TECH STACK
        </h1>

        <div className="mt-10 w-full text-[16px] sm:text-[18px] md:w-[90%] md:text-[20px] lg:w-[80%]">
          <p className="mb-8 text-justify italic">
            Technologies and tools I use to build digital products, from frontend and backend development to mobile
            applications, deployment, and creative design.
          </p>

          <div className="space-y-8">
            {[
              { label: "FRONTEND", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
              {
                label: "BACKEND",
                items: [
                  "PHP",
                  "Laravel",
                  "REST API",
                  "Laravel Sanctum",
                  "Laravel Passport",
                  "Laravel Reverb",
                  "WebSocket",
                  "Eloquent ORM",
                ],
              },
              { label: "MOBILE", items: ["React Native", "Expo"] },
              { label: "DATABASE", items: ["MySQL"] },
              { label: "DEVOPS & DEPLOYMENT", items: ["Docker", "Nginx", "VPS", "Git", "GitHub"] },
              { label: "DESIGN & 3D", items: ["Figma", "Inkscape", "Blender"] },
            ].map((group) => (
              <div key={group.label} className="border-t border-black/20 pt-5">
                <h2 className="font-semibold">{group.label}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="rounded-full border border-black/20 px-3 py-1.5 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Experience */}
      <section ref={experienceRef} data-section="experience" className="mt-24 scroll-mt-24 md:mt-32">
        <div className="flex w-full justify-end">
          <h1 className={`${karantina.className} text-[56px] leading-[0.85] sm:text-[100px] md:text-[150px] lg:text-[200px]`}>
            EXPERIENCE
          </h1>
        </div>

        <div className="mt-10 flex justify-end">
          <div className="w-full text-[16px] sm:text-[18px] md:w-[90%] md:text-[20px] lg:w-[80%]">
            <p className="mb-8 text-justify italic">
              Here are some of the professional experiences and projects that have contributed to my journey in
              technology, development, and creative work.
            </p>

            <div className="space-y-8">
              {[
                {
                  org: "PT ORCA MOTO INDONESIA",
                  role: "Full Stack Developer",
                  period: "May 2024 — Present",
                  desc: "Develop and maintain web and mobile applications to support business and operational processes. Build REST APIs, dashboards, authentication systems, real-time features, and manage application deployment and infrastructure.",
                },
                {
                  org: "FREELANCE",
                  role: "Graphic & 3D Designer",
                  period: "2020 — Present",
                  desc: "Work on various graphic design and creative projects, including visual concepts, digital assets, branding materials, and 3D visualization. Combine technical and creative skills to create functional and visually engaging digital experiences.",
                },
                {
                  org: "POLRES CIANJUR",
                  role: "Data Entry / Operator",
                  period: "2021 · 10 months",
                  desc: "Performed data entry, data processing, administrative documentation, and maintained data accuracy to support daily operational activities.",
                },
                {
                  org: "PT SUMALINDO HUTANI JAYA II",
                  role: "Forestry Planning Intern",
                  period: "Internship",
                  desc: "Assisted the forestry planning team with data collection, documentation, planning activities, and preparation of planning-related reports.",
                },
              ].map((job) => (
                <div key={job.org} className="border-t border-black/20 pt-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="font-semibold">{job.org}</h2>
                      <p className="text-gray-600">{job.role}</p>
                    </div>
                    <span className="text-gray-500">{job.period}</span>
                  </div>
                  <p className="mt-4 text-justify italic leading-relaxed text-gray-700">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="mt-24 pb-10 md:mt-32">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-4">
          <p className={`${karantina.className} text-[40px] leading-[0.9] sm:text-[70px] md:text-[110px] lg:text-[160px]`}>
            HAVE A PROJECT <br /> OR OPPORTUNITY ? LETS TALK
          </p>
          <div className="flex flex-row gap-6 text-[18px] sm:text-[24px] md:flex-col md:gap-5 md:text-[30px]">
            <div className="flex items-center gap-3 text-[12px] md:text-[17px]">
              <Image src="/icon/linkedin.png" alt="LinkedIn" width={20} height={20} className="object-contain" />
              <a href="">Linkedin</a>
            </div>
            <div className="flex items-center gap-3 text-[12px] md:text-[17px]">
              <Image src="/icon/wa.png" alt="WhatsApp" width={20} height={20} className="object-contain" />
              <a href="">Whatsapp</a>
            </div>
            <div className="flex items-center gap-3 text-[12px] md:text-[17px]">
              <Image src="/icon/email.png" alt="Email" width={20} height={20} className="object-contain" />
              <a href="">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}