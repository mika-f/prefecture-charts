type ApiResponse<T> = { message: string | null; result: T };

const transform = (args: Record<string, unknown>): Record<string, string> => {
  return Object.fromEntries(
    Object.entries(args).map(([key, value]) => {
      if (Array.isArray(value)) {
        return [key, value.join(",")];
      }

      if (typeof value === "object") {
        return [key, JSON.stringify(value)];
      }

      return [key, `${value}`];
    }),
  );
};

// base fetcher
const fetcher = async <T>(endpoint: string, args: Record<string, unknown>): Promise<ApiResponse<T>> => {
  const url = new URL(`api${endpoint}`, "https://opendata.resas-portal.go.jp");
  url.search = new URLSearchParams(transform(args)).toString();

  const res = await fetch(url.toString(), {
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY,
    },
  });

  return await res.json();
};

// typings

// Branding
type Brand<K, T> = K & { __brand: T };

type PrefCode = Brand<number, "PrefCode">;

type CityCode = Brand<number, "CityCode">;

// 都道府県一覧 - https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
type Prefecture = {
  prefCode: PrefCode;
  prefName: string;
};

type GetPrefecturesResponse = Prefecture[];

// 人口構成 - https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
type GetPopulationCompositionPerYearRequest = {
  prefCode: PrefCode;
  cityCode: CityCode | "-";
  addArea?: (`${PrefCode}_` | `${PrefCode}_${CityCode}`)[];
};

type PopulationData = {
  year: number;
  value: number;
  rate?: number;
};

type PopulationDataWithLabel = {
  label: string;
  data: PopulationData[];
};

type GetPopulationCompositionPerYearResponse = {
  boundaryYear: number;
  data: PopulationDataWithLabel[];
};

export { fetcher };

export type {
  PrefCode,
  CityCode,
  Prefecture,
  GetPrefecturesResponse,
  PopulationData,
  PopulationDataWithLabel,
  GetPopulationCompositionPerYearRequest,
  GetPopulationCompositionPerYearResponse,
};
