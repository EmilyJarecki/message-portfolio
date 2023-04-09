import "../style/App.css";
import "../style/projects.css";
import "../style/messaging.css";
import "../style/about.css";

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
