import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="text-center mb-4">OctoFit Tracker</h1>
          <p className="text-center text-muted">Your fitness tracking companion</p>
          <div className="text-center">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => setCount((count) => count + 1)}
            >
              Count: {count}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
