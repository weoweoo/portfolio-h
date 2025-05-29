import { cn } from "./lib/utils";
import BrutalistButton from "./brutalButton";
import { Boxes } from "./bgbox";

export const FrontendBentoGridItem = ({
  className,
  title,
  buttons,
}: {
  className?: string;
  title?: string | React.ReactNode;
  header?: string;
  description?: string | React.ReactNode;
  buttons?: { text: string }[];
  id: number;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col space-y-4 rounded-xl",
        "border p-7 transition duration-200 hover:shadow-2xl border-white/[0.2] bg-zinc-900",
        "relative overflow-hidden", // for the boxes background
        className
      )}
    >
      {/* Boxes background - only for this component */}
      <div className="absolute inset-y-0 left-0 z-0 w-[20vw] h-[20vw] ">
        <Boxes className="w-full h-full" />
      </div>
      
      <div className="relative z-10 transition duration-200 group-hover/bento:translate-x-2 flex flex-col justify-between h-full overflow-hidden">
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-bold text-neutral-600 dark:text-neutral-200 text-[16px]">
          <h1>
          {title}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-4 pt-18">
          {buttons?.map((button, index) => (
            <BrutalistButton
              key={index}
              className="text-xl md:text-[24px] py-3"
            >
              {button.text}
            </BrutalistButton>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};