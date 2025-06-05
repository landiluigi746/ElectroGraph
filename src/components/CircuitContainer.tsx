import CircuitSelector from "./CircuitSelector";
import CircuitImage from "./CircuitImage";
import CircuitGraph from "./CircuitGraph";
import type { Settings } from "../types";

type Props = {
  settings: Settings;
  setSettings: (value: Settings) => void;
};

function CircuitContainer({ settings, setSettings }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 w-112 h-auto">
      <CircuitSelector settings={settings} setSettings={setSettings} />
      <CircuitGraph settings={settings} setSettings={setSettings} />
      <CircuitImage selectedCircuit={settings.selectedCircuit} />
    </div>
  );
}

export default CircuitContainer;
