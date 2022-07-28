import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const PokemonPokedex = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=151`;

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    const pokeFun = async () => {
      setLoading(true);
      const res = await axios.get(url);
      getPokemon(res.data.results);
      setLoading(false);
    };
    pokeFun();
  }, [url]);

  return (
    <div className="pokedexContainer">
      <Card pokemon={pokeData} loading={loading} />
    </div>
  );
};

export default PokemonPokedex;
