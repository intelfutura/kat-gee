import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/work", "/about", "/services", "/start"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));

  const work = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified: now,
  }));

  return [...routes, ...work];
}
