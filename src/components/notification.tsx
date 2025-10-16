import { X, Bell,  } from "lucide-react"; 

import { Navigation } from "@/store/store";

export default function NotificationPage() { 
    const{setOpen} = Navigation();
  return (
    <div className="md:w-[360px] fixed inset-0 w-full max-w-md  text-white p-6 flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Notifications</h1>
        <div className="flex items-center gap-2">
        
          <button className=" p-1 rounded-full">
            <X className="w-5 h-5 text-gray-400 hover:text-white" onClick={()=>setOpen("home")}/>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {["Rewards", "Transactions", "Platform"].map((tab) => (
          <button
            key={tab}
            className="bg-[#232323] text-xs px-3 py-1 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notifications */}
    <div className="space-y-6">
  {/* Today Notification */}
  <div>
    <div className="text-xs text-gray-400 mb-2">TODAY</div>
    <div className="flex items-start gap-3">
      <img
        src="/gold-coin.png"
        alt="Gold Coin"
        className="w-6 h-6 mt-1"
      />
      <div>
        <div className="font-semibold text-white">You saved ₹50 in Gold!</div>
        <div className="text-xs text-gray-400">
          Your 24K gold balance just grew. Keep stacking daily to reach your goal faster!
        </div>
        <button className="text-yellow-400 text-xs font-bold mt-1 hover:underline">
          View Savings
        </button>
      </div>
      <div className="ml-auto text-xs text-gray-400">09:32</div>
    </div>
  </div>

  {/* Earlier Notification */}
  <div>
    <div className="text-xs text-gray-400 mb-2">OCTOBER 12</div>
    <div className="flex items-start gap-3">
      <img
        src="/box.webp"
        alt="Gold Bar"
        className="w-6 h-6 mt-1"
      />
      <div>
        <div className="font-semibold text-white">
          Your Gold Vault Reached ₹10,000!
        </div>
        <div className="text-xs text-gray-400">
          Amazing progress! You’re just ₹2,000 away from unlocking your reward tier.
        </div>
        <button className="text-yellow-400 text-xs font-bold mt-1 hover:underline">
          Check Rewards
        </button>
      </div>
      <div className="ml-auto text-xs text-gray-400">11:10</div>
    </div>
  </div>

  {/* Past Notification */}

</div>

    </div>
  );
}