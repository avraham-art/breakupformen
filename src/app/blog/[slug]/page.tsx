import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const { data: article } = await supabase
    .from('articles')
    .select('title, meta_description, focus_keyword, featured_image_url')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: article.title,
    description: article.meta_description,
    keywords: article.focus_keyword ? [article.focus_keyword] : [],
    openGraph: {
      title: article.title,
      description: article.meta_description,
      images: article.featured_image_url ? [article.featured_image_url] : [],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error || !article) {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
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

      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

      {article.meta_description && (
        <p className="text-lg text-gray-500 mb-6">{article.meta_description}</p>
      )}

      <div className="flex gap-2 flex-wrap mb-6">
        {article.tags?.map((tag: string) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content_html }}
      />

      <p className="text-xs text-gray-400 mt-10 border-t pt-4">
        Published:{' '}
        {new Date(article.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </main>
  )
}
