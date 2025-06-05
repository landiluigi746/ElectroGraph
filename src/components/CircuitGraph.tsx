import { useEffect, useRef } from "react";
import functionPlot from "function-plot";
import type { Settings } from "../types";
import { circuits } from "../config";

type Props = {
  settings: Settings;
  setSettings: (value: Settings) => void;
};

function CircuitGraph({ settings, setSettings }: Props) {
  const graphElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphElement.current) return;

    functionPlot({
      target: graphElement.current,
      xAxis: {
        label: "Prova X",
      },
      yAxis: {
        label: "Prova Y",
      },
      grid: true,
      data: [
        {
          vector: [settings.peakVoltage*Math.cos(settings.phase* Math.PI/180), settings.peakVoltage*Math.sin(settings.phase* Math.PI/180)],
          graphType: "polyline",
          fnType: `vector`,
        },

        {
          vector: circuits[settings.selectedCircuit].calculateCurrent(settings),
          graphType: "polyline",
          fnType: `vector`,
        },
      ],
      width: 384,
      height: 256,
    });
  });

  return <div ref={graphElement} />;
}

export default CircuitGraph;
