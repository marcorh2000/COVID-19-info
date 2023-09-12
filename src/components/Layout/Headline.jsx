function Headline() {
  return (
    <>
      <div className="container mx-auto mb-2">
        <div className="row flex-row ">
          <h1 className="display-4 w-50">COVID-19 info</h1>
          <div className="d-flex justify-content-center align-items-center w-50">
            <img className="shadow" src="./USA-flag.png" height={50} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Headline;
