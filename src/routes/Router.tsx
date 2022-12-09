import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:id'>
          <Coin />
        </Route>
        <Route path='/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
