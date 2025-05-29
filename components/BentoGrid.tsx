import { cn } from "./lib/utils";
import BrutalistButton from "./brutalButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto",
        "h-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  buttons,
  logo, // New prop for logo
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  buttons?: { text: string }[];
  id: number;
  logo?: string; // Optional logo URL
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col space-y-4 rounded-xl",
        "border p-7 transition duration-200 hover:shadow-2xl border-white/[0.2] bg-zinc-900",
        className
      )}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-bold text-neutral-200 text-[16px]">
          <h1>
            {title}
          </h1>
        </div>
        
        
        <div className="flex items-start gap-4 mt-2 mb-2 text-neutral-400 text-[22px] pt-5">
          {logo && (
            <img 
              src={logo} 
              alt="Company logo" 
              className="w-14 h-14 object-contain flex-shrink-0"
            />
          )}

          <div className="flex flex-col">
            <h3 className="text-neutral-300 text-[20px]">{header}</h3>
            <h5 className="text-neutral-400 text-[18px]">
              {description}
            </h5>
          </div>
        </div>


        <div className="flex flex-wrap justify-center gap-8 mt-4 pt-6">
          {buttons?.map((button, index) => (
            <BrutalistButton
              key={index}
              className="text-[22px] py-3"
            >
              {button.text}
            </BrutalistButton>
          ))}
        </div>
      </div>
    </div>
  );
};