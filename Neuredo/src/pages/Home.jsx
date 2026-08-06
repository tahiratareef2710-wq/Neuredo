import Header from "../components/Header";
import ScrollRail from "../components/ScrollRail";
import Hero from "../components/Hero";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Blog from "../components/Blog";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useScrollSpy } from "../hooks/useScrollSpy";

const SECTION_IDS = ["home", "about", "tracks", "blog", "reviews", "contact"];

export default function Home() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <>
      <Header activeId={activeId} />
      <ScrollRail activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Blog />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}