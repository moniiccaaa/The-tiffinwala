import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/Home.page";
import SignInPage from "./pages/SignInPage";

import './index.css';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </Router>
  )
}

export default App
