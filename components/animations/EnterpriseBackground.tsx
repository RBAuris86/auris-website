"use client";

import DefaultEnterpriseBackground from "./enterprise/DefaultEnterpriseBackground";
import CommandBackground from "./enterprise/CommandBackground";
import ProjectsBackground from "./enterprise/ProjectsBackground";
import ServiceDeskBackground from "./enterprise/ServiceDeskBackground";
import AssetsBackground from "./enterprise/AssetsBackground";
import AnalyticsBackground from "./enterprise/AnalyticsBackground";
import IdentityBackground from "./enterprise/IdentityBackground";

type EnterpriseBackgroundProps = {
  accent: string;
  productId?: string;
};

export default function EnterpriseBackground({
  productId,
}: EnterpriseBackgroundProps) {
  switch (productId) {
    case "command":
      return <CommandBackground />;

    case "projects":
      return <ProjectsBackground />;

    case "service-desk":
      return <ServiceDeskBackground />;

    case "assets":
      return <AssetsBackground />;

    case "analytics":
      return <AnalyticsBackground />;

    case "identity":
      return <IdentityBackground />;

    default:
      return <DefaultEnterpriseBackground />;
  }
}