"use client";
import { useCallback, useState } from "react";

import { Layout } from "@/components/Layout";
import { Prefectures } from "@/components/Prefectures";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PrefCode } from "@/lib/resas";

import type { Metadata } from "next";
import { Heading2 } from "@/components/Headings";
import { PopulationGraph } from "@/components/PopulationGraph";

export default function Home() {
  const [prefectures, setPrefectures] = useState<{ prefCode: PrefCode; prefName: string }[]>([]);
  const onPrefectureChanged = useCallback((prefectures: { prefCode: PrefCode; prefName: string }[]) => {
    setPrefectures(prefectures);
  }, []);

  return (
    <Layout>
      <Container>
        <Section>
          <Heading2>都道府県</Heading2>
          <Prefectures onPrefectureChanged={onPrefectureChanged} />
        </Section>
        <Section>
          <Heading2>人口推移グラフ</Heading2>
          <PopulationGraph prefectures={prefectures} />
        </Section>
      </Container>
    </Layout>
  );
}
