import React from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Calculate() {
  const data = {
    labels: ["Food", "Housing", "Mobility", "Thing"],
    datasets: [
      {
        label: "Berlin",
        data: [2, 9, 3, 5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Budapest",
        data: [5, 3, 7, 8],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(155, 89, 139, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-3">
          Compare your <span className="text-primary">Spending</span>
        </h1>
        <div className="w-50 d-flex justify-content-center mb-5">
          <Radar data={data} />
        </div>
      </div>
    </>
  );
}

export default Calculate;
