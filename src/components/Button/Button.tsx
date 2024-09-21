export interface ButtonProps {
  text: string;
  onClick?: () => void;
  height?: string;
  width?: string;
  isBig: boolean;
  sideColor: string;
}

function Button({
  text,
  onClick,
  height,
  width,
  isBig,
  sideColor,
}: ButtonProps) {
  return (
    <div
      className={`last:mb-0 mb-2 flex flex-row border border-white/75 w-96  ${height ?? "h-fit"} ${width ?? "w-96"}
      bg-[#36313a]/70 hover:bg-[#59545c]/70 active:bg-[#252127]/70`}
      onClick={onClick}
    >
      <div className={sideColor + " w-2.5 mr-1.5"}></div>
      <div className={isBig ? "my-auto" : "text-sm my-auto"}>{text}</div>
    </div>
  );
}

export default Button;
