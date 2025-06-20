import "./About.css";
import pic from "../../assets/about.png";

export default function About() {
  return (
    <div className="about-header">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt
        voluptatum modi fuga est consequatur molestiae vero ab placeat nostrum.
      </p>
      <img src={pic} />
    </div>
  );
}
