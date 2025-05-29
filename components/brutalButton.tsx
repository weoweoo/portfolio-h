type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const BrutalistButton = ({ children, onClick, className = '' }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`border-[3px] border-black bg-gray-400 text-black 
        px-6 py-3 
        sm:px-3 sm:py-1 
        xs:px-4 xs:py-2 
        font-bold shadow-[4px_4px_0px_0px_#224563] 
        transition-all ${className}`}
    >
      {children}
    </button>

  );
};

export default BrutalistButton;
