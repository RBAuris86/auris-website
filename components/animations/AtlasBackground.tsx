"use client";

import DefaultAtlasBackground from "./atlas/DefaultAtlasBackground";
import DirectoryBackground from "./atlas/DirectoryBackground";
import InsightsBackground from "./atlas/InsightsBackground";
import NavigateBackground from "./atlas/NavigateBackground";


type AtlasBackgroundProps = {
  accent: string;
  product?: string;
};

export default function AtlasBackground({
  accent,
  product,
}: AtlasBackgroundProps) {
  switch (product) {
    case "directory":
      return <DirectoryBackground accent={accent} />;

    case "navigate":
      return <NavigateBackground accent={accent} />;

    case "insights":
      return <InsightsBackground accent={accent} />;

    default:
      return <DefaultAtlasBackground accent={accent} />;
  }
}