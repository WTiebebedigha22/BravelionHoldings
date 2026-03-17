import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/common/Navbar/navbar"
import Footer from "./components/common/Footer/Footer"
import Home from "./pages/Home/Home"
import Estates from "./pages/Estates/Estates"
import Services from "./pages/Services/Services"
import Training from "./pages/Training/Training"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

// Estates
import InsightsPage from "./pages/Estates/Insights/Insights"
import WhyUs from "./pages/Estates/Why/WhyUs"
import Property from "./pages/Estates/Property/Property"
import InvestorRelations from "./pages/Estates/Investor Relations/InvestorRelations"

// Services
import EngineeringPage from "./pages/Services/Engineering/EngineeringPage"
import EnergyPage from "./pages/Services/Energy/EnergyPage"
import TrainingPage from "./pages/Services/Training/TrainingPage"
import BusinessPage from "./pages/Services/Business/BusinessPage"

// Training
import CoursesPage from "./pages/Training/Courses/Courses"
import HSEPage from "./pages/Training/HSE/Hse"
import CertificationsPage from "./pages/Training/Certification/CertificationsPage"
import CorporatePage from "./pages/Training/Corporate/CorporatePage"
import SchedulePage from "./pages/Training/Schedule/Schedule"
import EnrollPage from "./pages/Training/Enroll/Enroll"

// Layout WITH shared NavBar + Footer
function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

// Layout WITHOUT shared NavBar + Footer (pages manage their own)
function BareLayout({ children }) {
  return <>{children}</>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Shared layout ── */}
        <Route path="/"        element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/about"   element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />

        {/* ── Estates ── */}
        <Route path="/estates"          element={<BareLayout><Estates /></BareLayout>} />
        <Route path="/estates/why"   element={<BareLayout><WhyUs /></BareLayout>} />
        <Route path="/estates/insights"   element={<BareLayout><InsightsPage /></BareLayout>} />
        <Route path="/estates/investor-relations" element={<BareLayout><InvestorRelations /></BareLayout>} />
        <Route path="/estates/property" element={<BareLayout><Property /></BareLayout>} />

        {/* ── Services ── */}
        <Route path="/services"              element={<BareLayout><Services /></BareLayout>} />
        <Route path="/services/engineering"  element={<BareLayout><EngineeringPage /></BareLayout>} />
        <Route path="/services/energy"       element={<BareLayout><EnergyPage /></BareLayout>} />
        <Route path="/services/training"     element={<BareLayout><TrainingPage /></BareLayout>} />
        <Route path="/services/business"     element={<BareLayout><BusinessPage /></BareLayout>} />

        {/* ── Training ── */}
        <Route path="/training"                element={<BareLayout><Training /></BareLayout>} />
        <Route path="/training/courses"        element={<BareLayout><CoursesPage /></BareLayout>} />
        <Route path="/training/hse"            element={<BareLayout><HSEPage /></BareLayout>} />
        <Route path="/training/certifications" element={<BareLayout><CertificationsPage /></BareLayout>} />
        <Route path="/training/corporate"      element={<BareLayout><CorporatePage /></BareLayout>} />
        <Route path="/training/schedule"       element={<BareLayout><SchedulePage /></BareLayout>} />
        <Route path="/training/enroll"         element={<BareLayout><EnrollPage /></BareLayout>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App