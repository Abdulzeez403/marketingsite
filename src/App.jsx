import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import BlogPage from './Components/Blog/Blog';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/blog" element={<BlogPage/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
