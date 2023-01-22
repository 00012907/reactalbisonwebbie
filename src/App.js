import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Career from "./components/career"
import Ustunliklar  from "./components/ustunliklar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Ustunliklar />
        <Career/>


        {/* <Switch> */}
          {/* <Route path="/" exact component={Home} />
          <Route path="./components/career.js" exact component={Career} />
          <Route path="./components/ustunliklar.js" exact component={Ustunliklar} /> */}

        {/* </Switch> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
