import React from "react";

const Results = ({ results }) => {
 return (
  <div>
   <h2>Results:</h2>
   <p>Crop Water Requirement (CWR): {results.cwr} m³/ha</p>
   <p>Total Water Requirement: {results.totalWaterRequirement} m³</p>
   <p>Net Water Requirement: {results.netWaterRequirement} m³</p>
  </div>
 );
};

export default Results;
