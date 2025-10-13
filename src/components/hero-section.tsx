import { Gift, HandCoins, Landmark } from "lucide-react";

export const Herosection = () => {
  return (
    <div className="bg-[#1a003d]  p-5 w-full text-white font-sans relative text-sm">
      {/* Header */}
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          Hello, <span className="font-bold">xyz</span>
        </div>
        <div className="flex items-center gap-2 bg-[#2f215f] bg-opacity-10 rounded-2xl px-2 py-1 text-xs">
          <span className="text-[#e26a75]"><Gift /></span>
          <span>You got</span>
          <span className="text-[#EFCC56]">0/5 cards</span>
        </div>
      </div>
      {/* Card Section */}
      <div className="bg-[#473b74] rounded-xl px-4 py-3 text-xs mb-1">
        <div className=" rounded-lg text-[#EEE] flex items-center gap-1 bg-[#221943] w-full py-3 px-2">
          Your first gold coin
          <span className="text-sm text-amber-200"><HandCoins /></span>
        </div>
        <div className="flex justify-between items-center text-[#b0a8e3] mt-2">
          <div className="flex items-center gap-2">
            {/* Replace with svg/png if needed */}
            <span role="img" aria-label="safe"><Landmark className="h-4 w-4" /></span>
            <div>
              Your Savings<br/>in 24K Gold
            </div>
          </div>
          <div className="border-l border-[#6e5fcf] pl-4 font-semibold md:text-lg text-white">
            ₹45433<br/>1838.0gm
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-5  mt-5">
        <button className="py-2 px-6 w-1/2 rounded-lg border border-[#6e5fcf] bg-transparent text-white font-semibold">
          Withdraw
        </button>
        <button className="py-2 px-6 rounded-lg button w-1/2 text-white font-semibold border-none">
          Start saving
        </button>
      </div>
    </div>
  );
};
