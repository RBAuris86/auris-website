"use client";

import HavenAIBackground from "./haven/HavenAIBackground";
import AdamBackground from "./haven/AdamBackground";
import AdromedaBackground from "./haven/AdromedaBackground";
import DefaultHavenBackground from "./haven/DefaultHavenBackground";

type HavenBackgroundProps = {
  accent: string;
  product?: string;
};

export default function HavenBackground({
  accent,
  product,
}: HavenBackgroundProps) {
  switch (product) {
    case "haven-ai":
      return <HavenAIBackground accent={accent} />;

    case "adam":
      return <AdamBackground accent={accent} />;

    case "adromeda":
      return <AdromedaBackground accent={accent} />;

    default:
      return <DefaultHavenBackground accent={accent} />;
  }
}