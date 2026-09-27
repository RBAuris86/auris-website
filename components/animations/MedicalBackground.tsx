"use client";

import DefaultMedicalBackground from "./medical/DefaultMedicalBackground";
import ScribeBackground from "./medical/ScribeBackground";
import TriageBackground from "./medical/TriageBackground";
import PulseBackground from "./medical/PulseBackground";
import ChartBackground from "./medical/ChartBackground";
import RoundsBackground from "./medical/RoundsBackground";
import MedSyncBackground from "./medical/MedSyncBackground";

type MedicalBackgroundProps = {
  accent?: string;
  productId?: string;
};

export default function MedicalBackground({
  accent = "#dc2626",
  productId,
}: MedicalBackgroundProps) {
  switch (productId) {
    case "scribe":
      return <ScribeBackground accent={accent} />;

    case "triage":
      return <TriageBackground accent={accent} />;

    case "pulse":
      return <PulseBackground accent={accent} />;

    case "chart":
      return <ChartBackground accent={accent} />;

    case "rounds":
      return <RoundsBackground accent={accent} />;

    case "medsync":
      return <MedSyncBackground accent={accent} />;

    default:
      return <DefaultMedicalBackground />;
  }
}