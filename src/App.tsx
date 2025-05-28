import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Routes/Landing/Landing";
import Profile from "./Routes/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Routes/About/About";
import Services from "./Routes/Services/Services";
import Contact from "./Routes/Contact/Contact";

// imports ----------------------------------------------------------

function App() {
  return (
    <>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />

        <Routes>
          {/* routes  */}
          <Route element={<Landing />} path="/" />
          <Route element={<About />} path="/About" />
          <Route element={<Services />} path="/Services" />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<Profile />} path="/Profile" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
