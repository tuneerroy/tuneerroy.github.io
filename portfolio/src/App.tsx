import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <Projects />
      </main>
      <footer>
        <p>Last Updated September 26th, 2022.</p>
        <p>&copy; 2022 Tuneer Roy</p>
      </footer>
    </div>
  );
}

export default App;
