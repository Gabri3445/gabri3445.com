export interface ButtonProps {
  text: string;
  onClick?: () => void;
  isBig: boolean;
  sideColor: string;
}

function Button({ text, onClick, isBig, sideColor }: ButtonProps) {
  return (
    <div
      className="flex flex-row border border-white/75 w-96 bg-[#36313a]/70 hover:bg-[#59545c]/70 active:bg-[#252127]/70"
      onClick={onClick}
    >
      <div className={sideColor + " w-2.5 mr-1.5"}></div>
      <div className={isBig ? "my-2" : ""}>{text}</div>
    </div>
  );
}

export default Button;
