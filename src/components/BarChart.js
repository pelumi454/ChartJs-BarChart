import React from "react";
import { Bar } from "react-chartjs-2";
import "../barChart.css";

const BarChart = () => {
  return (
    <div className="bar-chart-parent-card">
      <div className="bar-chart-card">
        <Bar
          data={{
            labels: [
              'January',
              'Febuary',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            datasets: [
              {
                label: 'Quantity',
                data: [12, 19, 3, 5, 9, 3, 22, 16, 7, 10, 4, 19],
                backgroundColor: '#64E5D6',
                borderWidth: 0,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              xAxes: {
                grid: {
                  display: false,
                },
              },
              yAxes: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
            },
            datasets: {
              bar: {
                barPercentage: 0.2,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { Column } from "@ant-design/plots";

// const DemoColumn = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch(
//       "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
//     )
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log("fetch data failed", error);
//       });
//   };
//   const config = {
//     data,
//     isStack: true,
//     xField: "year",
//     yField: "value",
//     seriesField: "type",
//     label: {
//       // 可手动配置 label 数据标签位置
//       position: "middle",
//       // 'top', 'bottom', 'middle'
//       // 可配置附加的布局方法
//       layout: [
//         // 柱形图数据标签位置自动调整
//         {
//           type: "interval-adjust-position",
//         }, // 数据标签防遮挡
//         {
//           type: "interval-hide-overlap",
//         }, // 数据标签文颜色自动调整
//         {
//           type: "adjust-color",
//         },
//       ],
//     },
//   };

//   return (<Column {...config} />)
// };

// // ReactDOM.render(<DemoColumn />, document.getElementById("container"));
