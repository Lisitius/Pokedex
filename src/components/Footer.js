import pokeapi from "../assets/img/footer/pokeapi.png";
import reactlogo from "../assets/img/footer/react.png";
import sasslogo from "../assets/img/footer/sass.png";
import logogithub from "../assets/img/contact/github.png";
import logolinkedin from "../assets/img/contact/linkedin.png";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <img className="pokeapi" src={pokeapi} alt="pokeapi logo" />
        <a href="https://github.com/Lisitius" target="_blank" rel="noreferrer">
          <img className="img-github" src={logogithub} alt="logo github" />
        </a>
        <h2 className="madeby">Made by</h2>
        <img className="reactlogo" src={reactlogo} alt="react logo" />
        <h2 className="lisitius">Lisitius</h2>
        <a
          href="https://www.linkedin.com/in/benjamin-fichaux/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-linkedin"
            src={logolinkedin}
            alt="logo linkedin"
          />
        </a>
        <img className="sasslogo" src={sasslogo} alt="sass logo" />
      </div>
    </div>
  );
};

export default Footer;
