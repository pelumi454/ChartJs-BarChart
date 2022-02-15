import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import "../barChart.css";

defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";

const BarChart = () => {
  return (
    <div className="bar-chart-parent-card">
      <div className="bar-chart-card">
        <Bar
          data={{
            labels: [
              "January",
              "Febuary",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            datasets: [
              {
                label: "Quantity",
                data: [12, 19, 3, 5, 9, 3, 22, 16, 7, 10, 4, 19],
                backgroundColor: "#64E5D6",
                borderColor: "red",
                borderRadius: 20,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    labelString: "value",
                  },
                  barPercentage: 0.12,
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                    labelString: "value",
                  },
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 25,
                  },
                },
              ],
            },

            // plugins: {
            //   labels: {
            //     usePointStyle: true,
            //     pointStyle: "rectRounded",
            //   },
            // },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
