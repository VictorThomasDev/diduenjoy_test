import { useContext } from "react";
import "./Select.css";
import { KPIContext } from "../../context/context";

function Select({ setAddKPI }) {
  const [KPIs, setKPI] = useContext(KPIContext);
  console.log(KPIs);

  function handleAdd() {
    setAddKPI(true);
  }

  return (
    <div className="frame">
      <>
        {/* {KPIs.map((KPI) => {
          <div className="widget">toto</div>;
        })} */}
      </>
      <div className="widget" onClick={handleAdd}>
        +
      </div>
    </div>
  );
}

export default Select;
