import useSWRImmutable from "swr/immutable";

import {
  GetPopulationCompositionPerYearRequest,
  GetPopulationCompositionPerYearResponse,
  PrefCode,
  f,
} from "@/lib/resas";

type Props = {
  prefectures: PrefCode[];
};

const combine = (url: string, params: GetPopulationCompositionPerYearRequest[]) => {
  return Promise.all(params.map((p) => f<GetPopulationCompositionPerYearResponse>([url, p])));
};

const usePopulations = (props: Props) => {
  const { data, error, isLoading } = useSWRImmutable(
    props.prefectures.length > 0 && [
      "/v1/population/composition/perYear",
      props.prefectures.map(
        (w) =>
          ({
            prefCode: w,
            cityCode: "-",
          }) satisfies GetPopulationCompositionPerYearRequest,
      ),
    ],
    (w) => combine(w[0], w[1]),
  );

  return {
    data,
    error,
    isLoading,
  };
};

export { usePopulations };
