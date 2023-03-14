import './App.css';

function App() {
    const title = "Welcome to the new blog!";
    const link = "http://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
          <p>Liked {Math.random() * 100} times.</p>

          <p>{"Hello, Cyber Cats"}</p>
          <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
