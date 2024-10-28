function Pokecard({ name, image, type }) {
  return (
    <article
      style={{
        border: "2px white  solid",
        borderRadius: "20px",
        width: "11rem",
      }}
    >
      <h3>{name}</h3>
      <img src={image} alt="..." />
      <p>{type}</p>
    </article>
  );
}
export default Pokecard;
