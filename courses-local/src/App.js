import "./App.css";
import Courses from "./Components/Pages/Courses";
import Header from "./Components/common/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import NotFound from "./Components/common/404Page/404";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Courses" component={Courses} />
          <Route path="/About" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
