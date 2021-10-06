import {BrowserRouter as Router, Route} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Layout>
<Route exact path='/'><Home/></Route>
<Route path='/cart'><Cart/></Route>
      </Layout>
    </Router>
  );
}

export default App;
