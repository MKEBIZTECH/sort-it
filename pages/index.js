import { useState } from 'react'
import Head from 'next/head'
import EmailGate from '../components/EmailGate'
import CategorySelect from '../components/CategorySelect'
import { useRouter } from 'next/router'

export default function Home() {
  const [email, setEmail]   = useState(null)
  const [played, setPlayed] = useState([])
  const router = useRouter()

  function handleUnlock(email) {
    setEmail(email)
  }

  function handleSelect(categoryId) {
    setPlayed(prev => prev.includes(categoryId) ? prev : [...prev, categoryId])
    router.push(`/play/${categoryId}?email=${encodeURIComponent(email)}`)
  }

  return (
    <>
      <Head>
        <title>Sort It — Structure Your Work</title>
        <meta name="description" content="Agent or Automation? A classification game from MKE BIZ TECH LLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!email
        ? <EmailGate onUnlock={handleUnlock} />
        : <CategorySelect onSelect={handleSelect} played={played} />
      }
    </>
  )
}
