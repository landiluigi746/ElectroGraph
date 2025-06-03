import { useRef } from "react";
import functionPlot from "function-plot";

function CircuitGraph() {
  const graphElement = useRef<HTMLDivElement>({} as HTMLDivElement);

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
        fn: "sin(x)",
      },
    ],
    width: 384,
    height: 256,
  });

  return <div ref={graphElement} />;
}

export default CircuitGraph;
