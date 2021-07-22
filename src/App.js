import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
        <div className="container">
          <Sidebar/>
          <div className="others"></div>
        </div>
    </div>
  );
}

export default App;
