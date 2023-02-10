import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [toDo, setToDO] = useState("");
  const onChange = (event) => {
    setToDO(event.target.value)
  }
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Write"/>
    </div>
  );
}

export default App;
