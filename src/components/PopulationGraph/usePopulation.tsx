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

const usePopulation = (props: Props) => {
  const { data, error, isLoading } = useSWRImmutable(
    props.prefectures.length > 0 && [
      "/v1/population/composition/perYear",
      {
        prefCode: props.prefectures[0],
        cityCode: "-",
      } satisfies GetPopulationCompositionPerYearRequest,
    ],
    (w) => f<GetPopulationCompositionPerYearResponse>(w),
  );

  return {
    data,
    error,
    isLoading,
  };
};

export { usePopulation };
