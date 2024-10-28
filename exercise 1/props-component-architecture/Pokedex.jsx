import Pokecard from "./Pokecard";

const pokemon = [
  {
    id: 1,
    name: "Charmander",
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 2,
    name: "Squirtle",
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 3,
    name: "Butterfree",
    type: "flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 4,
    name: "Rattata",
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 5,
    name: "Metapod",
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
];

function Pokedex() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "4rem",
        justifyContent: "center",
      }}
    >
      {pokemon.map((card, index) => (
        <Pokecard
          key={index}
          name={card.name}
          image={card.image}
          type={card.type}
        />
      ))}
    </div>
  );
}
export default Pokedex;
