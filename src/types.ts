export type Circuit = {
  id: string;
  name: string;
  image: string;
  calculateCurrent: (settings: Settings) => [number, number];
};

export type Settings = {
  peakVoltage: number;
  pulsation: number;
  phase: number;
  resistence: number;
  capacity: number;
  inductance: number;
  valueEnabled: string;
  selectedCircuit: number;
};
