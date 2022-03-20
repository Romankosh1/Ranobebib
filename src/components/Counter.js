import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(2);
  console.log("🚀 ~ count", count);
  return (
    <div
      className="badge bg-dark text-wrap"
      style={{ backgroundColor: "brown", fontSize: "18px" }}
    >
      <button className="btn btn-primary" onClick={() => setCount(count + 2)}>
        +
      </button>
      <b
        className="mx-4"
        style={{
          color:
            count < 0
              ? "red"
              : count >= 10
              ? "green"
              : count === 0
              ? "hotpink"
              : "orange",
        }}
      >
        {count.toFixed(1)}
      </b>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="btn btn-primary mx-3" onClick={() => setCount(0)}>
        set
      </button>
    </div>
  );
}

export default Counter;
