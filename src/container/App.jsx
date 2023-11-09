import { useState } from "react";
import Select from "../components/select/Select";
import "./App.css";
import Form from "../components/form/Form";
import { KPIContext } from "../context/context";

function App() {
  const [KPI, setKPI] = useState([]);
  const [addKPI, setAddKPI] = useState(false);
  const [formData, setFormData] = useState();

  return (
    <div className="App">
      <KPIContext.Provider value={[KPI, setKPI]}>
        <Select setAddKPI={setAddKPI} setFormData={setFormData}></Select>
        {addKPI ? (
          <Form formData={formData} setFormData={setFormData}></Form>
        ) : (
          <></>
        )}
      </KPIContext.Provider>
    </div>
  );
}

export default App;
