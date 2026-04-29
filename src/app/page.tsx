import "../styles/App.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../features/hero/Hero";
import Skills from "../features/skills/Skills";
import Project from "../features/projects/Project";
import Contact from "../features/contact/Contact";

function HomePage() {
  return (
    <>
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>
      <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
