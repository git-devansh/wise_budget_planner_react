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
    labels: [
      "Food",
      "Staying",
      "Mobility",
      "Entertainment",
      "Shopping",
      "Other",
    ],
    datasets: [
      {
        label: "Berlin",
        data: [8, 9, 7, 3, 5, 4],
        backgroundColor: "rgba(50, 168, 113, 0.2)",
        borderColor: "rgba(50, 168, 113, 1)",
        borderWidth: 1,
      },
      {
        label: "Budapest",
        data: [6, 5, 4, 5, 8, 5],
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
