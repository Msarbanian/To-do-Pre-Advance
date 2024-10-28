const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
function array() {
  const planetsInHTML = planets.map((planet, index) => (
    <li key={index}>{planet}</li>
  ));
  return planetsInHTML;
}

// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const content = <ul className="list-group m-5">{array()}</ul>;

function ShowPlanets() {
  return content;
}
export default ShowPlanets;
