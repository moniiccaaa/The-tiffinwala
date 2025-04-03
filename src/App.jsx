import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/Home.page";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AboutUspage from "./pages/AboutUspage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProviderRegistration from "./pages/ProviderRegistration";
import './index.css';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/about" element={<AboutUspage />} />
       <Route path="/contact" element={<ContactUsPage />} />

       <Route path="/registerProvider" element={<ProviderRegistration />} />

       <Route path="*" element={<NotFoundPage/>} />


      </Routes>
    </Router>
  )
}

export default App
