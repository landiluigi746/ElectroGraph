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
  },
  {
    id: capacity,
    name: "Circuito Puro Capacitivo",
    image: circuitoCapacitivoImg,
  },
  {
    id: inductance,
    name: "Circuito Puro Induttivo",
    image: circuitoInduttivoImg,
  },
];
