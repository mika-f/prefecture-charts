import { SpyInstance, afterAll, vi } from "vitest";

import { fetcher } from "./resas";

const context = describe;
const TEST_API_KEY = "test";

type EmptyArray = any[];

describe("resas", () => {
  let _fetch: SpyInstance;

  // mock fetch
  beforeEach(() => {
    _fetch = vi.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve(new Response("[]", { status: 200 }));
    });
  });

  // mock process.env
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_RESAS_API_KEY", TEST_API_KEY);
  });

  describe("fetcher", () => {
    context("when called with a valid endpoint and empty parameters", () => {
      it("should call fetch with the correct URL", async () => {
        await fetcher<EmptyArray>("/v1/prefectures", {});

        expect(_fetch).toHaveBeenCalledTimes(1);
        expect(_fetch).toHaveBeenCalledWith("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
          headers: {
            "X-API-KEY": TEST_API_KEY,
          },
        });
      });

      it("should call fetch with the correct headers", async () => {
        await fetcher<EmptyArray>("/v1/prefectures", {});

        expect(_fetch).toHaveBeenCalledTimes(1);
        expect(_fetch).toHaveBeenCalledWith(expect.anything(), {
          headers: {
            "X-API-KEY": TEST_API_KEY,
          },
        });
      });

      it("should return a valid response", async () => {
        const res = await fetcher<EmptyArray>("/v1/prefectures", {});
        expect(res).toEqual([]);
      });
    });

    context("when called with a valid endpoint and parameters", () => {
      context("parameter is a string value", () => {
        it("should call fetch with the correct URL", async () => {
          await fetcher<EmptyArray>("/v1/prefectures", {
            param1: "value1",
          });

          expect(_fetch).toHaveBeenCalledTimes(1);
          expect(_fetch).toHaveBeenCalledWith("https://opendata.resas-portal.go.jp/api/v1/prefectures?param1=value1", {
            headers: {
              "X-API-KEY": TEST_API_KEY,
            },
          });
        });
      });
    });

    context("parameter is a string array value", () => {
      it("should call fetch with the correct URL", async () => {
        await fetcher<EmptyArray>("/v1/prefectures", {
          param1: ["value1", "value2"],
        });

        expect(_fetch).toHaveBeenCalledTimes(1);
        expect(_fetch).toHaveBeenCalledWith(
          "https://opendata.resas-portal.go.jp/api/v1/prefectures?param1=value1%2Cvalue2",
          {
            headers: {
              "X-API-KEY": TEST_API_KEY,
            },
          },
        );
      });
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
