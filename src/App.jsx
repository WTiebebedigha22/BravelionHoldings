import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/common/Navbar/navbar"
import Footer from "./components/common/Footer/Footer"
import ScrollToTop from "./components/features/ScrollToTop"
import ChatButton from "./components/common/Chat/Chat"
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
import Advisory from "./pages/Services/Advisory/AdvisoryPage"
import Consulting from "./pages/Services/Consulting/ConsultingPage"
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
      <ScrollToTop />
      <ChatButton />

      <Routes>

        {/* ── Shared layout ── */}
        <Route path="/"        element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/about"   element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />

        {/* ── Estates ── */}
        <Route path="/estates"                      element={<DefaultLayout><Estates /></DefaultLayout>} />
        <Route path="/estates/why"              element={<DefaultLayout><WhyUs /></DefaultLayout>} />
        <Route path="/estates/insights"        element={<DefaultLayout><InsightsPage /></DefaultLayout>} />
        <Route path="/estates/investor-relations" element={<DefaultLayout><InvestorRelations /></DefaultLayout>} />
        <Route path="/estates/property"        element={<DefaultLayout><Property /></DefaultLayout>} />

        {/* ── Services ── */}
        <Route path="/services"                       element={<DefaultLayout><Services /></DefaultLayout>} />
        <Route path="/services/advisory"            element={<DefaultLayout><Advisory /></DefaultLayout>} />
        <Route path="/services/consulting"          element={<DefaultLayout><Consulting /></DefaultLayout>} />
        <Route path="/services/engineering"         element={<DefaultLayout><EngineeringPage /></DefaultLayout>} />
        <Route path="/services/energy"              element={<DefaultLayout><EnergyPage /></DefaultLayout>} />
        <Route path="/services/training"            element={<DefaultLayout><TrainingPage /></DefaultLayout>} />
        <Route path="/services/business"            element={<DefaultLayout><BusinessPage /></DefaultLayout>} />

        {/* ── Training ── */}
        <Route path="/training"                 element={<DefaultLayout><Training /></DefaultLayout>} />
        <Route path="/training/courses"         element={<DefaultLayout><CoursesPage /></DefaultLayout>} />
        <Route path="/training/hse"             element={<DefaultLayout><HSEPage /></DefaultLayout>} />
        <Route path="/training/certifications"  element={<DefaultLayout><CertificationsPage /></DefaultLayout>} />
        <Route path="/training/corporate"       element={<DefaultLayout><CorporatePage /></DefaultLayout>} />
        <Route path="/training/schedule"        element={<DefaultLayout><SchedulePage /></DefaultLayout>} />
        <Route path="/training/enroll"          element={<DefaultLayout><EnrollPage /></DefaultLayout>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App