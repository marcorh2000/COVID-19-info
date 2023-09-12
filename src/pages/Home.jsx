import USAMapStyled from "../components/InteractiveMap/InteractiveMapRender";
import TerritorySituation from "../components/TerritorySituation/TerritorySituation.jsx";
import { Helmet } from "react-helmet";
import Headline from "../components/Layout/Headline";
import InteractiveMap from "../components/InteractiveMap/InteractiveMap";

function Home() {
  return (
    <>
      <Headline></Headline>
      <InteractiveMap></InteractiveMap>
      <div className="container mb-5">
        <TerritorySituation></TerritorySituation>
      </div>
    </>
  );
}

export default Home;
