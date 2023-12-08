import { Routes, Route } from "react-router-dom";
import ApiTestPage from './pages/ApiTestPage'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/api" element={<ApiTestPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
