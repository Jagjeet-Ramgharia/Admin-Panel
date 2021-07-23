import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import UserList from './pages/userList/UserList';

function App() {
  return (
    <div className="App">
    <Router>
      <TopBar/>
        <div className="container">
          <Sidebar/>
          <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/users">
          <UserList/>
          </Route>
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
