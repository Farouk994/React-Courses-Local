import "./App.css";
import Courses from "./Components/Pages/Courses";
import Header from "./Components/common/Header";
import { Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/Courses" component={Courses} />
        <Route path="/About" component={About} />
      </div>
    </div>
  );
}

export default App;
