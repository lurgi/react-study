import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [count,setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const countUp = () => {setCount((prop)=>prop+1)};
  const onChange = (event) =>{
    setKeyword(event.target.value);
  }
  // console.log("SEARCH FOR", keyword)
  const a = () => console.log("SEARCH FOR", keyword)
  useEffect(a,[keyword])
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder ="Search here..."></input>
      {count}
      <button onClick={countUp}>HI</button>
    </div>
  );
}

export default App;
