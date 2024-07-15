import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
