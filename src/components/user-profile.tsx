import { User, Mail, Phone, Lock, Save,  MoveLeftIcon } from "lucide-react";
import { Navigation } from "@/store/store";
const UserProfile = () => {
    const {setOpen} = Navigation();
  return (
    <div className="min-h-screen bg-[#1a003d] text-white p-6 font-sans">
      {/* Header */}
      <h2 className="text-white text-lg font-extrabold tracking-wide mb-5">
        <MoveLeftIcon onClick={()=>setOpen("profile")}/>
      </h2>

      {/* User Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="h-20 w-20 rounded-full bg-[#2f2360] flex items-center justify-center mb-3 shadow-md">
          <User className="h-10 w-10 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Username</h3>
        <p className="text-sm text-gray-400">user@example.com</p>
      </div>

      {/* Form */}
      <form className="p-5 rounded-2xl shadow-lg space-y-8">
        {/* Name */}
        <div className="flex items-center bg-[#2a1d61]/50 rounded-xl px-3 py-2">
          <User className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent outline-none text-sm text-gray-200 w-full"
            defaultValue="John Doe"
          />
        </div>

        {/* Email */}
        <div className="flex items-center bg-[#2a1d61]/50 rounded-xl px-3 py-2">
          <Mail className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent outline-none text-sm text-gray-200 w-full"
            defaultValue="john@example.com"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center bg-[#2a1d61]/50 rounded-xl px-3 py-2">
          <Phone className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-transparent outline-none text-sm text-gray-200 w-full"
            defaultValue="9876543210"
          />
        </div>

        {/* Password */}
        <div className="flex items-center bg-[#2a1d61]/50 rounded-xl px-3 py-2">
          <Lock className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Change Password"
            className="bg-transparent outline-none text-sm text-gray-200 w-full"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full mt-4 button ] font-bold py-2 rounded-xl transition-all flex items-center justify-center gap-2 text-white"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
