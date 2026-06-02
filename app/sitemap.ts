import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nanditamahesh.xyz",
      lastModified: new Date(),
    },
    {
      url: "https://nanditamahesh.xyz/about",
      lastModified: new Date(),
    },
    {
      url: "https://nanditamahesh.xyz/projects",
      lastModified: new Date(),
    },
    {
      url: "https://nanditamahesh.xyz/writing",
      lastModified: new Date(),
    },
    {
      url: "https://nanditamahesh.xyz/contact",
      lastModified: new Date(),
    },
  ];
}