import Link from 'next/link'
import { getRecentPosts } from '@/data/posts'

export default function ArticlesSection() {
  const posts = getRecentPosts(3)

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
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-accent transition leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
