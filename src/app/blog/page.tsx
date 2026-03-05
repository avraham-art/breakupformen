// src/app/blog/page.tsx
// ==========================================
// דף רשימת המאמרים - /blog
// ==========================================

import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 3600 // רענון כל שעה

export default async function BlogPage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('id, title, slug, meta_description, featured_image_url, tags, created_at')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">The Blog</h1>
      <p className="text-gray-500 mb-10">Real talk for men navigating divorce and breakups.</p>

      <div className="grid gap-8">
        {articles?.map((article) => (
          <Link key={article.id} href={`/blog/${article.slug}`}>
            <article className="flex gap-6 items-start group cursor-pointer hover:opacity-80 transition-opacity">
              {article.featured_image_url && (
                <div className="relative w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={article.featured_image_url}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold group-hover:underline">{article.title}</h2>
                <p className="text-gray-500 mt-1 text-sm line-clamp-2">{article.meta_description}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {article.tags?.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
