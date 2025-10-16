import { Gift, House, NotebookPen, Settings } from "lucide-react";

import { Navigation } from "@/store/store";
const BottomNav = () => {
    const {open ,setOpen} = Navigation();
    
  return (
    <div className="fixed bottom-0 w-full bg-[#1a003d] flex justify-around items-center p-3 text-white z-50 ">
      <House size={24}   className={open === "home" ? "text-white" : "text-gray-400"} onClick={()=>setOpen("home")} />
      <Gift size={24} className={open === "DailySaving" ? "text-white" : "text-gray-400"} onClick={()=>setOpen("DailySaving")}/>
      <NotebookPen size={24} className={open === "transaction" ? "text-white" : "text-gray-400"}onClick={()=>setOpen("transaction")} />
      <Settings size={24} className={open === "setting" ? "text-white" : "text-gray-400"} onClick={()=>setOpen("setting")}/>
    </div>
  );
};

export default BottomNav;
