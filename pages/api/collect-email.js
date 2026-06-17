export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, category, score, timestamp } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const FORM_URL        = process.env.GOOGLE_FORM_URL
  const ENTRY_EMAIL     = process.env.ENTRY_EMAIL
  const ENTRY_CATEGORY  = process.env.ENTRY_CATEGORY
  const ENTRY_SCORE     = process.env.ENTRY_SCORE
  const ENTRY_TIMESTAMP = process.env.ENTRY_TIMESTAMP

  console.log('[collect-email] env vars:', { FORM_URL, ENTRY_EMAIL, ENTRY_CATEGORY, ENTRY_SCORE, ENTRY_TIMESTAMP })

  const body = new URLSearchParams({
    [ENTRY_EMAIL]:     email,
    [ENTRY_CATEGORY]:  category  || 'session-start',
    [ENTRY_SCORE]:     score     || '',
    [ENTRY_TIMESTAMP]: timestamp || new Date().toISOString(),
  })

  console.log('[collect-email] payload:', body.toString())

  try {
    const response = await fetch(FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      redirect: 'manual',
    })
    console.log('[collect-email] Google response status:', response.status)
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[collect-email] fetch error:', err)
    return res.status(500).json({ error: 'Failed to submit' })
  }
}
