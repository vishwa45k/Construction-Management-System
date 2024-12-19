import "./App.css";
// import Demo from './components/Demo';
import Login from "./components/Login";
// import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Signup from "./components/Signup";
import VendorLogin from "./components/VendorLogin";
import VendorSignup from "./components/VendorSignup";
import VendorHome from "./components/Vendor_Home";
import About from "./components/About";
import Admin from "./components/Admin";
import UserAccount from "./components/UserAccount";
import { UserProvider } from "./components/UserContext";
import { VendorProvider } from "./components/VendorContext";
import Water from "./components/waterengi/Water";
import ServiceDetails from "./components/servicedetails/ServiceDetails";
import Services from "./components/services/Services";
import Gpt from "./components/room-gpt/Gpt";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <VendorProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/vendors" element={<VendorSignup />} />
            <Route path="/vendorl" element={<VendorLogin />} />
            <Route path="/vendorhome/*" element={<VendorHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gpt" element={<Gpt />} />
            <Route path="/about" element={<About />} />
            <Route path="/account/*" element={<UserAccount />} />
            <Route path="/water" element={<Water />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/service_details" element={<ServiceDetails />} />
          </Routes>
        </VendorProvider>
      </UserProvider>
    </div>
  );
}

export default App;
