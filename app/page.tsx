import Hero from "./components/Hero";
import NewCollection from "./components/NewCollection";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Newest />
      <NewCollection />
    </div>
  );
}
