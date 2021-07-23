import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <TopBar/>
        <div className="container">
          <Sidebar/>
          <Home/>
        </div>
    </div>
  );
}

export default App;
