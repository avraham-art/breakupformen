import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const sentApiKey = request.headers.get('x-api-key')
    const expectedApiKey = process.env.N8N_SECRET_KEY

    if (!expectedApiKey || sentApiKey !== expectedApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()

    const tags =
      Array.isArray(body.tags)
        ? body.tags
        : typeof body.tags === 'string'
          ? JSON.parse(body.tags)
          : []

    const article = {
      title: body.title,
      slug: body.slug,
      content_html: body.content_html,
      meta_description: body.meta_description,
      focus_keyword: body.focus_keyword,
      featured_image_url: body.featured_image_url,
      tags,
      status: body.status || 'draft',
    }

    const { data, error } = await supabase
      .from('articles')
      .insert([article])
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create article', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, article: data },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Invalid request',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 400 }
    )
  }
}
