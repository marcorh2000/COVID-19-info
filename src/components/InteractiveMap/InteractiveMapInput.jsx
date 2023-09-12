import { USStates } from "../../utils/constants.js";
import { changeUsState } from "../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";

function InteractiveMapInput() {
  const usState = useSelector((state) => state.data.usState);
  const dispatch = useDispatch();

  const changeSelectedTerritory = (event) => {
    const usStateName = event.target.value.toLowerCase();
    dispatch(changeUsState({ usState: usStateName }));
  };

  return (
    <>
      <div className="container mb-3">
        <div className="w-25">
          <label htmlFor="slt-territory">Select a territory</label>
          <select
            id="slt-territory"
            className="form-select"
            aria-label="Default select example"
            onChange={changeSelectedTerritory}
            value={usState ? usState : ""}
          >
            <option key="slt-territory-usa" value="">
              United States of America
            </option>
            {Object.entries(USStates).map(([key, value]) => (
              <option key={"slt-territory-" + key} value={key.toLowerCase()}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
      ;
    </>
  );
}

export default InteractiveMapInput;
