import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Home_Login from "./components/Home_Login";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home_login' Component={Home_Login} />
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />
          <Route path='/details' Component={Details} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
