"use client";

import React from "react";

import { usePrefectures } from "./usePrefectures";
import { PrefCode } from "@/lib/resas";
import { Loading } from "../Loading";
import { Checkbox } from "../Checkbox";
import { Grid } from "../Grid";
import { useComplexData } from "@/hooks/useComplexData";

type Props = {
  onPrefectureChanged: (prefectures: { prefCode: PrefCode; prefName: string }[]) => void;
};

const Prefectures = ({ onPrefectureChanged }: Props) => {
  const { data, isLoading } = usePrefectures();
  const [, update] = useComplexData<PrefCode>({
    onStateUpdated: (prefectures) => {
      onPrefectureChanged(
        prefectures.map((prefecture) => ({
          prefCode: prefecture,
          prefName: data?.result.find((w) => w.prefCode === prefecture)?.prefName ?? "",
        })),
      );
    },
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid>
          {data?.result.map((prefecture) => (
            <div key={prefecture.prefCode}>
              <Checkbox label={prefecture.prefName} onChange={() => update(prefecture.prefCode)} />
            </div>
          ))}
        </Grid>
      )}
    </>
  );
};

export { Prefectures };
