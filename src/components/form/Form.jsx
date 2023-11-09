import { useContext, useState } from "react";
import { KPIContext } from "../../context/context";

function checkUpdate(KPIs, formData) {
  const newKPIs = [...KPIs];
  let isNotNew = false;

  for (let i = 0; i < KPIs.length; i++) {
    console.log(KPIs[i].id, formData);

    if (KPIs[i].id === formData.id) {
      newKPIs[i] = formData;
      console.log(KPIs[i], formData);
      isNotNew = true;
    }
  }
  if (isNotNew) return newKPIs;
  return null;
}

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
    const newKPIs = checkUpdate(KPIs, formData);
    if (newKPIs !== null) {
      console.log("oldone");
      setKPIs(newKPIs);
    } else {
      console.log("newone");
      setKPIs([...KPIs, formData]);
      event.preventDefault();
    }
  };
  return (
    <div className="DUE-test-case">
      <h2>Card settings</h2>
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
