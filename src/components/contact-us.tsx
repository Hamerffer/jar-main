import { Hand, X } from "lucide-react";
import { Navigation } from "@/store/store";

interface CardProps {
  img: string;
  title: string;
}

const issues = [
  { img: "/upi.svg", title: "UPI ID" },
  { img: "/wallet.png", title: "Wallet" },
  { img: "/refund.webp", title: "Refund" },
  { img: "/account.png", title: "Account" },
   { img: "/refund.webp", title: "Identitity verification" },
  { img: "/account.png", title: "Other query" },
 
];

const ContactUs = () => {
  const { setOpen } = Navigation();

  return (
    <div className="inset-0 w-full max-w-md bg-[#1a003d] text-white flex flex-col z-50 shadow-lg">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[#322361]">
        <h1 className="text-lg font-bold">Chat with us</h1>
        <button
          onClick={() => setOpen("profile")}
          aria-label="Close"
          className="hover:bg-white/10 p-1 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>
      </header>

      {/* Intro */}
      <section className="flex justify-between items-center p-4 border-b border-white/10">
        <div className="font-semibold text-base leading-tight max-w-[220px]">
          <div className="flex items-center gap-2">
            <span>Hi</span>
            <Hand className="text-yellow-500 h-5 w-5" />
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Select the issue you need help with
          </p>
        </div>
        <img src="/customer.png" className="h-10 w-10 object-contain" alt="Customer support" />
      </section>

      {/* Issue Cards */}
      <section className="grid grid-cols-2 gap-4 p-4 overflow-y-auto">
        {issues.map((issue, i) => (
          <Card key={i} {...issue} />
        ))}
      </section>

      {/* Button */}
      <div className="p-4 mb-16 mt-5">
        <button className="button transition-colors duration-200 font-semibold  text-white text-xs py-4 w-full rounded-lg shadow-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;

const Card = ({ img, title }: CardProps) => (
  <label className="flex  items-center justify-between gap-2 p-2 bg-[#322361]/40 rounded-xl cursor-pointer hover:bg-[#10b981]/20 transition border border-violet-200">
    <div className="flex flex-col gap-3">
    <img src={img} className="h-14 w-14 object-contain" alt={title} />
    <span className="text-xs font-medium">{title}</span>
    </div>
    <div>
    <input
      type="checkbox"
      name="issue"
      className=" cursor-pointer relative bottom-9"
      aria-label={title}
    />
    </div>
  </label>
);
