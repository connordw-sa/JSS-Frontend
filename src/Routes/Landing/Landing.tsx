import { fetchUser } from "../../utils/HelperFunctions";
import { useEffect, useState } from "react";
import heroImg from "../../assets/hero.png";
import "./Landing.css";
import Footer from "../../Components/footer/Footer";
// imports ----------------------------------------------------------

export default function Landing() {
  useEffect(() => {
    fetchUser();
    const interval = setInterval(next, AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const TOTAL_ITEMS = 5;
  const VISIBLE_ITEMS = 3;
  const AUTO_ADVANCE_INTERVAL = 2000;
  const items = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
    id: i,
    img: heroImg,
    caption: `Lorem ipsum ${i + 1}`,
  }));
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % TOTAL_ITEMS);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + TOTAL_ITEMS) % TOTAL_ITEMS);
  };

  const getVisibleItems = () => {
    return Array.from(
      { length: VISIBLE_ITEMS },
      (_, i) => items[(startIndex + i) % TOTAL_ITEMS]
    );
  };

  useEffect(() => {
    const heroHeading = document.querySelector(
      ".hero-text .hero-title"
    ) as HTMLElement | null;

    if (heroHeading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            heroHeading.classList.remove("animate-pop");
            void heroHeading.offsetWidth;
            heroHeading.classList.add("animate-pop");
            console.log("intersecting");
          } else {
            heroHeading.classList.remove("animate-pop");
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(heroHeading);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="landing-section">
      <section className="landing-hero-section">
        <img className="hero-img" src={heroImg} />
        <div className="hero-text">
          <h1 className="hero-titles">You're not here to settle.</h1>
          <h1 className="hero-title"> You're here to rise.</h1>
          <h2>
            Through immersive retreats, transformational life coaching and{" "}
            <br />
            strategic executive support, I help indifiduals rise to their
            fullest potential.
          </h2>
        </div>
      </section>

      <div className="wrapper">
        <section className="service-section">
          <h1>Our Services</h1>
          <div className="service-card-wrapper">
            <div className="service-card">
              <img src={heroImg} />
              <h2>Services 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                qui consectetur quidem voluptate ab quasi distinctio, soluta
                architecto laboriosam iste?
              </p>
            </div>
            <div className="service-card">
              <img src={heroImg} />
              <h2>Services 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                qui consectetur quidem voluptate ab quasi distinctio, soluta
                architecto laboriosam iste?
              </p>
            </div>
            <div className="service-card">
              <img src={heroImg} />
              <h2>Services 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                qui consectetur quidem voluptate ab quasi distinctio, soluta
                architecto laboriosam iste?
              </p>
            </div>
          </div>
        </section>
        <section className="affiliation-section">
          <h1>This will be the carousel of affiliations and partnerships</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button onClick={prev}>&larr;</button>
            <div className="affiliation-img-div">
              {getVisibleItems().map((item) => (
                <div key={item.id}>
                  <img
                    src={item.img}
                    alt="Affiliation"
                    className="affiliation-img"
                  />
                  <p>{item.caption}</p>
                </div>
              ))}
            </div>
            <button onClick={next}>&rarr;</button>
          </div>
        </section>
        <section className="review-section">
          <div className="review-text">
            <h1>Reviews</h1>
            <h2>Review 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
              sapiente modi, distinctio iure asperiores!
            </p>
            <h2>Review 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
              sapiente modi, distinctio iure asperiores!
            </p>
            <h2>Review 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
              sapiente modi, distinctio iure asperiores!
            </p>
            <h2>Review 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
              sapiente modi, distinctio iure asperiores!
            </p>
          </div>
          <img src={heroImg} />
        </section>
        <section className="service-section">
          <h1>Articles we recommend</h1>
          <div className="service-card-wrapper">
            <div className="service-card">
              <img src={heroImg} />
              <h2>Article 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                qui consectetur quidem voluptate ab quasi distinctio, soluta
                architecto laboriosam iste?
              </p>
            </div>
            <div className="service-card">
              <img src={heroImg} />
              <h2>Article 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                qui consectetur quidem voluptate ab quasi distinctio, soluta
                architecto laboriosam iste?
              </p>
            </div>
            <div className="service-card">
              <img src={heroImg} />
              <h2>Article 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                qui consectetur quidem voluptate ab quasi distinctio, soluta
                architecto laboriosam iste?
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
