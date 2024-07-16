import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";

const App = () => {

  // let's get darkmode as a state with a default OFF
  const [darkMode, setDarkMode] = useState(false);

  // we need to allow a change that default darkMode state
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
};

export default App;
