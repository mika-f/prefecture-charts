import { renderHook } from "@testing-library/react-hooks";

import { useComplexData } from "./useComplexData";

const context = describe;

describe("useComplexData", () => {
  context("args", () => {
    context("when initialState is not provided", () => {
      it("returns an empty array", () => {
        const { result } = renderHook(() => useComplexData<string>({}));
        const [state] = result.current;

        expect(state).toEqual([]);
      });
    });

    context("when initialState is provided", () => {
      it("returns the initialState", () => {
        const initialState = ["a", "b", "c"];
        const { result } = renderHook(() => useComplexData<string>({ initialState }));
        const [state] = result.current;

        expect(state).toEqual(initialState);
      });
    });
  });

  context("update", () => {
    context("when the value is not in the state", () => {
      it("adds the value to the state", () => {
        const { result } = renderHook(() => useComplexData<string>({}));
        const [, update] = result.current;

        update("a");

        const [state] = result.current;

        expect(state).toEqual(["a"]);
      });
    });

    context("when the value is in the state", () => {
      it("removes the value from the state", () => {
        const { result } = renderHook(() => useComplexData<string>({ initialState: ["a"] }));
        const [, update] = result.current;

        update("a");

        const [state] = result.current;

        expect(state).toEqual([]);
      });
    });
  });
});
