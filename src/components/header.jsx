import React, { useState } from "react";
import Basic from "./basic";
import Advance from "./advance";

export default function Header() {
  const [view, setView] = useState("basic");

  return (
    <div>
      <nav>
        <h3 onClick={() => setView("basic")}>Basic</h3>
        <h3 onClick={() => setView("advance")}>Advance</h3>
      </nav>
      {view === "basic" ? <Basic /> : <Advance />}
    </div>
  );
}
