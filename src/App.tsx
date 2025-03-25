import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Routes/Landing";
import Profile from "./Routes/Profile";
import Navbar from "./Components/Navbar";
import About from "./Routes/About";
function App() {
  return (
    <>
      {/* Navbar */}

      {/* Routes  */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Landing />} path="/" />

          <Route element={<About />} path="/About" />
          {/* Services */}
          <Route element={<Profile />} path="/Profile" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
