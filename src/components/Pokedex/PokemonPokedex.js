import bgpoke from "../../assets/img/background/bg-poke.jpg";
import pika from "../../assets/img/home/pikachu.png";

const PokemonPokedex = () => {
  return (
    <div className="pokedexContainer">
      <img className="bgpoke" src={bgpoke} alt="map pokemon fond" />
      <div className="card">
        {/* début image */}
        <div className="card-image">
          <img className="image-poke" src={pika} alt="" />
        </div>
        {/* fin image */}
        {/* début body */}
        <div className="card-body">
          {/*titre */}
          <div className="card-title">
            <h3>Ossekour</h3>
          </div>
          {/* fin titre */}
          {/*début contenu */}
          <div className="card-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              repudiandae?
            </p>
          </div>
        </div>
        {/* fin du body */}
      </div>
    </div>
  );
};

export default PokemonPokedex;
