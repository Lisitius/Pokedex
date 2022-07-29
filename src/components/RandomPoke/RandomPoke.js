import axios from "axios";
import { useEffect, useState } from "react";
//import pika from "../../assets/img/home/pikachu.png";

const RandomPoke = () => {
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");

  const fetchPokemon = () => {
    const pokeNumber = Math.floor(Math.random() * 898) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
      .then((res) => resultPokemon(res.data));
  };

  const resultPokemon = (data) => {
    setPokemonId(data.id);
    setPokemonName(data.name);
    setPokemonImg(data.sprites.front_default);
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="randompoke-container">
      <div className="bg"></div>
      <img className="imgpoke" src={pokemonImg} alt="" />
      <h2 className="idpoke">{pokemonId}</h2>
      <h1 className="namepoke">{pokemonName}</h1>
      <button className="btnpoke" onClick={fetchPokemon}>
        Random Pokemon
      </button>
    </div>
  );
};

export default RandomPoke;
