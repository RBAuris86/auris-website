"use client";

import SentinelBackground from "./orbit/SentinelBackground";
import RelayBackground from "./orbit/RelayBackground";
import VisionBackground from "./orbit/VisionBackground";
import WeatherBackground from "./orbit/WeatherBackground";
import GuardianBackground from "./orbit/GuardianBackground";
import DefaultOrbitBackground from "./orbit/DefaultOrbitBackground";

type OrbitBackgroundProps = {
  accent: string;
  product?: string;
};

export default function OrbitBackground({
  accent,
  product,
}: OrbitBackgroundProps) {
  switch (product) {
    case "sentinel":
      return <SentinelBackground accent={accent} />;

    case "relay":
      return <RelayBackground accent={accent} />;

    case "vision":
      return <VisionBackground accent={accent} />;

    case "weather":
      return <WeatherBackground accent={accent} />;

    case "guardian":
      return <GuardianBackground accent={accent} />;

    default:
      return <DefaultOrbitBackground accent={accent} />;
  }
}