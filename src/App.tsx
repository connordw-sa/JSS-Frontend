import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Routes/Landing";
import Profile from "./Routes/Profile";
import Navbar from "./Components/Navbar";
import About from "./Routes/About";
import Services from "./Routes/Services";
import Contact from "./Routes/Contact";
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
