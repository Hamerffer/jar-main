import { ArrowDownCircle, ArrowUpCircle, Clock } from "lucide-react";
import Header from "./Header";

const History = () => {
  const transactions = [
    {
      id: 1,
      name: "Deposit",
      date: "Oct 10, 2025",
      amount: "+ ₹2,000",
      type: "credit",
    },
    {
      id: 2,
      name: "Withdrawal",
      date: "Oct 8, 2025",
      amount: "- ₹500",
      type: "debit",
    },
    {
      id: 3,
      name: "Spin Reward",
      date: "Oct 6, 2025",
      amount: "+ ₹100",
      type: "credit",
    },
    {
      id: 4,
      name: "Referral Bonus",
      date: "Oct 2, 2025",
      amount: "+ ₹50",
      type: "credit",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[
#473b74]  font-sans "
    >
      {/* Header */}
      <Header />

      <div className="bg-[#1a003d] p-4 rounded-xl shadow-md space-y-4 w-full max-w-sm mx-auto">
        {/* Section Title */}
        <h3 className="text-sm font-bold text-white">Gold Saving</h3>

        {/* Content */}
        <div className="flex gap-4 items-center">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/box.webp"
              alt="Gold Box"
              className="h-20 w-20 object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="text-white">
            <h4 className="text-sm font-semibold">
              Start your Gold Saving today
            </h4>
            <p className="text-xs text-gray-300 mt-1">
              Save daily and grow your wealth
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button className="button transition-colors duration-200 font-semibold  text-white text-xs py-4 w-full rounded-lg shadow-md">
          Save Daily
        </button>
      </div>
<div className="inline-flex items-center gap-1 text-gray-300 text-xs font-medium bg-[#2a003d] px-2 py-1 rounded-full">
  <Clock size={12} className="text-gray-300" />
  <span>History</span>
</div>

      {/* History List */}
      <div className=" rounded-2xl shadow-md divide-y divide-[#ffffff22]">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-4 hover:bg-[#2a1d61]/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              {tx.type === "credit" ? (
                <ArrowDownCircle className="w-6 h-6 text-green-400" />
              ) : (
                <ArrowUpCircle className="w-6 h-6 text-red-400" />
              )}

              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  {tx.name}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Clock size={12} /> {tx.date}
                </span>
              </div>
            </div>

            <span
              className={`text-sm font-semibold ${
                tx.type === "credit" ? "text-green-400" : "text-red-400"
              }`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
