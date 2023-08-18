import './App.css';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/Signup";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="/about" element={<SignupPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />      
    </div>
  );
}

export default App;
