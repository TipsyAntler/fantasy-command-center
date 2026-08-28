import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fantasy Football Command Center",
    short_name: "FFCC",
    description: "Personal fantasy football analytics and decision-support dashboard.",
    start_url: "/",
    display: "standalone",
    background_color: "#071018",
    theme_color: "#071018",
    icons: [
      {
        src: "/fcc-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
