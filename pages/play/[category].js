import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SCENARIOS, CATEGORIES } from '../../data/scenarios'
import { ScenarioCard, AnswerButtons, ProgressBar, BUCKETS } from '../../components/GameComponents'
import Results from '../../components/Results'

const GOLD   = '#C9A84C'
const BG_MID = '#16171F'
const CREAM  = '#F5F2EB'
const MUTED  = '#9A968A'

export default function PlayPage() {
  const router   = useRouter()
  const { category, email } = router.query

  const [deck,     setDeck]     = useState([])
  const [current,  setCurrent]  = useState(0)
  const [answers,  setAnswers]  = useState([])
  const [selected, setSelected] = useState(null)
  const [phase,    setPhase]    = useState('game') // game | results
  const [logged,   setLogged]   = useState(false)

  const catData = CATEGORIES.find(c => c.id === category)

  // Build shuffled deck when category is ready
  useEffect(() => {
    if (!category || !SCENARIOS[category]) return
    const shuffled = [...SCENARIOS[category]].sort(() => Math.random() - 0.5)
    setDeck(shuffled)
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setPhase('game')
    setLogged(false)
  }, [category])

  // Log completed session to Google Sheet via API
  async function logSession(finalAnswers) {
    if (logged || !email) return
    setLogged(true)
    const score = finalAnswers.filter(a => a.correct).length
    try {
      await fetch('/api/collect-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: decodeURIComponent(email),
          category: catData?.label || category,
          score: `${score}/15`,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch {
      // Silent fail — don't interrupt the experience
    }
  }

  function handleAnswer(bucket) {
    if (selected) return
    const s = deck[current]
    const correct = bucket === s.answer
    setSelected(bucket)
    setAnswers(prev => [...prev, { id: s.id, selected: bucket, correct }])
  }

  function handleNext() {
    if (current + 1 >= deck.length) {
      // Session complete — log it
      logSession([...answers])
      setPhase('results')
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
    }
  }

  function handlePlayAgain() {
    const shuffled = [...SCENARIOS[category]].sort(() => Math.random() - 0.5)
    setDeck(shuffled)
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setPhase('game')
    setLogged(false)
  }

  function handleChangeCategory() {
    router.push(`/?email=${encodeURIComponent(email || '')}`)
  }

  const score   = answers.filter(a => a.correct).length
  const scenario = deck[current]

  if (!category || !SCENARIOS[category]) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: MUTED, fontFamily: 'Arial, sans-serif' }}>Loading…</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Sort It — {catData?.label || category}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <div style={{ borderBottom: `2px solid ${GOLD}`, background: BG_MID, padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 'bold', color: CREAM }}>
          Sort It <span style={{ color: GOLD }}>↯</span>
        </div>
        <button
          onClick={handleChangeCategory}
          style={{ background: 'transparent', border: 'none', color: MUTED, fontFamily: 'Arial, sans-serif', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
        >
          ← categories
        </button>
      </div>

      {phase === 'results' ? (
        <Results
          category={category}
          answers={answers}
          deck={deck}
          onPlayAgain={handlePlayAgain}
          onChangeCategory={handleChangeCategory}
        />
      ) : (
        scenario && (
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '28px 20px' }}>
            <ProgressBar
              current={current}
              total={deck.length}
              score={score}
              categoryLabel={`${catData?.emoji} ${catData?.label}`}
            />

            <ScenarioCard
              scenario={scenario}
              onAnswer={handleAnswer}
              answered={!!selected}
              selected={selected}
            />

            <AnswerButtons
              onAnswer={handleAnswer}
              answered={!!selected}
              selected={selected}
              scenario={scenario}
            />

            {selected && (
              <button
                onClick={handleNext}
                style={{
                  width: '100%', padding: '16px', background: GOLD, border: 'none',
                  borderRadius: '6px', fontFamily: 'Arial, sans-serif', fontSize: '14px',
                  fontWeight: 'bold', letterSpacing: '2px', color: '#0E0E12',
                  cursor: 'pointer', marginTop: '14px', animation: 'fadeIn 0.3s ease',
                }}
              >
                {current + 1 >= deck.length ? 'SEE RESULTS →' : 'NEXT →'}
              </button>
            )}
          </div>
        )
      )}
    </>
  )
}
