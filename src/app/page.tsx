import Image from "next/image";
import Menu from "./components/Menu";
import Highlight from "./components/Highlight";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full font-mono lg:flex lg:flex-col font-bold">
        <Menu />
        <Highlight />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
