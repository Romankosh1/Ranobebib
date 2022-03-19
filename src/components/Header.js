import { useState } from "react";

function Header() {
  const [count, setCount] = useState(2);
  console.log("🚀 ~ count", count);
  return (
    <div style={{ backgroundColor: "black" }}>
      <b style={{ color: "lightseagreen", fontSize: "22px" }}> Counter </b>
    </div>
  );
}

export default Header;
