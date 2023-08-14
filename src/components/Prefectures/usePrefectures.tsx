import useSWRImmutable from "swr/immutable";

import { f } from "@/lib/resas";

const usePrefectures = () => {
  const { data, error, isLoading } = useSWRImmutable("/v1/prefectures", f);

  return {
    data,
    error,
    isLoading,
  };
};

export { usePrefectures };
