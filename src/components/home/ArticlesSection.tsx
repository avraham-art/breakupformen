import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function ArticlesSection() {
  const { data: articles } = await supabase
    .from('articles')
    .select('id, title, slug, meta_description, featured_image_url, tags, created_at')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(3)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl text-primary dark:text-accent uppercase tracking-wide">
              Essential Reading
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Insights for men aged 25-50 dealing with life transitions.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-widest text-primary dark:text-accent border-b-2 border-primary/20 dark:border-accent/20 pb-1 hover:border-primary dark:hover:border-accent transition"
          >
            View All Articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles?.map((article) => (
            <article key={article.id} className="group">
              <Link href={`/blog/${article.slug}`}>
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img
                    src={article.featured_image_url}
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  <span>{article.tags?.[0]}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-accent transition leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{article.meta_description}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
