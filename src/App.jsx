import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10">
      <h1 className="text-red-500 font-bold text-lg"> App </h1>
      <h5> {count} </h5>
      <button onClick={() => setCount(count + 1)}> Increase </button>
    </div>
  );
}

export default App;
