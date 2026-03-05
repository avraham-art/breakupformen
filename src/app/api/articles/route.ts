// src/app/api/articles/route.ts
// ==========================================
// זה ה"כניסה" שn8n שולח אליה את המאמר
// ==========================================

import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  // בדיקת מפתח אבטחה - רק n8n יכול לשלוח
  const authHeader = req.headers.get('x-api-key')
  if (authHeader !== process.env.N8N_SECRET_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()

  const {
    title,
    slug,
    content_html,
    meta_description,
    focus_keyword,
    featured_image_url,
    tags,
    status = 'draft',
  } = body

  // שמירה ל-Supabase
  const { data, error } = await supabase
    .from('articles')
    .insert([{
      title,
      slug,
      content_html,
      meta_description,
      focus_keyword,
      featured_image_url,
      tags,
      status,
    }])
    .select()
    .single()

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, article: data }, { status: 201 })
}
