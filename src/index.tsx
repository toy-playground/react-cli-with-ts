import { useState } from "react";
import ReactDOM from "react-dom";
import Child from './child';
function App() {
  const [click, setClick] = useState<number>(0);
  console.log('parent log');
  return <div className="app"><button onClick={() => setClick(x => { return x + 1; })}><Child val={click} /></button></div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
