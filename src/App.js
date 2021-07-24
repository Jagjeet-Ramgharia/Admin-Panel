import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import AddUser from "./pages/newUser/AddUser";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User/>
            </Route>
            <Route path="/newuser">
              <AddUser/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
