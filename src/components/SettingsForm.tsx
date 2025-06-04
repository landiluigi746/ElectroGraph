import {
  InputNumber,
  type InputNumberChangeEvent,
} from "primereact/inputnumber";
import { type Settings } from "../types";
import { capacity, inductance, resistence } from "../config";

type Props = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

function SettingsForm({ settings, setSettings }: Props) {
  const onChange = (e: InputNumberChangeEvent) => {
    e.originalEvent.preventDefault();
    setSettings({
      ...settings,
      [(e.originalEvent.target as HTMLInputElement).name]: e.value,
    });
    console.log(settings);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(settings);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-72 items-center">
      <div className="flex flex-col gap-2">
        <label htmlFor="peakVoltage">Valore di picco</label>
        <InputNumber
          id="peakVoltage"
          name="peakVoltage"
          value={settings.peakVoltage}
          onChange={onChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pulsation">Pulsazione</label>
        <InputNumber
          id="pulsation"
          name="pulsation"
          value={settings.pulsation}
          onChange={onChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phase">Fase</label>
        <InputNumber
          id="phase"
          name="phase"
          value={settings.phase}
          onChange={onChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="resistence">Resistenza</label>
        <InputNumber
          id="resistence"
          name="resistence"
          suffix=" Ω"
          value={settings.resistence}
          onChange={onChange}
          disabled={settings.valueEnabled !== resistence}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="capacity">Capacità</label>
        <InputNumber
          id="capacity"
          name="capacity"
          suffix=" F"
          value={settings.capacity}
          onChange={onChange}
          disabled={settings.valueEnabled !== capacity}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="inductance">Induttanza</label>
        <InputNumber
          id="inductance"
          name="inductance"
          suffix=" H"
          value={settings.inductance}
          onChange={onChange}
          disabled={settings.valueEnabled !== inductance}
        />
      </div>
    </form>
  );
}

export default SettingsForm;
