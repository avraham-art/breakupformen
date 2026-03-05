// src/lib/supabase.ts
// ==========================================
// חיבור ל-Supabase - שים את המפתחות שלך ב-.env.local
// ==========================================

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Article = {
  id: string
  title: string
  slug: string
  content_html: string
  meta_description: string
  focus_keyword: string
  featured_image_url: string
  tags: string[]
  status: string
  created_at: string
}
