"use client"
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function DashboardChart() {
  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
    },
    colors: ["#6ab04c"],
    fill: {
      colors: ["#6ab04c"],
    }
    
    
    
  };

  const series = [
    {
      name: "Etkileşim",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <>
      <Chart type="bar" options={options} series={series} width="100%" height={300} />
    </>
  );
}
