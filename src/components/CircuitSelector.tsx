import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { circuits } from "../config";
import type { Settings } from "../types";

type Props = {
  settings: Settings;
  setSettings: (value: Settings) => void;
};

function CircuitSelector({ settings, setSettings }: Props) {
  const options = circuits.map((circuit, index) => ({
    name: circuit.name,
    value: index,
  }));

  const onChange = (e: DropdownChangeEvent) => {
    setSettings({
      ...settings,
      selectedCircuit: e.value,
      valueEnabled: circuits[e.value].id,
    });
    console.log(settings);
  };

  return (
    <Dropdown
      value={settings.selectedCircuit}
      onChange={onChange}
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
