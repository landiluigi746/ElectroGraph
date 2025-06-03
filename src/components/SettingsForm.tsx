import {
  InputNumber,
  type InputNumberChangeEvent,
} from "primereact/inputnumber";
import { type Settings } from "../types";

type Props = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

function SettingsForm({ settings, setSettings }: Props) {
  const onChange = (e: InputNumberChangeEvent) => {
    e.originalEvent.preventDefault();
    setSettings({
      ...settings,
      [e.originalEvent.currentTarget.localName]: e.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(settings);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-72">
      <div className="flex flex-col gap-2">
        <label htmlFor="peakVoltage">Valore di picco</label>
        <InputNumber id="peakVoltage" name="peakVoltage" onChange={onChange} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pulsation">Pulsazione</label>
        <InputNumber id="pulsation" name="pulsation" onChange={onChange} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phase">Fase</label>
        <InputNumber id="phase" name="phase" onChange={onChange} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="resistence">Resistenza</label>
        <InputNumber id="resistence" name="resistence" onChange={onChange} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="capacity">Capacità</label>
        <InputNumber id="capacity" name="capacity" onChange={onChange} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="inductance">Induttanza</label>
        <InputNumber id="inductance" name="inductance" onChange={onChange} />
      </div>
    </form>
  );
}

export default SettingsForm;
