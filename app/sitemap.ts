import { MetadataRoute } from 'next';
import { brandingDomains } from './domains';
import { portfolioAssets } from './other-assets/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use the primary production absolute base URL for precise search engine reference
  const baseUrl = 'https://www.arcscape.com';

  const flagshipRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  const dynamicRoutes = brandingDomains.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const otherAssetsRoute = {
    url: `${baseUrl}/other-assets`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  };

  const otherAssetDynamicRoutes = portfolioAssets.map((item) => ({
    url: `${baseUrl}/other-assets/${item.domain}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [flagshipRoute, otherAssetsRoute, ...dynamicRoutes, ...otherAssetDynamicRoutes];
}
