import useSWRImmutable from "swr/immutable";

import { GetPrefecturesResponse, f } from "@/lib/resas";

const usePrefectures = () => {
  const { data, error, isLoading } = useSWRImmutable("/v1/prefectures", (w) => f<GetPrefecturesResponse>(w));

  return {
    data,
    error,
    isLoading,
  };
};

export { usePrefectures };
