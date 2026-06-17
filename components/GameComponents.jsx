import { useState, useEffect } from 'react'

const GOLD   = '#C9A84C'
const CREAM  = '#F5F2EB'
const MUTED  = '#9A968A'
const BG_CARD = '#1C1D27'
const BG_MID  = '#16171F'
const TEAL   = '#2D9C8C'
const PURPLE = '#7B52AB'
const RED    = '#B85042'
const GREEN  = '#3D9A6A'

export const BUCKETS = {
  automation: { label: 'AUTOMATION',  color: TEAL,   icon: '⚙' },
  agent:      { label: 'AGENTIC AI',  color: PURPLE, icon: '◈' },
  not_ready:  { label: 'NOT READY',   color: RED,    icon: '✗' },
}

export function ProgressBar({ current, total, score, categoryLabel }) {
  const pct = (current / total) * 100
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: '12px', color: MUTED }}>
          {categoryLabel}  ·  {current} / {total}
        </span>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: '12px', color: GOLD }}>
          {score} correct
        </span>
      </div>
      <div style={{ height: '3px', background: '#1e1f2a', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: GOLD, transition: 'width 0.4s ease', borderRadius: '2px' }} />
      </div>
    </div>
  )
}

export function ScenarioCard({ scenario, onAnswer, answered, selected }) {
  const [flipped, setFlipped] = useState(false)
  const correct = answered && selected === scenario.answer
  const bucket = BUCKETS[scenario.answer]
  const diffColor = scenario.difficulty === 'easy' ? GREEN : scenario.difficulty === 'medium' ? GOLD : RED

  useEffect(() => {
    if (answered) {
      const t = setTimeout(() => setFlipped(true), 150)
      return () => clearTimeout(t)
    } else {
      setFlipped(false)
    }
  }, [answered, scenario.id])

  return (
    <div style={{ perspective: '1200px', width: '100%', marginBottom: '20px' }}>
      <div style={{
        position: 'relative', width: '100%', minHeight: '200px',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        transition: 'transform 0.5s cubic-bezier(0.4,0.2,0.2,1)',
      }}>

        {/* FRONT */}
        <div style={{
          position: 'absolute', width: '100%',
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          background: BG_CARD,
          border: `1px solid ${answered ? (correct ? GREEN : RED) + '66' : '#2a2b36'}`,
          borderRadius: '10px', padding: '24px 24px 20px',
          boxShadow: answered ? `0 0 28px ${correct ? GREEN : RED}18` : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', color: '#3a3b48' }}>
              #{String(scenario.id).toUpperCase()}
            </span>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', fontWeight: 'bold', color: diffColor, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {scenario.difficulty}
            </span>
          </div>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: CREAM, lineHeight: 1.75, margin: 0 }}>
            {scenario.scenario}
          </p>
        </div>

        {/* BACK */}
        <div style={{
          position: 'absolute', width: '100%',
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: correct ? '#0d1f17' : '#1a0f0e',
          border: `2px solid ${correct ? GREEN : RED}55`,
          borderRadius: '10px', padding: '24px',
          boxShadow: `0 0 36px ${correct ? GREEN : RED}15`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: correct ? GREEN : RED, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
              {correct ? '✓' : '✗'}
            </div>
            <div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', color: correct ? GREEN : RED, marginBottom: '4px' }}>
                {correct ? 'CORRECT' : 'NOT QUITE'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {!correct && selected && (
                  <>
                    <span style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', color: MUTED, textDecoration: 'line-through' }}>
                      {BUCKETS[selected]?.label}
                    </span>
                    <span style={{ color: MUTED, fontSize: '11px' }}>→</span>
                  </>
                )}
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: bucket.color }} />
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', fontWeight: 'bold', color: bucket.color }}>
                  {bucket.label}
                </span>
              </div>
            </div>
          </div>
          <div style={{ borderLeft: `3px solid ${correct ? GREEN : RED}44`, paddingLeft: '14px' }}>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: CREAM, lineHeight: 1.7, margin: 0 }}>
              {scenario.explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AnswerButtons({ onAnswer, answered, selected, scenario }) {
  if (!answered) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', animation: 'popIn 0.3s ease' }}>
        {Object.entries(BUCKETS).map(([key, b]) => (
          <button key={key} onClick={() => onAnswer(key)} style={{
            padding: '14px 8px', borderRadius: '6px',
            background: BG_CARD, border: `1px solid ${b.color}55`,
            color: b.color, fontFamily: 'Arial, sans-serif', fontSize: '11px',
            fontWeight: 'bold', letterSpacing: '1px', cursor: 'pointer',
            transition: 'all 0.15s ease', lineHeight: 1.3, textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>{b.icon}</div>
            {b.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '14px' }}>
        {Object.entries(BUCKETS).map(([key, b]) => {
          const isSel = key === selected
          const isCorrect = key === scenario.answer
          return (
            <div key={key} style={{
              padding: '14px 8px', borderRadius: '6px', textAlign: 'center',
              background: isCorrect ? GREEN + '22' : isSel ? RED + '22' : 'transparent',
              border: `1px solid ${isCorrect ? GREEN : isSel ? RED : '#2a2b36'}`,
              color: b.color, fontFamily: 'Arial, sans-serif', fontSize: '11px',
              fontWeight: 'bold', letterSpacing: '1px', lineHeight: 1.3,
            }}>
              <div style={{ fontSize: '20px', marginBottom: '6px' }}>
                {isCorrect ? '✓' : isSel ? '✗' : b.icon}
              </div>
              {b.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
