import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const App = () => {
  return (
      <section className={"app"}>
        <Navbar />
        <AboutMe />
        <Projects />
      </section>
  );
}

export default App;