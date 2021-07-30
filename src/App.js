import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import AddUser from "./pages/newUser/AddUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import AddProduct from "./pages/newProduct/AddProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import MoviesList from "./pages/MoviesList/MoviesList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <div className="App">
            <TopBar />
            <div className="container">
              <Sidebar /> 
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newuser">
                <AddUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:movieId">
                <Product />
              </Route>
              <Route path="/newmovie">
                <AddProduct />
              </Route>
              <Route path="/lists">
                <MoviesList/>
              </Route>
              <Route path="/list/:listId">
                <List/>
              </Route>
              <Route path="/newlist">
                <NewList/>
              </Route>
            </div>
          </div>
        )}
      </Switch>
    </Router>
  );
}

export default App;
