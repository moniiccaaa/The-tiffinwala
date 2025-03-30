import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/Home.page";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import './index.css';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </Router>
  )
}

export default App
