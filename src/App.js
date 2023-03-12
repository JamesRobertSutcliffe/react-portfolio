import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
