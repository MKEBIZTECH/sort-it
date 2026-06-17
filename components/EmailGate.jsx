import { useState } from 'react'

const GOLD  = '#C9A84C'
const CREAM = '#F5F2EB'
const MUTED = '#9A968A'
const BG_CARD = '#1C1D27'
const BG_MID  = '#16171F'
const RED   = '#B85042'

export default function EmailGate({ onUnlock }) {
  const [email, setEmail]     = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const trimmed = email.trim().toLowerCase()
    console.log('[EmailGate] handleSubmit fired, email:', trimmed)
    if (!trimmed || !trimmed.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    setError('')
    try {
      console.log('[EmailGate] calling /api/collect-email...')
      const res = await fetch('/api/collect-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          category: 'session-start',
          score: '',
          timestamp: new Date().toISOString(),
        }),
      })
      console.log('[EmailGate] API response status:', res.status)
      const data = await res.json()
      console.log('[EmailGate] API response body:', data)
    } catch (err) {
      console.error('[EmailGate] fetch error:', err)
    }
    setLoading(false)
    onUnlock(trimmed)
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '24px',
    }}>
      <div style={{ maxWidth: '480px', width: '100%', animation: 'fadeIn 0.5s ease' }}>

        {/* Logo / wordmark */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'bold', color: CREAM, marginBottom: '4px' }}>
            Sort It <span style={{ color: GOLD }}>↯</span>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '3px', color: MUTED }}>
            STRUCTURE YOUR WORK  ·  MKE BIZ TECH LLC
          </div>
        </div>

        <div style={{ background: BG_CARD, border: '1px solid #2a2b36', borderRadius: '10px', padding: '36px 32px' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: CREAM, lineHeight: 1.7, margin: '0 0 8px 0' }}>
            Enter your email to start playing.
          </p>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: MUTED, lineHeight: 1.6, margin: '0 0 28px 0' }}>
            You'll get access to all 9 categories. No password, no account. Each time you open a new session, you'll enter your email again.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setError('') }}
              style={{
                width: '100%', background: BG_MID, border: `1px solid ${error ? RED + '88' : '#2a2b36'}`,
                borderRadius: '6px', padding: '14px 18px', color: CREAM,
                fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '12px',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = GOLD + '88'}
              onBlur={e => e.target.style.borderColor = error ? RED + '88' : '#2a2b36'}
            />
            {error && (
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: RED, margin: '0 0 12px 0' }}>{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '15px', background: loading ? '#2a2b36' : GOLD,
                border: 'none', borderRadius: '6px', fontFamily: 'Arial, sans-serif',
                fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px',
                color: loading ? MUTED : '#0E0E12', cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {loading ? 'ONE MOMENT…' : 'START PLAYING →'}
            </button>
          </form>

          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#3a3b48', textAlign: 'center', margin: '20px 0 0 0', lineHeight: 1.6 }}>
            Your email is collected to track usage and may be used to share updates from MKE BIZ TECH LLC. No spam.
          </p>
        </div>
      </div>
    </div>
  )
}
