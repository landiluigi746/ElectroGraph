import { type Circuit } from "./types";
import circuitoResistivoImg from "./assets/circuito_resistivo.png";
import circuitoCapacitivoImg from "./assets/circuito_capacitivo.png";
import circuitoInduttivoImg from "./assets/circuito_induttivo.png";
import deg2rad from "./utils";

export const resistence = "R";
export const capacity = "C";
export const inductance = "L";

export const circuits: Circuit[] = [
  {
    id: resistence,
    name: "Circuito Puro Resistivo",
    image: circuitoResistivoImg,
    calculateCurrent: (s) => {
      const x = (s.peakVoltage / s.resistence) * Math.cos(deg2rad(s.phase));
      const y = (s.peakVoltage / s.resistence) * Math.sin(deg2rad(s.phase));
      return [x, y];
    },
  },
  {
    id: capacity,
    name: "Circuito Puro Capacitivo",
    image: circuitoCapacitivoImg,
    calculateCurrent: (s) => {
      const x = s.peakVoltage * s.pulsation * s.capacity * Math.cos(deg2rad(s.phase + 90));
      const y = s.peakVoltage * s.pulsation * s.capacity * Math.sin(deg2rad(s.phase + 90));

      return [x, y];
    },
  },
  {
    id: inductance,
    name: "Circuito Puro Induttivo",
    image: circuitoInduttivoImg,
    calculateCurrent: (s) => {
      const x = (s.peakVoltage / (s.inductance * s.pulsation)) * Math.cos(deg2rad(s.phase - 90));
      const y = (s.peakVoltage / (s.inductance * s.pulsation)) * Math.sin(deg2rad(s.phase - 90));

      return [x, y];
    },
  },
];
