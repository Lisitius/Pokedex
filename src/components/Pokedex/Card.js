const Card = ({ pokemon, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div key={item} className="card-container">
                <div className="card">
                  {/* début image */}
                  <div className="card-image">
                    <img
                      className="image-poke"
                      src={item.sprites.front_default}
                      alt=""
                    />
                  </div>
                  {/* fin image */}
                  {/* début body */}
                  <div className="card-body">
                    <div className="idPoke">{item.id}</div>
                    {/*titre */}
                    <div className="card-title">
                      <h3>{item.name}</h3>
                    </div>
                    {/* fin titre */}
                    {/*début contenu */}
                    <div className="card-content">
                      <p>{item.types[0].type.name}</p>
                    </div>
                  </div>
                  {/* fin du body */}
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
