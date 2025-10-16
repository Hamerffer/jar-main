import { MoveLeftIcon } from "lucide-react";
import { Navigation } from "@/store/store";

const MyPoints = () => {
  const { setOpen } = Navigation();

  return (
    <div className="text-white max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
      {/* ===== Header Section ===== */}
      <section
        className="relative bg-cover bg-center overflow-hidden shadow-lg rounded-b-2xl md:rounded-3xl md:mt-6"
        style={{ backgroundImage: "url('/light.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Header */}
        <div className="relative z-10 flex items-center p-4 md:p-6">
          <button
            onClick={() => setOpen("home")}
            className="p-1 rounded-full hover:bg-white/10 transition"
          >
            <MoveLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-300 hover:text-white" />
          </button>
          <h1 className="text-lg md:text-2xl font-bold mx-5">My Points</h1>
        </div>

        {/* Points Display */}
        <div className="relative z-10 flex flex-col items-center justify-center py-10 px-6 md:py-16 md:px-10">
          <p className="text-5xl md:text-7xl font-extrabold text-yellow-400">
            1,250
          </p>
          <p className="text-sm md:text-base text-gray-200 mt-2">
            Keep earning rewards!
          </p>
        </div>
      </section>

      {/* ===== Buttons Section ===== */}
      <div className="flex gap-3 mt-5 px-2 md:px-6 md:gap-6">
        <button className="w-1/2 py-3 md:py-4 rounded-lg button text-xs md:text-sm font-semibold text-white shadow-md hover:opacity-90 transition">
          Earn Points
        </button>
        <button className="w-1/2 py-3 md:py-4 rounded-lg bg-white text-black text-xs md:text-sm font-semibold border border-[#6e5fcf] hover:bg-gray-100 transition">
          Use Points
        </button>
      </div>

      {/* ===== History Section ===== */}
      <div className="mt-6 md:mt-10 md:px-4">
        <h3 className="text-xl md:text-3xl font-bold font-serif text-yellow-300 text-center mb-3">
          History
        </h3>
        <div className="bg-[#1a003d] rounded-xl shadow-inner divide-y divide-white/10 md:rounded-2xl">
          <HistoryItem title="Saved 24K Gold" date="Oct 10, 2023" points={+500} />
          <HistoryItem title="Referred a Friend" date="Oct 9, 2023" points={+300} />
          <HistoryItem title="Daily Login" date="Oct 7, 2023" points={+50} />
          <HistoryItem title="Completed Profile" date="Oct 6, 2023" points={+100} />
        </div>
      </div>
    </div>
  );
};

export default MyPoints;

/* ===== History Item Component ===== */
const HistoryItem = ({
  title,
  date,
  points,
}: {
  title: string;
  date: string;
  points: number;
}) => (
  <div className="flex justify-between items-center p-4 md:p-5 hover:bg-white/5 transition">
    <div>
      <p className="text-sm md:text-base font-medium text-gray-200">{title}</p>
      <p className="text-xs md:text-sm text-gray-400">{date}</p>
    </div>
    <p
      className={`text-sm md:text-base font-semibold ${
        points > 0 ? "text-green-400" : "text-red-400"
      }`}
    >
      {points > 0 ? `+${points}` : points}
    </p>
  </div>
);
