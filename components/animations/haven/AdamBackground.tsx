"use client";

import DefaultHavenBackground from "./DefaultHavenBackground";

type AdamBackgroundProps = {
  accent: string;
};

export default function AdamBackground({
  accent,
}: AdamBackgroundProps) {
  return <DefaultHavenBackground accent={accent} />;
}