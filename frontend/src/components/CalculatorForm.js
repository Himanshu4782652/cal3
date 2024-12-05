import React, { useState } from "react";
import axios from "axios";

const CalculatorForm = ({ setResults }) => {
 const [inputs, setInputs] = useState({
  landArea: "",
  cropType: "wheat",
  irrigationMethod: "drip",
  etRate: "",
  rainfall: "",
 });

 const handleChange = (e) => {
  setInputs({ ...inputs, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post("http://localhost:5000/api/calculate", inputs);
   setResults(response.data);
  } catch (error) {
   console.error(error);
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <label>
    Land Area (in hectares):
    <input type="number" name="landArea" value={inputs.landArea} onChange={handleChange} required />
   </label>
   <label>
    Crop Type:
    <select name="cropType" value={inputs.cropType} onChange={handleChange}>
     <option value="wheat">Wheat</option>
     <option value="rice">Rice</option>
     <option value="maize">Maize</option>
    </select>
   </label>
   <label>
    Irrigation Method:
    <select name="irrigationMethod" value={inputs.irrigationMethod} onChange={handleChange}>
     <option value="drip">Drip</option>
     <option value="sprinkler">Sprinkler</option>
     <option value="flood">Flood</option>
    </select>
   </label>
   <label>
    Evapotranspiration Rate (ET):
    <input type="number" name="etRate" value={inputs.etRate} onChange={handleChange} required />
   </label>
   <label>
    Rainfall Contribution:
    <input type="number" name="rainfall" value={inputs.rainfall} onChange={handleChange} />
   </label>
   <button type="submit">Calculate</button>
  </form>
 );
};

export default CalculatorForm;
