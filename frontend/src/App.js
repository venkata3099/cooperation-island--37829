import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginBoard from "./containers/LoginBoard";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return <BrowserRouter>
    <Route path="/" component={HomePage} />
    <Switch>
      <Route path="/login" component={LoginBoard} />
      <Route path="/signup" component={LoginBoard} />
    </Switch>
  </BrowserRouter>
}

export default App;
