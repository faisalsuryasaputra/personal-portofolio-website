import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="assets/coding-pov.png"
            className="absolute right-0 top-0 h-full opacity-40 md:opacity-75 object-cover pointer-events-none"
            alt="coding"
          />
          <div className="z-10 relative p-2">
            <p className="headtext text-white font-bold">Hi, I'm Faisal Surya Saputra</p>
            <p className="subtext text-xs sm:text-sm">
              Multidisciplinary Informatics Student with practical experience in end-to-end digital product development, UI/UX design, and AI-driven solutions. Strong in bridging technical implementation with user-centric design.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 overflow-hidden">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative min-h-[14rem]"
          >
            <p className="flex items-end text-3xl md:text-4xl font-bold text-gray-500/40 select-none">
              DESIGN & CODE CRAFT
            </p>
            <Card
              style={{ rotate: "15deg", top: "15%", left: "15%" }}
              text="UI/UX Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "45%", left: "38%" }}
              text="AI Solutions"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", bottom: "15%", left: "60%" }}
              text="Product Strategy"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "40%", left: "5%" }}
              text="User Research"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "45%" }}
              text="Full-Stack Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "55%", left: "75%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "60%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "5%", left: "5%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 relative overflow-hidden">
          <div className="z-10 w-full sm:w-[55%]">
            <p className="headtext">Based in Bandung, Indonesia</p>
            <p className="subtext text-xs sm:text-sm">
              Operating with strong time discipline, clear intent, and open to remote digital transformation initiatives worldwide.
            </p>
          </div>
          <figure className="absolute right-2 top-2 sm:left-[38%] sm:top-[10%] opacity-80">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative overflow-hidden">
          <div className="z-10 w-full sm:w-[50%]">
            <p className="headtext">Tech & Innovation Stack</p>
            <p className="subtext text-xs sm:text-sm">
              Bridging technical implementation with user-centric design, AI-driven solutions, and scalable web applications.
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 h-full flex items-center justify-center opacity-75">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
