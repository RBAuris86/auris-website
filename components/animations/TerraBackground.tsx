import StormBackground from "./terra/StormBackground";
import VolcanoBackground from "./terra/VolcanoBackground";
import SeismicBackground from "./terra/SeismicBackground";
import WildfireBackground from "./terra/WildfireBackground";
import OceanusBackground from "./terra/OceanusBackground";
import AvlancheBackground from "./terra/AvalancheBackground";
import AtmosBackground from "./terra/AtmosBackground";
import DefaultTerraBackground from "./terra/DefaultTerraBackground";

type TerraBackgroundProps = {
  accent: string;
  product?: string;
};

export default function TerraBackground({
  accent,
  product,
}: TerraBackgroundProps) {
  switch (product) {
    case "swarm":
      return <StormBackground accent={accent} />;

    case "vulcan":
      return <VolcanoBackground accent={accent} />;

    case "seismo":
      return <SeismicBackground accent={accent} />;

    case "wildfire":
      return <WildfireBackground accent={accent} />;

    case "oceanus":
      return <OceanusBackground accent={accent} />;

    case "avalanche":
      return <AvlancheBackground accent={accent} />;

    case "atmos":
      return <AtmosBackground accent={accent} />;

    default:
      return <DefaultTerraBackground accent={accent} />;
  }
}