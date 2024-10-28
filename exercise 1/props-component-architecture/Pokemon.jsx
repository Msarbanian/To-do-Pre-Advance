import Pokedex from "./pokedex";
function Pokemon() {
  return (
    <div
      style={{
        border: "white 3px solid",
        paddingBottom: "5rem",
        borderRadius: "10px",
      }}
    >
      <h1>Pokemon</h1>
      <Pokedex />
    </div>
  );
}

export default Pokemon;
