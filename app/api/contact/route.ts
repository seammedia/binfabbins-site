import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimit.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false
  }

  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const provider = process.env.CONTACT_PROVIDER || 'web3forms'
    const apiKey = process.env.CONTACT_API_KEY

    if (provider === 'web3forms' && apiKey) {
      const formData = {
        access_key: apiKey,
        name,
        email,
        phone: phone || 'Not provided',
        message,
        subject: 'New Contact Form Submission - Binfab Bins',
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      return NextResponse.json({ success: true })
    } else if (provider === 'formspree' && apiKey) {
      const response = await fetch(`https://formspree.io/f/${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Not provided',
          message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      return NextResponse.json({ success: true })
    } else {
      // Log to console if no provider is configured (development mode)
      console.log('Contact form submission:', { name, email, phone, message })
      return NextResponse.json({
        success: true,
        message: 'Form received (development mode)',
      })
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
