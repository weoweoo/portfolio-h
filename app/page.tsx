import HeroSvg from "./assets/heroSVG";
import { Slide } from "../components/slide";
import { FloatingNav } from "@/components/floating-navbar";
import Grid from "./Grid";
import { AnimatedProjects } from "@/components/Animatedprojects";
import { projects } from "@/components/lib/data";
import Footer from "@/components/footer";
import ContactForm from "./contact";

export default function Home() {
  return (
    <main className=" h-screen relative px-10 gap-2">
      <FloatingNav
        navItems={[
          { name: 'About me', link: '#' },
          { name: 'Skills', link: '#skills' },
          { name: 'Projects', link: '#projects' },
          // { name: 'Contact', link: '#contact' },
        ]}
      />
      <section id="home" className="w-full h-full pt-20 md:pt-0">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-10 md:px-20">

        {/* Left side: Text */}
        <Slide delay={0.14}>
        <div className="w-full md:w-4/5 flex flex-col gap-8 z-[10] max-w-[750px]">
          <h1 className="text-white text-[40px] md:text-[50px] font-bold">
            Aspiring Frontend Developer
          </h1>
          <p className="text-gray-400 text-[18px] md:text-[28px]">
            Hi, I&apos;m Habsa — a Software Engineering graduate passionate about building intuitive, user-friendly interfaces.
            I enjoy solving problems, learning new technologies, and bringing creative ideas to life on the web.
          </p>

          <p className="flex items-center gap-1 w-fit hover:opacity-80 focus:outline-none focus:opacity-80">
          <a
            href='https://www.linkedin.com/in/habsa-binte-obaiyed-494470247/'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200 underline decoration-neutral-500 hover:underline-offset-2"
          >
            {/* LinkedIn Icon (SVG) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="flex-shrink-0"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-[18px] font-medium">Habsa Binte</span>
          </a>
          </p>
        </div>
        </Slide>

        {/* Right side: SVG */}
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </div>
      </section>

      <Grid />

      <AnimatedProjects project={projects} />

      {/* <ContactForm /> */}

      <Footer/>
    </main>
  );
}
