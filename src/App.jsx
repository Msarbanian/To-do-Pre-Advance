// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Alert from "../exercise 1/alert-component/alert-component";
import Card from "../exercise 1/building-a-layout/building-a-layout";
import RenderList from "../exercise 1/maping-array-objects-to-li/maping-array-objects-to-li";
import ShowPlanets from "../exercise 1/maping-array-of-objects-to-li/app";
import CustomerInformation from "../exercise 1/rendering-from-objects/app";
import Pokemon from "../exercise 1/props-component-architecture/Pokemon";
//Card
const data = {
  image: "../../.learn/assets/Dylan.png?raw=true",
  cardTitle: "Bob Dylan",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

function App() {
  return (
    <>
      <Alert text="OMG! Something really bad has happened!" />
      <Card
        image={data.image}
        cardTitle={data.cardTitle}
        cardDescription={data.cardDescription}
        button={data.button}
      />
      <RenderList />
      <ShowPlanets />
      <CustomerInformation />
      <Pokemon />
    </>
  );
}

export default App;
