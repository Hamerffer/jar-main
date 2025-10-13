import Learn, {EarnReward, Plan} from "@/components/earn-reward";
import { Herosection } from "@/components/hero-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Herosection />
      <EarnReward />
      <Learn/>
      <Plan/>
    </>
  );
}

export default Route;
