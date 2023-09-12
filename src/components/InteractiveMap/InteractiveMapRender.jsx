import { useDispatch, useSelector } from "react-redux";
import { changeUsState } from "../../redux/dataSlice";
import { getRGBA } from "../../utils/formatOutput";
import { COLORS } from "../../utils/constants";
import USAMap from "react-usa-map";
import "./InteractiveMapRender.css";

function InteractiveMapRender() {
  let statesFilling = {};
  const dispatch = useDispatch();

  const mapHandler = (event) => {
    const usStateName = event.target.dataset.name.toLowerCase();
    dispatch(changeUsState({ usState: usStateName }));
  };

  const usState = useSelector((state) => state.data.usState);

  if (usState) {
    statesFilling = {};
    statesFilling[usState.toUpperCase()] = {
      fill: getRGBA(COLORS.primaryGreen),
    };
  } else {
    statesFilling = {};
  }

  return (
    <USAMap
      height={400}
      customize={statesFilling}
      onClick={mapHandler}
    ></USAMap>
  );
}

export default InteractiveMapRender;
