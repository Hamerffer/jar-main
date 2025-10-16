import Home from "@/components/home";
import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "../store/store";
import Profile from "@/components/profile";
import History from "@/components/history";
import UserProfile from "@/components/user-profile";
import NotificationPage from "@/components/notification";
import ContactUs from "@/components/contact-us";
import DailySaving from "@/components/daily-saving";
import MyPoints from "@/components/my-points";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { open } = Navigation();
  return (
    <>
      {open === "home" && <Home />}
      {open === "profile" && <Profile />}
      {open === "settings" && <Profile />}
      {open === "transaction" && <History />}
      {open === "userProfile" && <UserProfile />}
      {open === "notification" && <NotificationPage />}
      {open === "setting" && <Profile />}
      {open === "contactUs" && <ContactUs/>}
      {open === "DailySaving"&& <DailySaving/>}
      {open === "my-points" && <MyPoints/>}
     
    </>
  );
}

export default Route;
