import TerritoryGraph from "./TerritoryGraph";
import { formatNumberThreeSignificantDigits } from "../../utils/formatOutput";

function TerritoryStats(territoryData) {
  return (
    <>
      <div className="mb-5">
        <h2 className="display-5 text-dark font-weight-bold justify-content-start">
          {territoryData.title}
        </h2>
        <h3 className="display-6 text-secondary justify-content-start">
          {formatNumberThreeSignificantDigits(territoryData.number)}
        </h3>
        <TerritoryGraph {...territoryData}></TerritoryGraph>
      </div>
    </>
  );
}

export default TerritoryStats;
