import { useState } from "react";
import type { Settings } from "./types";
import SettingsForm from "./components/SettingsForm";
import CircuitContainer from "./components/CircuitContainer";

function App() {
  const [settings, setSettings] = useState<Settings>({
    peakVoltage: 0,
    pulsation: 0,
    phase: 0,
    resistence: 0,
    capacity: 0,
    inductance: 0,
    valueEnabled: "R",
    selectedCircuit: 0,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col p-8 gap-8 items-center justify-center bg-linear-to-b from-zinc-50 to-white rounded-3xl shadow-lg">
        <h1 className="text-3xl font-extrabold">tlc</h1>

        <div className="flex flex-row gap-16">
          <SettingsForm settings={settings} setSettings={setSettings} />
          <CircuitContainer settings={settings} setSettings={setSettings} />
        </div>
      </div>
    </div>
  );
}

export default App;
