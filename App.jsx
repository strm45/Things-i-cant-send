import { useState } from 'react'
import './App.css'
const[confession, setConfession] = useState('');
function App() {
  return (
    <div>
      <h1>Things I Can't Send</h1>
      <textarea
        rows = {4}
        cols = {50}
        value = {confession}
        onChange = {(e) => setConfession(e.target.value)}
        placeholder = "What's on your mind?..."
      ></textarea>
      <br />
      <button>Post</button>
    </div>
  )
}

export default App
