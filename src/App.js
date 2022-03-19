import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Counter></Counter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.hello-world.com/index.php/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
