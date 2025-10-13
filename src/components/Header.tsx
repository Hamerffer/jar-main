import { useState } from "react";
import { Bell, RadioTower, ShieldUser, User } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#1a003d] h-14 flex items-center px-4 justify-between">
      {/* Left: User Icon */}
      <div className="flex items-center gap-2">
        <User className="h-7 w-7 text-white p-1 bg-[#2a0055] rounded-full" />
      </div>

      {/* Center: Live & Gold Price */}
      <div className="flex gap-4 items-center text-white  bg-[#30055a] p-2 rounded-2xl">
        <div className="flex items-center gap-1 mb-1">
          <RadioTower className="h-5 w-5 text-[#e26a75]" />
          <span className="text-xs font-medium">Live</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs">Gold Price</span>
          <span className="text-xs font-semibold">12000/gm</span>
        </div>
      </div>

      {/* Right: Notifications */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleMenu}
          className="p-2 bg-[#2a0055] rounded-full"
        >
          <Bell className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={toggleMenu}
          className="p-2 bg-[#2a0055] rounded-full"
        >
          <ShieldUser className="h-5 w-5 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
