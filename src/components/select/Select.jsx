import { useContext } from "react";
import "./Select.css";
import { KPIContext } from "../../context/context";

function Select({ setAddKPI, setFormData }) {
  const [KPIs, setKPI] = useContext(KPIContext);

  function handleAdd() {
    setFormData({
      id: Math.floor(Math.random() * 100),
      name: "",
      tooltip: "",
      trend: "",
      value: "",
    });
    setAddKPI(true);
  }

  function handleUpdateData(KPI) {
    setFormData(KPI);
    setAddKPI(true);
  }

  return (
    <div className="frame">
      <>
        {KPIs.map((KPI, key) => {
          return (
            <button className="widget" onClick={() => handleUpdateData(KPI)}>
              {key}
            </button>
          );
        })}
      </>
      <button className="widget" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default Select;
