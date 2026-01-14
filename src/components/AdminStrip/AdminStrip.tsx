export interface AdminStripProps {
  error: boolean;
}

function AdminStrip({ error }: AdminStripProps) {
  return (
    <div
      className={`w-full text-center text-sm md:text-base ${error ? "bg-[#691144]/90" : "bg-[#fecafe]"}`}
    >
      <span className={error ? "text-[#bf0541]" : "text-black"}>
        {error
          ? "Insufficient Priviliges to Perform Operation"
          : "You are the Administrator of this System"}
      </span>
    </div>
  );
}

export default AdminStrip;
