import { CircleChevronRight, IndianRupee } from "lucide-react";

export const EarnReward = () => {
  return (
    <section className="bg-[#1a003d] p-6 text-white font-sans text-sm relative max-w-md mx-auto mt-2 shadow-lg">
      <header className="flex justify-between mb-3">
        <h2 className="text-xl font-extrabold leading-tight">Earn Rewards</h2>
        <span className="text-xs text-gray-300">Spinning remaining 5</span>
      </header>

      <div className="mb-6">
        <h3 className="text-purple-300 font-bold text-xl leading-snug">
          You played all your Spin
        </h3>
        <p className="text-purple-400 mt-1 mb-4 text-sm">Today spins: 0/5</p>
      </div>

      <div className="flex items-center gap-6">
        {/* <img
          src="/reward.gif"
          alt="Earn rewards animation"
          className="w-10 h-10 rounded-lg bg-transparent object-cover"
        /> */}
        <div className="flex flex-col justify-center flex-1">
          <button className="rounded-lg bg-white text-[#2e2059] font-semibold py-2 px-6 mb-2 shadow hover:bg-gray-100 transition">
            Play &amp; Win More Rewards
          </button>
          <div className="flex justify-between items-center text-yellow-400 font-semibold text-xs">
            <p>Unlock your financial freedom</p>
            <a href="." className="text-white underline hover:text-yellow-300">
              Save now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Learn = () => {
  return (
    <div className="w-full max-w-md bg-[#1a003d] mt-3  ">
      <h3 className="text-xl font-extrabold text-white mb-2 px-6 font-sans">
        Learn in a minute
      </h3>
      <div className="h-36 rounded-lg bg-[#2f2360] flex w-full max-w-md px-5 items-center justify-between">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-white">Earn Rewards</h4>
          <button className="button text-sm text-white font-semibold px-6 py-2 rounded-lg shadow transition hover:bg-purple-100">
            Watch
          </button>
        </div>
        <div>
          <img
            src="/gold-coin.png"
            alt="Earn Rewards"
            className="h-24 w-44 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;

export const Plan = () => {
  return (
    <div className="bg-[#1a003d] w-full p-4 mt-2">
      <button className="text-yellow-400 border-b-2 border-yellow-400 font-semibold mb-4">
        Gold <span className="text-white">Saving Plans</span>
      </button>
      {/* first plan */}
      <div
        className="flex gap-2 rounded-xl mt-2 bg-[#2a0a5c] p-2 items-center"
        style={{ background: "linear-gradient(135deg, #5f37cb, #9b59b6)" }}
      >
        <div className="w-16 h-16  rounded-lg flex items-center justify-center">
          <img src="/box1.webp" alt="" className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm text-white font-semibold">Save Daily</h4>
          <p className="text-xs  text-white mt-1 flex items-center gap-1">
            Start from
            <IndianRupee className="h-3 w-3" />
            500/day
          </p>
        </div>
        <div>
          <CircleChevronRight className="text-white w-6 h-6" />
        </div>
      </div>

      {/* second plan */}
      <div className="flex gap-2 rounded-xl mt-2  p-2 items-center bg-gradient-to-r from-yellow-500 bg-amber-600">
        <div className="w-16 h-16  rounded-lg flex items-center justify-center">
          <img src="/box1.webp" alt="" className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm text-white font-semibold">Save Daily</h4>
          <p className="text-xs  text-white mt-1 flex items-center gap-1">
            Start from
            <IndianRupee className="h-3 w-3" />
            500/day
          </p>
        </div>
        <div>
          <CircleChevronRight className="text-white w-6 h-6" />
        </div>
      </div>
      {/* third plan */}
      <div className="flex gap-2 mt-2 rounded-xl  p-2 items-center bg-gradient-to-r from-green-900 via-green-500 to-green-600">
        <div className="w-16 h-16  rounded-lg flex items-center justify-center">
          <img src="/box1.webp" alt="" className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm text-white font-semibold">Save Daily</h4>
          <p className="text-xs  text-white mt-1 flex items-center gap-1">
            Start from
            <IndianRupee className="h-3 w-3" />
            500/day
          </p>
        </div>
        <div>
          <CircleChevronRight className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
};


export const Referral=()=>{
    return(
        <div className="bg-[#1a003d] w-full p-4 mt-3">
        <div></div>
        <div></div>
        </div>
    )
}