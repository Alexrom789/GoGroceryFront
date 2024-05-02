import './App.css';
import { useEffect, useState } from 'react';




function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:8080/recipes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <p>GoGrocery</p>
    </div>
  );
}

export default App;
