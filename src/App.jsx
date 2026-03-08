import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/common/Navbar/navbar"
import Footer from "./components/common/Footer/Footer"
import Home from "./pages/Home/Home"
import Estates from "./pages/Estates/Estates"
import Services from "./pages/Services/Services"
import Training from "./pages/Training/Training"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

// Layout WITH shared NavBar + Footer (Home, About, Contact)
function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

// Layout WITHOUT shared NavBar + Footer (pages that have their own)
function BareLayout({ children }) {
  return <>{children}</>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages that use the shared NavBar + Footer */}
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />

        {/* Pages with their own NavBar + Footer */}
        <Route path="/estates" element={<BareLayout><Estates /></BareLayout>} />
        <Route path="/services" element={<BareLayout><Services /></BareLayout>} />
        <Route path="/training" element={<BareLayout><Training /></BareLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App