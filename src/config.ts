import { type Circuit } from "./types";
import circuitoResistivoImg from "./assets/circuito_resistivo.png";
import circuitoCapacitivoImg from "./assets/circuito_capacitivo.png";
import circuitoInduttivoImg from "./assets/circuito_induttivo.png";

export const circuits: Circuit[] = [
  {
    name: "Circuito Puro Resistivo",
    image: circuitoResistivoImg,
  },
  {
    name: "Circuito Puro Capacitivo",
    image: circuitoCapacitivoImg,
  },
  {
    name: "Circuito Puro Induttivo",
    image: circuitoInduttivoImg,
  },
];
