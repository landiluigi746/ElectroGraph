import { circuits } from "../config";

function CircuitImage({ selectedCircuit }: { selectedCircuit: number }) {
  return (
    <img
      className="rounded-3xl shadow-2xl transition duration-300 ease-in-out hover:scale-105"
      src={circuits[selectedCircuit].image}
      alt={circuits[selectedCircuit].name}
    />
  );
}

export default CircuitImage;
