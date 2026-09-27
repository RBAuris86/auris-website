"use client";

import DefaultHavenBackground from "./DefaultHavenBackground";

type HavenAIBackgroundProps = {
  accent: string;
};

export default function HavenAIBackground({
  accent,
}: HavenAIBackgroundProps) {
  return <DefaultHavenBackground accent={accent} />;
}