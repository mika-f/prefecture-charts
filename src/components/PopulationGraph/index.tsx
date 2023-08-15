import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

import { PrefCode } from "@/lib/resas";
import { usePopulations } from "./usePopulations";
import { Loading } from "../Loading";
import { styled } from "styled-components";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

type Props = {
  prefectures: { prefCode: PrefCode; prefName: string }[];
};

const distinct = <T,>(xs: T[]): T[] => {
  const set = new Set<T>();
  xs.forEach((x) => set.add(x));
  return Array.from(set);
};

const PopulationGraph = ({ prefectures }: Props) => {
  const { data, isLoading } = usePopulations({ prefectures: prefectures.map((p) => p.prefCode) });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>No Data</div>;
  }

  const labels = distinct(data!.flatMap((d) => d.result.data.flatMap((d) => d.data.map((d) => d.year.toString()))));
  const datasets = data!.flatMap((d, i) =>
    d.result.data.map((d) => ({
      label: `${prefectures[i].prefName}の${d.label}`,
      data: labels.map((l) => d.data.find((d) => d.year.toString() === l)?.value ?? 0),
      fill: false,
      hidden: d.label !== "総人口",
      backgroundColor: "transparent",
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
    })),
  );

  return (
    <ChartContainer>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "年度",
              },
            },
            y: {
              title: {
                display: true,
                text: "人口",
              },
            },
          },
        }}
        data={{ labels, datasets }}
      />
    </ChartContainer>
  );
};

export { PopulationGraph };
