import { useEffect, useRef } from "react";
import functionPlot from "function-plot";
import type { Settings } from "../types";
import { circuits } from "../config";
import deg2rad from "../utils";

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
        label: "Re",
      },
      yAxis: {
        label: "Img",
      },
      grid: true,
      data: [
        {
          vector: [
            settings.peakVoltage * Math.cos(deg2rad(settings.phase)),
            settings.peakVoltage * Math.sin(deg2rad(settings.phase)),
          ],
          graphType: "polyline",
          fnType: "vector",
        },

        {
          vector: circuits[settings.selectedCircuit].calculateCurrent(settings),
          graphType: "polyline",
          fnType: "vector",
        },
      ],
      width: 420,
      height: 280,
    });
  });

  return <div ref={graphElement} />;
}

export default CircuitGraph;
