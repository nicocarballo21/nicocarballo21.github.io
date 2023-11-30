import "./i18n/config";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
