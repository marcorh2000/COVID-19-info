import { Helmet, HelmetProvider } from "react-helmet-async";

function TableView() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Table view of the USA information about COVID-19</title>
        </Helmet>
      </HelmetProvider>

      <div className="container">
        <h1>This page is still under development</h1>
      </div>
    </>
  );
}

export default TableView;
