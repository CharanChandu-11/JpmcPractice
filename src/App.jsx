import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Blogs from './pages/Blogs' 
import Payment from './pages/Payment'
import Volunteer from './pages/Volunteer'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Volunteer" element={<Volunteer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
