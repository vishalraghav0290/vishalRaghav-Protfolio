import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Applebot-Extended',
          'Google-Extended',
          'CCBot',
          'cohere-ai',
          'Diffbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://vishalraghav.dev/sitemap.xml',
    host: 'https://vishalraghav.dev',
  };
}
