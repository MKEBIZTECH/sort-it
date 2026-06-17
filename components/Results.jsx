import { BUCKETS } from './GameComponents'
import { generateSummary, GRADE_TIERS } from '../data/grading'
import { CATEGORIES, SCENARIOS } from '../data/scenarios'

const GOLD   = '#C9A84C'
const CREAM  = '#F5F2EB'
const MUTED  = '#9A968A'
const BG_CARD = '#1C1D27'
const BG_MID  = '#16171F'
const RED    = '#B85042'

export default function Results({ category, answers, deck, onPlayAgain, onChangeCategory }) {
  const score = answers.filter(a => a.correct).length
  const scenarios = SCENARIOS[category] || []
  const catData = CATEGORIES.find(c => c.id === category)
  const result = generateSummary(category, score, answers, deck)
  const tierData = GRADE_TIERS[result.tier]

  const missed = deck.filter(s => {
    const a = answers.find(x => x.id === s.id)
    return a && !a.correct
  })

  // Per-bucket breakdown
  const byBucket = {}
  Object.keys(BUCKETS).forEach(k => {
    const relevant = deck.filter(s => s.answer === k)
    const correct  = answers.filter(a => {
      const s = deck.find(x => x.id === a.id)
      return s?.answer === k && a.correct
    })
    byBucket[k] = { total: relevant.length, correct: correct.length }
  })

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 24px', animation: 'fadeIn 0.5s ease' }}>

      {/* Category label */}
      <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', fontWeight: 'bold', letterSpacing: '3px', color: GOLD, marginBottom: '20px' }}>
        {catData?.emoji}  {catData?.label?.toUpperCase()}  ·  RESULTS
      </div>

      {/* Score + Tier */}
      <div style={{ background: BG_CARD, border: `2px solid ${tierData.color}44`, borderRadius: '10px', padding: '32px 28px', marginBottom: '24px', boxShadow: `0 0 40px ${tierData.color}12` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginBottom: '16px' }}>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: '72px', fontWeight: 'bold', color: tierData.color, lineHeight: 1 }}>
            {score}
          </div>
          <div style={{ paddingBottom: '10px' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: MUTED, letterSpacing: '1px' }}>
              OUT OF 15
            </div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', color: tierData.color, marginTop: '4px' }}>
              {result.tierLabel.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Summary text */}
        <div style={{ borderLeft: `3px solid ${tierData.color}55`, paddingLeft: '16px', marginBottom: result.weakestNote ? '20px' : '0' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: CREAM, lineHeight: 1.7, margin: 0 }}>
            {result.summary}
          </p>
        </div>

        {/* Weakest bucket note */}
        {result.weakestNote && (
          <div style={{ background: BG_MID, borderRadius: '6px', padding: '14px 18px', marginTop: '16px' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', color: MUTED, marginBottom: '6px' }}>
              PATTERN TO WATCH
            </div>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: MUTED, margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
              {result.weakestNote}
            </p>
          </div>
        )}
      </div>

      {/* Bucket breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '24px' }}>
        {Object.entries(BUCKETS).map(([key, b]) => {
          const { total, correct } = byBucket[key] || { total: 0, correct: 0 }
          return (
            <div key={key} style={{ background: BG_CARD, border: `1px solid ${b.color}33`, borderRadius: '8px', padding: '14px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: '28px', fontWeight: 'bold', color: b.color, marginBottom: '4px' }}>
                {correct}/{total}
              </div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1.5px', color: b.color }}>
                {b.label}
              </div>
            </div>
          )
        })}
      </div>

      {/* Missed scenarios */}
      {missed.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', color: RED, marginBottom: '14px' }}>
            ONES TO REVISIT ({missed.length})
          </div>
          {missed.map(s => {
            const a = answers.find(x => x.id === s.id)
            const correctBucket = BUCKETS[s.answer]
            const selectedBucket = a?.selected ? BUCKETS[a.selected] : null
            return (
              <div key={s.id} style={{ background: '#1a1010', border: `1px solid ${RED}22`, borderRadius: '8px', padding: '16px 20px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                  {selectedBucket && (
                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: RED + 'cc', textDecoration: 'line-through' }}>
                      {selectedBucket.label}
                    </span>
                  )}
                  <span style={{ color: MUTED, fontSize: '11px' }}>→</span>
                  <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', fontWeight: 'bold', color: correctBucket.color }}>
                    {correctBucket.label}
                  </span>
                </div>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: MUTED, margin: '0 0 8px 0', lineHeight: 1.6 }}>
                  {s.scenario}
                </p>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#6a6760', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
                  {s.explanation}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <button onClick={onPlayAgain} style={{
          width: '100%', padding: '15px', background: GOLD, border: 'none', borderRadius: '6px',
          fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px',
          color: '#0E0E12', cursor: 'pointer',
        }}>
          PLAY THIS CATEGORY AGAIN
        </button>
        <button onClick={onChangeCategory} style={{
          width: '100%', padding: '15px', background: 'transparent', border: '1px solid #2a2b36', borderRadius: '6px',
          fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px',
          color: MUTED, cursor: 'pointer',
        }}>
          CHOOSE A DIFFERENT CATEGORY
        </button>
      </div>

      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#2e2f3a', textAlign: 'center', marginTop: '32px' }}>
        Sort It  ·  MKE BIZ TECH LLC  ·  stagedintelligence.com
      </p>
    </div>
  )
}
