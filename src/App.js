import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    const link = "http://google.com";

  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <Home />
          <p>Liked {Math.random() * 100} times.</p>

          <p>{"Hello, Cyber Cats"}</p>
          <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
