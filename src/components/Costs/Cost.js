import "./Cost.css";
import CostFilter from "./CostFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostDiagram from "./CostsDiagram";

const Cost = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="wrapper1">
      <div className="cost">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostDiagram costs={filteredCosts} />
        <CostList cost={filteredCosts} />
      </div>
    </div>
  );
};

export default Cost;
