import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/common/Navbar/navbar"
import Footer from "./components/common/Footer/Footer"
import Home from "./pages/Home/Home"
import Estates from "./pages/Estates/Estates"
import Services from "./pages/Services/Services"
import Training from "./pages/Training/Training"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"




function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/*" element={
          <>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/estates" element={<Estates/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/training" element={<Training/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          <Footer/>
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
