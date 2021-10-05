import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Teachers from "./components/Teachers/Teachers";
import Courses from "./components/Courses/Courses";
import Details from "./components/Details/Details";

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/courses">
            <Courses />
          </Route>

          <Route exact path="/teachers">
            <Teachers />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/details/:id">
            <Details />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );

}

export default App;
