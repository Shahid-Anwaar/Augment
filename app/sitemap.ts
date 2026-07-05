import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

const SITE_URL = siteConfig.url;

const routes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/contact-sales",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/pricing",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/community",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  // {
  //   path: "/explore-integration",
  //   priority: 0.7,
  //   changeFrequency: "monthly",
  // },
  {
    path: "/for-coaches",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/for-firms",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/products",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms-of-service",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}