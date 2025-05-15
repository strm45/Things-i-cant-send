//version that outputs confessions as bullet points
import { useState } from 'react';
import './App.css';

function App() {

  const[confession, setConfession] = useState('');
  const[confessions, setConfessions] = useState([]);

  const handleSubmit = () => {//note to self, never use function handleSubmit (){} again unless you want weird bugs and to hate yourself
    if (confession.trim() !== '') {
      setConfessions([...confessions, confession]);
      setConfession('');// Clear the input field after submission
    }
  }

  return (
    <div>
      <h1>Things I Can't Send</h1>
      <textarea
        placeholder = "What's on your mind?..."
        value = {confession}
        onChange = {(e) => setConfession(e.target.value)}//everytime the user types in the textarea, the value of confession is updated
        rows = {4}
        cols = {50}
      />
      <br />
      <button onClick = {handleSubmit}>Confess</button>
      <ul>
        {confessions.map((c, index) => (
          <li key = {index}>{c}</li>//each c is one more confession in my confessions area
        ))}
      </ul>
    </div>
  )
}

export default App
