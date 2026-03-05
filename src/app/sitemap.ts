// src/app/sitemap.ts
// ==========================================
// Sitemap אוטומטי - גוגל מוצא את כל המאמרים
// ==========================================

import { supabase } from '@/lib/supabase'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://breakupformen.com'

  // דפים קבועים
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.6 },
  ]

  // מאמרים מ-Supabase
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, created_at')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  const articlePages: MetadataRoute.Sitemap = (articles || []).map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.created_at),
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages]
}
