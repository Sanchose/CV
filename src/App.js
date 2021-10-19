import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent name="Aleks"/>
        <Ccomponent/>
        <Menu/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web Developer blog
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web dev Blog
        </a>
      </header>
    </div>
  );
}

export default App;
