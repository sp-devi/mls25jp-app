import logo from './assets/mile-logo-sm.png';
import { AppBar } from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar>
          <div className="site-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </AppBar>
      </header>
    </div>
  );
}

export default App;
