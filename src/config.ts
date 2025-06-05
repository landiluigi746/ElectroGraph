import { type Circuit } from "./types";
import circuitoResistivoImg from "./assets/circuito_resistivo.png";
import circuitoCapacitivoImg from "./assets/circuito_capacitivo.png";
import circuitoInduttivoImg from "./assets/circuito_induttivo.png";

export const resistence = "R";
export const capacity = "C";
export const inductance = "L";

export const circuits: Circuit[] = [
  {
    id: resistence,
    name: "Circuito Puro Resistivo",
    image: circuitoResistivoImg,
    calculateCurrent: (settings) => {
      const x = (settings.peakVoltage / settings.resistence) * Math.cos(settings.phase * Math.PI / 180);
      const y = (settings.peakVoltage / settings.resistence) * Math.sin(settings.phase * Math.PI / 180);
      return [x, y];
    },
  },
  {
    id: capacity,
    name: "Circuito Puro Capacitivo",
    image: circuitoCapacitivoImg,
    calculateCurrent: (settings) => {
      const x = (settings.peakVoltage * settings.pulsation * settings.capacity) * Math.cos((settings.phase * Math.PI / 180) + 90);
      const y = (settings.peakVoltage * settings.pulsation * settings.capacity) * Math.sin((settings.phase * Math.PI / 180) + 90);
      return [x, y];
    },
  },
  {
    id: inductance,
    name: "Circuito Puro Induttivo",
    image: circuitoInduttivoImg,
    calculateCurrent: (settings) => {
      const x = (settings.peakVoltage / (settings.inductance * settings.pulsation)) * Math.cos((settings.phase * Math.PI / 180) - 90);
      const y = (settings.peakVoltage / (settings.inductance * settings.pulsation)) * Math.sin((settings.phase * Math.PI / 180) - 90);
      return [x, y];
    },
  },
];
