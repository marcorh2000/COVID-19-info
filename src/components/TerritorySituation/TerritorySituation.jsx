import { useSelector } from "react-redux";
import { USStates } from "../../utils/constants.js";
import getTerritoryData from "../../utils/getTerritoryData.js";
import TerritoryStats from "./TerritoryStats.jsx";

function TerritorySituation() {
  const usState = useSelector((state) => state.data.usState);
  const territoryData = getTerritoryData(usState);

  return (
    <>
      <div className="row">
        <h1 className="display-5 m-0">
          {usState
            ? USStates[usState.toUpperCase()]
            : "United States of America"}{" "}
          situation
        </h1>
      </div>
      {territoryData &&
        territoryData.map((item) => (
          <TerritoryStats {...item}></TerritoryStats>
        ))}
    </>
  );
}

export default TerritorySituation;
