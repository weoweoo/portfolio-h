import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { stack } from "@/components/lib/data";

const Grid = () => {
  return (
    <section id="skills" className="w-full min-h-screen flex flex-col md:flex-row gap-6 sm:gap-3 py-4 pt-5 md:pt-0 lg:pt-5">
      {/* Left bar*/}
      <div className="w-full md:w-1/3 h-auto md:h-[80vh]">
        <BentoGridItem
          id={1}
          title="Frontend"
          className="h-full min-h-[300px] md:min-h-[600px] bg-gradient-to-br from-zinc-800 to-stone-900"
          buttons= {stack.frontend.map(text => ({ text }))}
        />
      </div>
      {/* Main content grid */}
      <div className="w-full md:w-2/3 h-auto md:h-[80vh] ">
        <BentoGrid className="h-full max-w-none gap-6">

          {/* First row - full width (4 columns) */}
          <BentoGridItem
            id={2}
            title="Backend"
            className="md:col-span-4 md:row-span-1"
            buttons={stack.backend.map(text => ({ text }))}
          />
          
          {/* Second row */}
          <BentoGridItem
            id={3}
            title="Tools & Design"
            className="md:col-span-2 bg-transparent"
            buttons={stack.tools.map(text => ({ text }))}
          />
          <BentoGridItem
            id={4}
            title="Data Visualization"
            className="md:col-span-2 bg-transparent"
            buttons={stack.data.map(text => ({ text }))}
          />
          
          {/* Third row */}
          <BentoGridItem
            id={5}
            title="Work Experience"
            className="md:col-span-4 md:row-span-1"
            logo= "/work.jpg"
            header= "camb.ai - QA Engineer"
            description = "March 2024 - December 2024"
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;