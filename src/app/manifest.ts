import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vishal Raghav — Systems Architecture & Engineering',
    short_name: 'Vishal Raghav',
    description: 'Portfolio of Vishal Raghav: Software Development Engineer, Systems Architect, and AI Engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/img.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/img.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
