export interface Resource {
  id: string
  type: 'Book' | 'Course' | 'Journal' | 'Guide'
  title: string
  author: string
  description: string
  image: string
  link?: string
}

export const resources: Resource[] = [
  {
    id: '1',
    type: 'Book',
    title: 'The Way of the Superior Man',
    author: 'David Deida',
    description: 'A guide to spiritual awakening and living with masculine purpose.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '2',
    type: 'Course',
    title: 'Mastering Co-Parenting',
    author: 'Video Masterclass',
    description: 'Practical strategies for successful co-parenting after separation.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '3',
    type: 'Book',
    title: 'No More Mr. Nice Guy',
    author: 'Dr. Robert Glover',
    description: 'Breaking the cycle of approval-seeking and reclaiming authentic masculinity.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '4',
    type: 'Journal',
    title: 'The 90-Day Reset Journal',
    author: 'Guided Reflection',
    description: 'A structured journaling framework for rebuilding after loss.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '5',
    type: 'Book',
    title: 'Attached',
    author: 'Amir Levine & Rachel Heller',
    description: 'Understanding attachment theory and how it affects your relationships.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '6',
    type: 'Guide',
    title: 'The Legal Separation Checklist',
    author: 'BREAKUPFORMEN',
    description: '47 critical steps to protect yourself during separation.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop',
    link: '#',
  },
]
