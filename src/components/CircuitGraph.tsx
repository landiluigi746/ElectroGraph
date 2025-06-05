import { useEffect, useRef } from "react";
import functionPlot from "function-plot";
import type { Settings } from "../types";

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
          fn: `sin(x)`,
        },
      ],
      width: 384,
      height: 256,
    });
  });

  return <div ref={graphElement} />;
}

export default CircuitGraph;
