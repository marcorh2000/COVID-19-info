import getRequest from "./getRequest.js";

function getTerritoryData(state = null) {
  const territoryDataURL = state
    ? `https://api.covidtracking.com/v2/states/${state}/daily.json`
    : "https://api.covidtracking.com/v2/us/daily.json";
  const { error, isLoaded, data } = getRequest(territoryDataURL);

  if (error) return null;
  else if (!isLoaded) return null;
  else {
    const historicCovidData = data.data;
    const historicCovidDataDates = historicCovidData
      .toReversed()
      .map((element) => element.date);

    // Confirmed cases
    // Daily
    const historicCovidDataConfirmedDaily = historicCovidData
      .toReversed()
      .map((element) => element.cases.total.calculated.change_from_prior_day);

    // Cumulative
    const historicCovidDataConfirmedCumulative = historicCovidData
      .toReversed()
      .map((element) => element.cases.total.value);

    // Deaths
    // Daily
    const historicCovidDataDeathsDaily = historicCovidData
      .toReversed()
      .map(
        (element) =>
          element.outcomes.death.total.calculated.change_from_prior_day
      );

    const historicCovidDataDeathsCumulative = historicCovidData
      .toReversed()
      .map((element) => element.outcomes.death.total.value);

    // Cumulative
    const historicCovidDataHospitalizedDaily = historicCovidData
      .toReversed()
      .map((element) => element.outcomes.hospitalized.currently.value);

    const positiveCases = {
      key: "positive-cases",
      title: "Confirmed cases",
      number: historicCovidData[0].cases.total.value,
      cumulative: true,
      seriesDaily: historicCovidDataConfirmedDaily,
      seriesCumulative: historicCovidDataConfirmedCumulative,
      labels: historicCovidDataDates,
      graphColor: { rgb: [0, 173, 214], alpha: 0.75 },
    };

    const deaths = {
      key: "deaths",
      title: "Deaths",
      cumulative: true,
      number: historicCovidData[0].outcomes.death.total.value,
      seriesDaily: historicCovidDataDeathsDaily,
      seriesCumulative: historicCovidDataDeathsCumulative,
      labels: historicCovidDataDates,
      graphColor: { rgb: [214, 50, 50], alpha: 0.75 },
    };

    const hospitalized = {
      key: "hospitalized",
      title: "Hospitalized",
      cumulative: false,
      number: historicCovidData[0].outcomes.hospitalized.currently.value,
      seriesDaily: historicCovidDataHospitalizedDaily,
      seriesCumulative: null,
      labels: historicCovidDataDates,
      graphColor: { rgb: [255, 165, 0], alpha: 0.75 },
    };

    return [positiveCases, deaths, hospitalized];
  }
}

export default getTerritoryData;
