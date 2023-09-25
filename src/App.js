import Navbar from "./navbar";
import Home from "./Home";
import Create from "./Create";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import BlogsDetails from "./BlogsDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogsDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
