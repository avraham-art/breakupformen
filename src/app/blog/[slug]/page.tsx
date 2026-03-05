// src/app/blog/[slug]/page.tsx
// ==========================================
// דף מאמר בודד עם SEO מלא - /blog/the-slug
// ==========================================

import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'

export const revalidate = 3600

type Props = {
  params: { slug: string }
}

// SEO אוטומטי לכל מאמר
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: article } = await supabase
    .from('articles')
    .select('title, meta_description, focus_keyword, featured_image_url')
    .eq('slug', params.slug)
    .single()

  if (!article) return { title: 'Article Not Found' }

  return {
    title: article.title,
    description: article.meta_description,
    keywords: article.focus_keyword,
    openGraph: {
      title: article.title,
      description: article.meta_description,
      images: article.featured_image_url ? [article.featured_image_url] : [],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single()

  if (!article) notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* תמונה ראשית */}
      {article.featured_image_url && (
        <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8">
          <Image
            src={article.featured_image_url}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* תגיות */}
      <div className="flex gap-2 flex-wrap mb-4">
        {article.tags?.map((tag: string) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* תוכן המאמר */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content_html }}
      />

      {/* תאריך */}
      <p className="text-xs text-gray-400 mt-10 border-t pt-4">
        Published: {new Date(article.created_at).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        })}
      </p>
    </main>
  )
}
