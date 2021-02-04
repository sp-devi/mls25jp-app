import logo from './assets/mile-logo.jpeg';
import { AppBar } from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar>
          <img src={logo} className="App-logo" alt="logo" />
        </AppBar>
      </header>
    </div>
  );
}

export default App;
