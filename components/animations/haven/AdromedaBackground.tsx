"use client";

import DefaultHavenBackground from "./DefaultHavenBackground";

type AdromedaBackgroundProps = {
  accent: string;
};

export default function AdromedaBackground({
  accent,
}: AdromedaBackgroundProps) {
  return <DefaultHavenBackground accent={accent} />;
}