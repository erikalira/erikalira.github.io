import type { MetadataRoute } from "next";

const siteUrl = "https://erikalira.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/pt", "/en", "/pt/cv", "/en/cv"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("/cv") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.includes("/cv") ? 0.7 : 0.9,
  }));
}
