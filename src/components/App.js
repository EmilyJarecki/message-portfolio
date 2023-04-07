import "../App.css";
import "../projects.css";
import Projects from "./Projects";
import Messaging from "./Messaging";
import About from "./About";

function App() {
  return (
    <div className="App parent">
      <div className="div1">
        <Projects />
      </div>
      <div className="div2">
        <About />
      </div>
    </div>
  );
}

export default App;
