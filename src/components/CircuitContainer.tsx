import { useState } from "react";
import CircuitSelector from "./CircuitSelector";
import CircuitImage from "./CircuitImage";
import CircuitGraph from "./CircuitGraph";

function CircuitContainer() {
  const [selectedCircuit, setSelectedCircuit] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 w-96 h-auto">
      <CircuitSelector
        selectedCircuit={selectedCircuit}
        setSelectedCircuit={setSelectedCircuit}
      />
      <CircuitGraph />
      <CircuitImage selectedCircuit={selectedCircuit} />
    </div>
  );
}

export default CircuitContainer;
