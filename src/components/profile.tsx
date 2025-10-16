import {
  ArrowLeft,
  Code,
  Contact,
  EllipsisVertical,
  LanguagesIcon,
  LogOut,
  MessageCircleCodeIcon,
  User,
  User2,
  X,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import {
  MessageCircle,
  Phone,
  FileText,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { Navigation, showeditMEnu, view } from "@/store/store";

const Profile = () => {
  const { setOpen } = Navigation();
  const { showEditMenu, menu } = showeditMEnu();
  return (
    <>
      <div className="flex flex-col gap-3 p-3 bg-[#1a003d] min-h-screen">
        <div className="flex justify-between text-gray-400">
          <ArrowLeft size={24} onClick={() => setOpen("home")} />
          {menu ? (
            <X size={24} onClick={() => showEditMenu(!menu)} />
          ) : (
            <EllipsisVertical size={24} onClick={() => showEditMenu(!menu)} />
          )}
        </div>

        {/* User Info */}
        <div className="flex gap-3 items-center">
          {/* Avatar */}
          <div className="h-14 w-14 rounded-full bg-[#322361] flex items-center justify-center">
            <User
              className="h-6 w-6 text-gray-400 font-bold shadow-2xl"
              onClick={() => setOpen("userProfile")}
            />
          </div>

          {/* Username and Number */}
          <div className="flex flex-col">
            <h3 className="text-[#9a91b9] font-bold text-lg">Username</h3>
            <h4 className="text-gray-400 text-sm">90940950945</h4>
          </div>
        </div>
        <Nominee />
        <ForYou />
        <Gold />
        <GetHelp />
        <Setting />
        <Version />
        {menu && <EditMenu />}
      </div>
    </>
  );
};

export default Profile;

const Nominee = () => {
  const cards = [
    {
      id: 1,
      img: "/family-image.jpg",
      title: "Add a nominee to your account",
      time: "Safeguard your saving for the future",
    },
    {
      id: 2,
      img: "/car.webp",
      title: "Get verified",
      time: "Complete your KYC to unlock more features",
    },
  ];

  return (
    <section className=" text-white bg-gradient-to-r from-blue-500 to-purple-700 rounded-lg">
      <Carousel>
        <CarouselContent className="flex  ">
          {cards.map((card) => (
            <CarouselItem
              key={card.id}
              className="flex flex-col w-52   overflow-hidden mx-1 shadow-md  pl-0 "
            >
              <div className="mt-2 px-7 pb-3">
                <h4 className="text-green-400  text-xs md:text-sm font-semibold leading-snug line-clamp-2">
                  {card.title}
                </h4>
                <p className="text-gray-200 text-xs mt-1">{card.time}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export const ForYou = () => (
  <div className="flex justify-between items-center gap-6 bg-[#2f2360] px-4 py-3 rounded-2xl shadow-md">
    {[
      { img: "/box.webp", title: "Daily Savings" },
      { img: "/instant-saving.png", title: "Instant Savings" },
      { img: "/spins.png", title: "Spins" },
      { img: "/box.webp", title: "Rewards" },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-12 h-12 mb-2 object-contain drop-shadow-lg"
        />
        <h3 className="text-gray-300 text-xs font-semibold">{item.title}</h3>
      </div>
    ))}
  </div>
);

export const Gold = () => (
  <>
    {" "}
    <div className="text-yellow-300 text-sm font-bold tracking-wide">Gold</div>
    <div className="bg-[#2f2360] px-4 py-4 rounded-2xl shadow-md">
      <div className="grid grid-cols-4 gap-6 place-items-center">
        {[
          { img: "/box.webp", title: "Daily Savings" },
          { img: "/instant-saving.png", title: "Instant Savings" },
          { img: "/weekley-saving.webp", title: "Weekley saving" },
          { img: "/box.webp", title: "Monthly Savings" },
          { img: "/refer-earn.png", title: "Refer And Earn" },
          { img: "/withdrawl.png", title: "Withdraw saving" },
          { img: "/spins.png", title: "Spins" },
          { img: "/gold-coin.png", title: "Rewards" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-12 h-12 mb-2 object-contain drop-shadow-lg"
            />
            <h3 className="text-gray-300 text-xs font-semibold">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </>
);

const GetHelp = () => (
  <div className="flex flex-col gap-4 p-2 max-h-full  bg-[#1a003d]">
    {/* Title */}
    <h2 className="text-white text-sm font-extrabold tracking-wide mb-1">
      Get Help
    </h2>

    {/* Help Options */}
    <ul className="flex flex-col gap-1">
      {[
        { icon: HelpCircle, label: "FAQs" },
        { icon: MessageCircle, label: "Contact Us" },
        { icon: FileText, label: "Terms & Conditions" },
        { icon: ShieldCheck, label: "Privacy Policy" },
        { icon: Phone, label: "Support Hotline" },
      ].map(({ icon: Icon, label }, i) => (
        <li
          key={i}
          className="flex items-center gap-3 p-2 rounded-xl   transition-colors cursor-pointer"
        >
          <Icon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-300 text-sm font-medium">{label}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Setting = () => (
  <div className="flex flex-col gap-4 p-2 max-h-full mb-2 bg-[#1a003d]">
    {/* Title */}
    <h2 className="text-white text-sm font-extrabold tracking-wide mb-1">
      Setting
    </h2>

    {/* Help Options */}
    <ul className="flex flex-col gap-1">
      {[
        { icon: User2, label: "Add a Nominee" },
        { icon: Code, label: "Promo Code" },
        { icon: MessageCircleCodeIcon, label: "Notification settings" },
        { icon: LanguagesIcon, label: "Change app LAnguage" },
        { icon: LogOut, label: "Logout" },
      ].map(({ icon: Icon, label }, i) => (
        <li
          key={i}
          className="flex items-center gap-3 p-2 rounded-xl   transition-colors cursor-pointer"
        >
          <Icon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-300 text-sm font-medium">{label}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Version = () => {
  return (
    <div className="text-gray-400 text-xs text-center mb-9">Version 1.0.0</div>
  );
};

const EditMenu = () => {
  const { setOpen } = Navigation();
  const { showEditMenu, menu } = showeditMEnu();
  interface menuitem {
    icon: typeof User2;
    label: string;
    to: view;
  }

  const data: menuitem[] = [
    { icon: User2, label: "Edit Profile", to: "userProfile" },
    { icon: Contact, label: "Contact Us", to: "contactUs" },
  ];
  return (
    <div className="flex flex-col gap-2 fixed bottom-0 left-0 right-0 bg-[#2f2360] border-purple-400 p-4 rounded-t-3xl shadow-lg z-100">
      <div className="flex justify-between">
        <span className="text-white">Menu Options</span>
        <X
          className="w-5 h-5 text-gray-400 hover:text-white"
          onClick={() => showEditMenu(!menu)}
        />
      </div>
      <div>
        <ul className="flex flex-col gap-1">
          {data.map(({ icon: Icon, label, to }, i) => (
            <li
              key={i}
              className="flex items-center gap-3 p-2 rounded-xl   transition-colors cursor-pointer"
              onClick={() => setOpen(to)}
            >
              <Icon className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300 text-sm font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
