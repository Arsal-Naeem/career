import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuizPage from './pages/QuizPage'
import Results from './pages/Results'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
