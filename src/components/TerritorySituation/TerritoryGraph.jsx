import BarGraph from "../Graphs/BarGraph.jsx";
import "./TerritoryGraph.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const TYPE_OF_DATA = ["daily", "cumulative"];

function TerritoryGraph({
  title,
  number,
  cumulative,
  seriesDaily,
  seriesCumulative,
  labels,
  graphColor,
}) {
  // Variables
  const minDate = labels[0];
  const maxDate = labels[labels.length - 1];

  // Local states
  const [typeOfGraphData, setTypeOfGraphData] = useState(TYPE_OF_DATA[0]);
  const [startDate, setStartDate] = useState(minDate);
  const [endDate, setEndDate] = useState(maxDate);

  useEffect(() => {
    setStartDate(minDate);
    setEndDate(maxDate);
  }, [minDate, maxDate]);

  // Functions
  // Check if graph is daily
  const isGraphDaily = () => {
    return typeOfGraphData === TYPE_OF_DATA[0];
  };

  // Function to change the type of graph
  const changeGraphTypeHandler = (event) => {
    setTypeOfGraphData(TYPE_OF_DATA[event.target.dataset.onClick]);
  };

  // Function to change the date value and validate it
  const changeDateValue = (event, dateType) => {
    if (dateType === "start") {
      if (event.target.value < endDate) {
        setStartDate(event.target.value);
        event.target.classList.remove("error");
      } else {
        event.target.classList.toggle("error");
      }
    } else if (dateType === "end") {
      if (startDate < event.target.value) {
        setEndDate(event.target.value);
        event.target.classList.remove("error");
      } else {
        event.target.classList.toggle("error");
      }
    }
  };

  // Function to filter value inside of range of dates
  const filterLabelsByDateRange = (startDate, endDate) => {
    return (dateString) => {
      return dateString >= startDate && dateString <= endDate;
    };
  };

  // Process chosen data
  const chosenSeries = isGraphDaily() ? seriesDaily : seriesCumulative;

  const filteredIndices = labels
    .map(filterLabelsByDateRange(startDate, endDate))
    .map((value, index) => (value ? index : -1))
    .filter((index) => index !== -1);

  const filteredChosenSeries = filteredIndices.map(
    (index) => chosenSeries[index]
  );
  const filteredLabels = filteredIndices.map((index) => labels[index]);

  return (
    <>
      <div className="mb-5">
        {cumulative && (
          <div className="d-flex flex-row justify-content-end w-100 m-0 mt-2 mb-2">
            <div className="d-flex flex-row justify-content-end w-25">
              <button
                className={
                  "btn btn-outline-secondary mx-2 " +
                  (isGraphDaily() && "active")
                }
                data-on-click={0}
                onClick={changeGraphTypeHandler}
              >
                Daily
              </button>
              <button
                className={
                  "btn btn-outline-secondary " + (!isGraphDaily() && "active")
                }
                data-on-click={1}
                onClick={changeGraphTypeHandler}
              >
                Cumulative
              </button>
            </div>
          </div>
        )}
        <div className="d-flex flex-row justify-content-end w-100 m-0">
          <div className="d-flex flex-row justify-content-end w-50">
            <label className="small" htmlFor="ipt-start-date">
              Start date
            </label>
            <input
              id="ipt-start-date"
              type="date"
              className="form-control w-50 m-1"
              value={startDate}
              min={minDate}
              max={maxDate}
              onChange={(event) => changeDateValue(event, "start")}
            />
            <label className="small" htmlFor="ipt-end-date">
              End date
            </label>
            <input
              id="ipt-end-date"
              type="date"
              className="form-control w-50 m-1 "
              value={endDate}
              min={minDate}
              max={maxDate}
              onChange={(event) => changeDateValue(event, "end")}
            />
          </div>
        </div>
        <div className="graph-container">
          <BarGraph
            title={title}
            series={filteredChosenSeries}
            labels={filteredLabels}
            graphColor={graphColor}
          ></BarGraph>
        </div>
      </div>
    </>
  );
}

export default TerritoryGraph;
