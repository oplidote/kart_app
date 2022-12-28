import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [ data, setData ] = useState('');
  const onClick = () => {
    axios(
      "https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results?count=10&date=2022-12-27&cursor="
    ).then((res) => {
      setData(res);
    });
  };
  return (
    <div className="App">
      <button onClick={onClick}></button>
      <div>
      {data}
      </div>
    </div>
  );
}

export default App;
