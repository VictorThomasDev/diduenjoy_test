import { useState } from "react";
import Select from "../components/select/Select";
import "./App.css";
import Form from "../components/form/Form";
import { KPIContext } from "../context/context";

function App() {
  const [selectedKPI, setSelectedKPI] = useState();
  const [KPI, setKPI] = useState([]);
  const [addKPI, setAddKPI] = useState(false);

  return (
    <div className="App">
      <KPIContext.Provider value={[KPI, setKPI]}>
        <Select setAddKPI={setAddKPI}></Select>
        {addKPI ? <Form></Form> : <></>}
      </KPIContext.Provider>
    </div>
  );
}

export default App;
