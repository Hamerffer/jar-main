import Learn, { About, EarnReward, Plan, Referral } from "./earn-reward";
import Header from "./Header";
import { Herosection } from "./hero-section";

const Home = () => {
  return (
    <> <div className="md:max-w-[420px] mx-auto">
     <Header />
      <Herosection />
      <EarnReward />
      <Learn />
      <Plan />
      <About />
      <Referral />
      </div>
    </>
  );
};

export default Home;
