import { Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

import {
  getRGBA,
  formatDate,
  formatNumberThreeSignificantDigits,
} from "../../utils/formatOutput";

import { COLORS } from "../../utils/constants";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const MAX_TICKS_LIMIT = 5;
const ELEMENTS_TYPE = "bar";
const ELEMENT_BORDER_WIDTH = 1;

function BarGraph({ title, series, labels, graphColor }) {
  const formattedLabels = labels.map((element) =>
    formatDate(new Date(element))
  );

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: title,
        data: series,
        hidden: false,
        backgroundColorColor: getRGBA({ ...COLORS.black_25 }),
        borderColor: getRGBA({ ...COLORS.black_25 }),
        borderWidth: ELEMENT_BORDER_WIDTH,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        hoverBackgroundColor: getRGBA({ ...graphColor }),
        hoverBorderColor: getRGBA({ ...graphColor }),
        hoverBorderWidth: ELEMENT_BORDER_WIDTH,
      },
    ],
  };

  const config = {
    type: ELEMENTS_TYPE,
    data: data,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          titleColor: getRGBA({ ...COLORS.black }),
          backgroundColor: getRGBA({ ...COLORS.white }),
          bodyColor: getRGBA({ ...graphColor }),
          usePointStyle: true,
          callbacks: {
            label: (context) => {
              return (
                formatNumberThreeSignificantDigits(context.raw) +
                " " +
                context.dataset.label.toLowerCase()
              );
            },
            labelPointStyle: function (context) {
              return {
                pointStyle: false,
              };
            },
          },
        },
        legend: {
          display: false,
        },

        title: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            autoSkip: true,
            maxTicksLimit: MAX_TICKS_LIMIT,
          },
        },
      },

      maintainAspectRatio: false,
      animation: true,
    },
  };

  return <Bar {...config} />;
}

export default BarGraph;
