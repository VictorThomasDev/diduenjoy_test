import { useContext, useState } from "react";
import { KPIContext } from "../../context/context";
import "./Form.css";

function Form({ formData, setFormData }) {
  const [KPIs, setKPIs] = useContext(KPIContext);

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let is = false;
    const newKPIs = KPIs.map((KPI) => {
      if (KPI.id === formData.id) {
        is = true;
        return formData;
      }
      return KPI;
    });
    if (is) setKPIs([...newKPIs]);
    else setKPIs([...KPIs, formData]);
  };
  return (
    <div className="DUE-test-case">
      <h2 className="title">Card settings</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">KPI name:</label>
        <input
          type="text"
          value={formData.name}
          id="name"
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="tooltip">Tookit:</label>
        <input
          type="tooltip"
          id="tooltip"
          name="tooltip"
          value={formData.tooltip}
          onChange={handleChange}
        />

        <label htmlFor="value">Value:</label>
        <textarea
          id="value"
          value={formData.value}
          name="value"
          onChange={handleChange}
        />
        <label htmlFor="trend">Trend:</label>
        <textarea
          id="trend"
          value={formData.trend}
          name="trend"
          onChange={handleChange}
        />

        <button type="submit">Update KPI</button>
      </form>
    </div>
  );
}

export default Form;
