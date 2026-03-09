// src/app/api/articles/route.ts
// ==========================================
// זה ה"כניסה" שn8n שולח אליה את המאמר
// ==========================================

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const sentApiKey = request.headers.get('x-api-key')
  const expectedApiKey = process.env.N8N_SECRET_KEY

  console.log('HEADER x-api-key:', JSON.stringify(sentApiKey))
  console.log('ENV N8N_SECRET_KEY:', JSON.stringify(expectedApiKey))

  if (sentApiKey !== expectedApiKey) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
        debug: {
          sentApiKey,
          hasExpectedApiKey: !!expectedApiKey,
        },
      },
      { status: 401 }
    )
  }

  const body = await request.json()

  return NextResponse.json({ ok: true, body })
}
