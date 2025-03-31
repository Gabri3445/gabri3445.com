export interface ButtonProps {
  text: string;
  onClick?: () => void;
  height?: string;
  width?: string;
  isBig: boolean;
  sideColor?: string;
  centered?: boolean;
  addBorderLast?: boolean;
}

function Button({
  text,
  onClick,
  height,
  width,
  isBig,
  sideColor,
  centered,
  addBorderLast,
}: ButtonProps) {
  return (
    <div
      //last:mb-0
      className={`${addBorderLast ? "" : "last:mb-0"} mb-2 flex flex-row border border-white/75 ${height ?? "h-fit"} ${width ?? "w-96"}
      bg-[#36313a]/70 hover:bg-[#59545c]/70 active:bg-[#252127]/70`}
      onClick={onClick}
    >
      {sideColor && <div className={sideColor + " w-2.5 mr-1.5"}></div>}
      <div
        className={`${isBig ? "" : "text-sm"} my-auto ${centered ? "mx-auto" : ""}`}
      >
        {text}
      </div>
    </div>
  );
}

// isBig ? "my-auto" : "text-sm my-auto mx-auto"

export default Button;
