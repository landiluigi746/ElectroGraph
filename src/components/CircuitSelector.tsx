import { Dropdown } from "primereact/dropdown";
import { circuits } from "../config";

type Props = {
  selectedCircuit: number;
  setSelectedCircuit: (value: number) => void;
};

function CircuitSelector({ selectedCircuit, setSelectedCircuit }: Props) {
  const options = circuits.map((circuit, index) => ({
    name: circuit.name,
    value: index,
  }));

  return (
    <Dropdown
      value={selectedCircuit}
      onChange={(e) => setSelectedCircuit(e.value)}
      options={options}
      optionLabel="name"
      defaultValue={circuits[0].name}
      placeholder="Seleziona Circuito"
      checkmark={true}
      highlightOnSelect={false}
    />
  );
}

export default CircuitSelector;
