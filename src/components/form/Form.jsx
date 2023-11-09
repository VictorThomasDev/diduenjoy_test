import { useContext, useState } from "react";
import { KPIContext } from "../../context/context";

function Form() {
  const [KPI, setKPI] = useContext(KPIContext);
  console.log(KPI);
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 100),
    name: "",
    tooltip: "",
    trend: "",
    value: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    console.log(formData);
    setKPI([...KPI, formData]);
    event.preventDefault();
  };
  return (
    <div className="DUE-test-case">
      <h2>Card settings</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">KPI name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="tooltip">Tookit:</label>
        <input
          type="tooltip"
          id="tooltip"
          name="tooltip"
          onChange={handleChange}
        />

        <label htmlFor="value">Value:</label>
        <textarea id="value" name="value" onChange={handleChange} />
        <label htmlFor="trend">Trend:</label>
        <textarea id="trend" name="trend" onChange={handleChange} />

        <button type="submit">Update KPI</button>
      </form>
    </div>
  );
}

export default Form;
