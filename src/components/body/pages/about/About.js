import "./About.css";
import image from "./mustafa.jpg";
import { useSpring, animated, config } from "react-spring";

function About() {
  const fromLeft = useSpring({
    config: config.gentle,
    from: { transform: "translate3d(-100%,0,0)", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
  });
  const fromRight = useSpring({
    config: config.gentle,
    from: { transform: "translate3d(100%,0,0)", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
  });

  return (
    <div className="about-container">
      <div className="about-hero-container">
        <animated.div style={fromLeft} className="about-hero-text">
          <div className="about-hero-title">MUSTAFA SALIH</div>
          <p>
            im from Iraq currently living in Turkey, i do some programming in a
            couple of programming languages, i’ve found the passion for
            programming a couple years ago, i have the ability to teach myself
            everything
          </p>
        </animated.div>

        <animated.div style={fromRight} className="about-image-container">
          <div className="image-overlay"></div>
          <img className="img" src={image} alt="" />
        </animated.div>
      </div>

      <div className="skills-card-container">
        <div className="skills-title">Skills</div>
        <div className="skills-content-container">
          <div className="skills">
            <div>Rust</div>
            <div>Javascript</div>
            <div>C</div>
            <div>Python</div>
          </div>
          <div className="skills">
            <div>React.js</div>
            <div>Vue.js</div>
            <div>Node.js</div>
          </div>
          <div className="skills">
            <div>Html</div>
            <div>Css</div>
          </div>
          <div className="skills">
            <div>SQL</div>
            <div>Postgresql</div>
            <div>MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
