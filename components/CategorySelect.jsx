import { CATEGORIES } from '../data/scenarios'

const GOLD    = '#C9A84C'
const CREAM   = '#F5F2EB'
const MUTED   = '#9A968A'
const BG_CARD = '#1C1D27'
const BG_MID  = '#16171F'
const TEAL    = '#2D9C8C'

export default function CategorySelect({ onSelect, played }) {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 24px', animation: 'fadeIn 0.5s ease' }}>

      <div style={{ marginBottom: '36px' }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', fontWeight: 'bold', letterSpacing: '3px', color: GOLD, marginBottom: '10px' }}>
          SORT IT  ·  STRUCTURE YOUR WORK
        </div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 'bold', color: CREAM, margin: '0 0 8px 0' }}>
          Choose a Category
        </h1>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: MUTED, margin: 0, lineHeight: 1.6 }}>
          15 scenarios per category. Each session is new — you'll see scenarios in a different order every time.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {CATEGORIES.map(cat => {
          const hasPlayed = played?.includes(cat.id)
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              style={{
                background: BG_CARD,
                border: `1px solid ${hasPlayed ? TEAL + '55' : '#2a2b36'}`,
                borderRadius: '8px', padding: '20px 18px',
                textAlign: 'left', cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = GOLD + '66'
                e.currentTarget.style.background = '#20212e'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = hasPlayed ? TEAL + '55' : '#2a2b36'
                e.currentTarget.style.background = BG_CARD
              }}
            >
              {hasPlayed && (
                <div style={{
                  position: 'absolute', top: '10px', right: '12px',
                  fontFamily: 'Arial, sans-serif', fontSize: '10px',
                  fontWeight: 'bold', letterSpacing: '1px', color: TEAL,
                }}>✓ PLAYED</div>
              )}
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{cat.emoji}</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 'bold', color: CREAM, marginBottom: '6px' }}>
                {cat.label}
              </div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: MUTED, lineHeight: 1.5 }}>
                {cat.description}
              </div>
            </button>
          )
        })}
      </div>

      <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #1e1f2a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#2e2f3a' }}>
          Sort It  ·  MKE BIZ TECH LLC
        </span>
        <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#2e2f3a' }}>
          stagedintelligence.com
        </span>
      </div>
    </div>
  )
}
