import { Coins, MoveLeftIcon, X } from "lucide-react";
import { Navigation, Price } from "@/store/store";

const DailySaving = () => {
  const { setOpen } = Navigation();
  const { setPrice, price } = Price();
  const progress = 65;

  return (
    <>
      <div className="max-w-md mx-auto mt-4 font-sans text-white">
        {/* Header */}
        <div className="flex items-center mb-5 px-4">
          <MoveLeftIcon
            className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
            onClick={() => setOpen("home")}
          />
          <h1 className="text-sm font-bold ml-4">Daily Saving</h1>
          <X className="w-5 h-5 text-gray-400 ml-auto cursor-pointer hover:text-white transition-colors" />
        </div>

        {/* Progress Card */}
        <div className="flex items-center gap-4   rounded-2xl shadow-inner mx-4">
          {/* Progress Circle Placeholder */}
          <div
            className="w-20 h-20 flex items-center justify-center rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/box.webp')" }}
          >
            <span className="text-sm font-bold text-white">{progress}%</span>
          </div>

          {/* Text Info */}
          <div className="flex-1">
            <p className="text-gray-300 text-sm">Reach your Goal</p>
            <h3 className="text-lg font-bold text-[#a137ed]">
              3x Faster by Saving Daily
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Keep saving to hit your target!
            </p>
          </div>
        </div>

        {/* Info with Coin Icon */}
        <div className="flex items-center justify-center gap-2 mt-4 bg-[#2a045c] p-2 rounded-xl text-xs text-yellow-200 mx-4">
          <Coins className="w-4 h-4" />
          <span>Your money is saved in 24k gold</span>
        </div>

        {/* Instruction Text */}
        <div className="text-sm font-semibold text-gray-200 mt-4 px-4">
          Enter the amount you want to save daily
        </div>

        {/* Input Field */}
        <div className="mt-2 px-4">
          <input
            type="number"
            value={price}
            placeholder="Enter amount"
            className="w-full p-3 rounded-2xl border border-gray-600 bg-[#1a003d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-4 overflow-x-auto py-4 px-2 scrollbar-hide">
          {[20, 50, 100, 200, 500, 1000].map((price) => (
            <div
              key={price}
              className="flex-shrink-0 px-6 py-3 bg-gradient-to-br from-purple-600 to-purple-800 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer text-center"
              onClick={() => setPrice(price)}
            >
              ${price}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-24  p-2 rounded-xl  mx-4">
          <Coins className="w-4 h-4" />
          <span className="text-yellow-200 text-xs ">
            Your money is saved in 24k gold
          </span>
        </div>
        <div className="text-center ">
          <span className="text-white text-sm font-bold ">
            Powered by xyz Gold
          </span>
        </div>
        <button className="mt-4 w-[90%] mx-auto block button  text-white font-semibold py-4 rounded-xl text-xs  transition-all duration-300">
          Setup Daily Saving
        </button>
      </div>

      <div className="mt-3  p-3 rounded-2xl mb-9">
        <div className="grid grid-cols-4  place-items-center">
          <img
            src="/visa.png"
            alt="Visa"
            className="w-10 h-6 object-contain rounded-md  "
          />
          <img
            src="/bhim.png"
            alt="MasterCard"
            className="w-13 h-6 object-contain rounded-md "
          />
          <img
            src="/paytm.png"
            alt="Paytm"
            className="w-19 h-6 object-contain rounded-md  "
          />
          <img
            src="/google-pay.png"
            alt="UPI"
            className="w-13 h-6 object-contain rounded-md  "
          />
        </div>
      </div>
    </>
  );
};

export default DailySaving;
