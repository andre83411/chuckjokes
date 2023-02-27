function App() {
  const { useState, useEffect } = React;
  const [joke, setJoke] = useState("");

  useEffect(() => {

    const fetchJoke = async () => {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    };

    const intervalId = setInterval(() => {
      fetchJoke();
    }, 20000);

    fetchJoke();

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <div>
      <h1>Chuck Norris Joke:</h1>
      <p>"{joke}"</p>
      </div>
  );
      
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));


