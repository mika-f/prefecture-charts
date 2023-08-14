import { useState } from "react";

type Props<T> = {
  initialState?: T[];
  onStateUpdated?: (state: T[]) => void;
};

const useComplexData = <T>(args: Props<T>) => {
  const [state, setState] = useState<T[]>(args.initialState ?? []);

  const update = (value: T) => {
    if (state.includes(value)) {
      const newState = state.filter((item) => item !== value);

      setState(newState);
      args.onStateUpdated?.(newState);
    } else {
      const newState = [...state, value];

      setState(newState);
      args.onStateUpdated?.(newState);
    }
  };

  return [state, update] as const;
};

export { useComplexData };
