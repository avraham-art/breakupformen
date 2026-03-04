export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  publishedAt: string
  image: string
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'myth-of-moving-on',
    title: 'The Myth of "Moving On" vs. Moving Forward',
    excerpt: 'Why the traditional advice for men to just "get over it" is failing, and what actual progress looks like.',
    content: `
      <p>The phrase "just move on" is perhaps the most damaging advice given to men after a breakup. It implies that grief is a problem to be solved quickly, rather than a process to be experienced fully.</p>
      <h2>The Difference</h2>
      <p>Moving on suggests leaving something behind — erasing it from your story. Moving forward means integrating the experience into who you are and using it as fuel for growth.</p>
      <p>Research shows that men who allow themselves to process grief fully experience better long-term mental health outcomes and form healthier relationships afterward.</p>
      <h2>What Progress Actually Looks Like</h2>
      <p>Progress isn't linear. It's not about feeling better every single day. It's about building a new foundation while honoring the loss of the old one.</p>
      <p>True progress includes: rebuilding your identity outside of the relationship, rediscovering your purpose, and developing emotional resilience that wasn't there before.</p>
    `,
    category: 'Psychology',
    readTime: '8 Min Read',
    publishedAt: '2025-02-15',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'protecting-assets-separation',
    title: 'Protecting Your Assets During Separation',
    excerpt: 'Practical financial steps every man should take the moment a relationship ends to ensure long-term stability.',
    content: `
      <p>The financial implications of separation can be devastating if you're unprepared. Taking the right steps early can mean the difference between stability and years of financial struggle.</p>
      <h2>The First 72 Hours</h2>
      <p>Document everything. Take photographs, gather financial statements, and create a complete inventory of shared assets. This is not about being adversarial — it's about being prepared.</p>
      <h2>Key Financial Steps</h2>
      <p>Open individual bank accounts immediately. Review all joint accounts and credit lines. Consult a financial advisor who specializes in divorce or separation cases.</p>
      <p>Understand your rights regarding the family home, pension funds, and business interests if applicable.</p>
    `,
    category: 'Legal & Finance',
    readTime: '12 Min Read',
    publishedAt: '2025-02-08',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'being-the-father-they-need',
    title: 'Being the Father They Need Right Now',
    excerpt: "How to remain a pillar of strength for your children when your own world feels like it's crumbling.",
    content: `
      <p>Your children are watching you. Not to see if you're perfect, but to learn how a man handles adversity. This is one of the most important lessons you'll ever teach them.</p>
      <h2>Separating Your Pain from Their Experience</h2>
      <p>Your children need stability. They don't need to know the details of adult relationships. Your job is to create a safe, consistent environment regardless of what's happening in your personal life.</p>
      <h2>Practical Strategies</h2>
      <p>Maintain routines. Children thrive on predictability. Small consistencies signal safety.</p>
      <p>Never speak negatively about their other parent in front of them. This is non-negotiable. Your children are 50% of each of you.</p>
    `,
    category: 'Family',
    readTime: '10 Min Read',
    publishedAt: '2025-01-28',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    slug: 'sleep-recovery-after-breakup',
    title: 'Why Sleep Is Your Most Important Recovery Tool',
    excerpt: 'The science of sleep disruption during emotional trauma and exactly what to do about it.',
    content: `
      <p>Breakups destroy sleep. The anxiety, the racing thoughts, the physical pain of grief — all conspire to keep you awake exactly when you need rest most.</p>
      <h2>The Biology of Heartbreak and Sleep</h2>
      <p>Cortisol and adrenaline spike during emotional trauma. Your brain doesn't distinguish between physical and emotional threats.</p>
      <h2>The Recovery Protocol</h2>
      <p>Strict sleep schedule. Same bedtime, same wake time, every day. This recalibrates your circadian rhythm which stress has disrupted.</p>
      <p>A 2-3 minute cold shower in the morning resets your nervous system and improves mood regulation throughout the day.</p>
    `,
    category: 'Health',
    readTime: '7 Min Read',
    publishedAt: '2025-01-20',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    slug: 'rebuilding-male-identity',
    title: 'Rebuilding Your Identity After a Long Relationship',
    excerpt: 'When "we" becomes "I" again — a tactical guide to rediscovering who you are.',
    content: `
      <p>After years in a relationship, many men realize they've defined themselves primarily through that partnership. The breakup doesn't just end a relationship — it creates an identity crisis.</p>
      <h2>The Identity Audit</h2>
      <p>Write down who you were before the relationship. What did you value? What were your ambitions? What did you do for joy that had nothing to do with your partner?</p>
      <h2>Building New Pillars</h2>
      <p>Physical identity: Start or return to a physical practice. The gym, running, martial arts. Your body is your first home.</p>
      <p>Professional identity: Revisit your career ambitions. Are you doing what you truly want to do?</p>
    `,
    category: 'Psychology',
    readTime: '11 Min Read',
    publishedAt: '2025-01-12',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    slug: 'co-parenting-communication',
    title: 'The Communication Framework for Co-Parenting Success',
    excerpt: 'A practical system for keeping communication business-like, effective, and child-centered.',
    content: `
      <p>Co-parenting with someone you've separated from is one of the most challenging interpersonal skills there is. But it's learnable.</p>
      <h2>The Business Partner Framework</h2>
      <p>Treat your co-parenting communication like a professional business relationship. Keep it focused on the children. Keep it brief and factual.</p>
      <h2>Communication Tools</h2>
      <p>Use dedicated co-parenting apps like OurFamilyWizard or TalkingParents. These create a documented record and reduce impulsive, emotional messages.</p>
      <p>Establish communication windows. You don't need to be available 24/7.</p>
    `,
    category: 'Family',
    readTime: '9 Min Read',
    publishedAt: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&auto=format&fit=crop',
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRecentPosts(count = 3): Post[] {
  return posts.slice(0, count)
}
