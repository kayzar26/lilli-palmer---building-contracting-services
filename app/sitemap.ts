import { MetadataRoute } from 'next';
import { SERVICES, BLOGS } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lilli-palmer-building-contracting-s-nine.vercel.app/';

  // Static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Blog routes
  const blogRoutes = BLOGS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(blog.date), // Using blog date as last modified
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...blogRoutes];
}
