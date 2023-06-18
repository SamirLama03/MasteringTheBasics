import React, { useState } from "react";

const ColorProject = () => {
  const [coloring, setColoring] = useState("");
  const handleColor = () => {};
  return (
    <>
      <div className="square" style={{ backgroundColor: coloring }}>
        Empty Value
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="inputValue"
          placeholder="Add color name"
          required
          autoFocus
          value={coloring}
          onChange={(e) => setColoring(e.target.value)}
        />
      </form>
    </>
  );
};

export default ColorProject;
