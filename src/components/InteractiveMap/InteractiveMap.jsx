import InteractiveMapRender from "./InteractiveMapRender";
import InteractiveMapInput from "./InteractiveMapInput";

function InteractiveMap() {
  return (
    <>
      <InteractiveMapInput></InteractiveMapInput>
      <div className="map-container mb-5">
        <div className="container d-flex justify-content-center align-items-center">
          <InteractiveMapRender></InteractiveMapRender>
        </div>
      </div>
    </>
  );
}

export default InteractiveMap;
