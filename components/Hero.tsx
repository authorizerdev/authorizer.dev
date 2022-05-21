import { DatabaseList } from "./Databaselist";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { StartingSteps } from "./StartingSteps";
import { Team } from "./Team";
import { USPSection } from "./USPSection";

export default function Hero() {
  return (
    <>
      <USPSection />
      <StartingSteps />
      <Features />
      <DatabaseList />
      <Team />
      <Footer />
    </>
  );
}
