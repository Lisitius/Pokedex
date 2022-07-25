import pokeapi from "../assets/img/footer/pokeapi.png";
import reactlogo from "../assets/img/footer/react.png";
import sasslogo from "../assets/img/footer/sass.png";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <img className="pokeapi" src={pokeapi} alt="pokeapi logo" />
        <h2 className="madeby">Made by</h2>
        <img className="reactlogo" src={reactlogo} alt="react logo" />
        <h2 className="lisitius">Lisitius</h2>
        <img className="sasslogo" src={sasslogo} alt="sass logo" />
      </div>
    </div>
  );
};

export default Footer;
