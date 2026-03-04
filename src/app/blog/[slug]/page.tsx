import { getPostBySlug, posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | BREAKUPFORMEN`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen">
      <div className="relative h-80 overflow-hidden">
        <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-primary/75"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              <span>{post.category}</span>
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-display text-3xl lg:text-5xl text-white uppercase leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-slate-200 dark:border-slate-700">
          <Link
            href="/blog"
            className="text-sm text-primary dark:text-accent font-medium flex items-center gap-1 hover:underline"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Field Reports
          </Link>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="text-sm text-slate-500">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 p-8 bg-primary text-white rounded-lg">
          <h3 className="font-display text-2xl uppercase mb-3 text-accent">
            Get the Free 30-Day Guide
          </h3>
          <p className="text-slate-300 mb-6">Tactical roadmap for the first month after separation.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-slate-400 outline-none focus:border-accent"
            />
            <button type="submit" className="bg-accent text-primary px-6 py-3 font-bold uppercase">
              Get Guide
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
