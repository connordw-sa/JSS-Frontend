import { fetchUser } from "../../utils/HelperFunctions";
import { useEffect } from "react";
import heroImg from "../../assets/landing.jpg";
import "./Landing.css";
// imports ----------------------------------------------------------

export default function Landing() {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    // test

    <div>
      <section className="landing-hero-section">
        <img src={heroImg} />
        <div className="hero-text">
          {" "}
          <h1>Welcome to JSS Coaching</h1>
          <p>This text can be changed in size</p>
          <p>And color</p>
        </div>
      </section>
      <div className="wrapper">
        <section className="offer-section">
          {" "}
          <h1>What we offer</h1>
          <div className="offer-card-wrapper">
            <div className="offer-card">
              <img src={heroImg} />
              <h2>Services 1</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="offer-card">
              <img src={heroImg} />
              <h2>Services 1</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="offer-card">
              <img src={heroImg} />
              <h2>Services 1</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </section>
        <section className="affiliation-section">
          <h1>This will be the carousel</h1>
          <img src={heroImg} />
        </section>
        <section className="review-section"></section>
      </div>
    </div>
  );
}
