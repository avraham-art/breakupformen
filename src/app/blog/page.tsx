import { posts } from '@/data/posts'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Field Reports | BREAKUPFORMEN',
  description: 'Articles on resilience, co-parenting, finance, and moving forward after separation.',
}

export default function BlogPage() {
  const categories = Array.from(new Set(posts.map((p) => p.category)))

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display uppercase tracking-widest text-sm mb-4 block">
            Intelligence Briefings
          </span>
          <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-tight mb-4">
            Field Reports
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Tactical intelligence for men navigating separation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="px-4 py-2 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-sm font-semibold uppercase tracking-wider rounded hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent transition cursor-pointer"
            >
              {cat}
            </span>
          ))}
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
                  <span className="bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-accent transition leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 text-xs text-slate-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
