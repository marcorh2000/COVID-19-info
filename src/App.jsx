import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TableView from "./pages/TableView";
import Header from "./components/Layout/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { USStates } from "./utils/constants";

function App() {
  const usState = useSelector((state) => state.data.usState);
  const territoryName = usState ? USStates[usState.toUpperCase()] : "USA";

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{territoryName} information about COVID-19</title>
          <meta
            name="home-description"
            content="This page was built to show the data about the COVID-19 pandemic in the USA."
          />
          <link rel="icon" href="/virus.svg" />
        </Helmet>
      </HelmetProvider>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tableview">
            <TableView></TableView>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
