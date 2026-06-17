// Built-in grading and summary system
// No AI calls — all logic-based

export const GRADE_TIERS = {
  fluent: {
    min: 13, max: 15,
    label: 'Framework Fluent',
    color: '#2D9C8C',
  },
  developing: {
    min: 10, max: 12,
    label: 'Developing',
    color: '#C9A84C',
  },
  sorting: {
    min: 7, max: 9,
    label: 'Still Sorting',
    color: '#E8A84C',
  },
  start: {
    min: 0, max: 6,
    label: 'Start Here',
    color: '#B85042',
  },
}

export function getTier(score) {
  if (score >= 13) return 'fluent'
  if (score >= 10) return 'developing'
  if (score >= 7)  return 'sorting'
  return 'start'
}

// Per-category, per-tier summaries
const SUMMARIES = {
  everyday: {
    fluent:     "You're reading everyday processes clearly. You understand that familiar, personal tasks follow the same rules as business workflows — the framework applies everywhere.",
    developing: "You're getting the big picture. The trickier moments are likely the processes that feel personal or variable — like routines that change based on mood or schedule. Those are the ones worth a second look.",
    sorting:    "Everyday processes are deceptively tricky because we rarely think of our habits as 'processes.' The ones that tripped you up probably lack a defined, consistent pattern. That's the signal to look for.",
    start:      "Start with SI Flow Finder. Pick one daily routine and run it through the five questions. Everyday life is great practice ground because you already know the process — you just need the framework to evaluate it.",
  },
  industrial: {
    fluent:     "You're navigating industrial complexity well. You can separate the operational sophistication from the underlying logic — complex environments don't automatically mean AI is needed.",
    developing: "You're on track. Industrial scenarios often feel like they need AI because the systems are large and the stakes are high — but many of those processes are highly rule-based. Look for where human interpretation is actually required.",
    sorting:    "The hard ones here likely involve processes that feel technical and important — which can make automation seem insufficient. But technical complexity alone doesn't make something agentic. Ask whether judgment is actually required.",
    start:      "Industrial processes are highly systematic by nature — which actually makes many of them great automation candidates. Use SI Flow Finder with a specific operational process you know well and work through the questions.",
  },
  administrative: {
    fluent:     "Administrative workflows are your wheelhouse. You understand that most office processes are rule-based at their core — and you can spot where genuine judgment is required.",
    developing: "You're reading the routine cases well. The edge cases are probably where approval chains, exceptions, or subjective criteria come in. Those are worth another look.",
    sorting:    "Administrative processes often feel complex because of the volume and stakes — but most are highly automatable. The ones that tripped you up likely have hidden human judgment baked in that isn't obvious at first glance.",
    start:      "Pick an administrative process you handle yourself — expense reports, scheduling, document routing — and walk it through SI Flow Finder. Admin workflows are some of the best candidates for automation.",
  },
  developer: {
    fluent:     "You're thinking clearly about the distinction between complex automation and true agentic reasoning. That's harder than it looks in a technical context — well done.",
    developing: "You're getting the technical cases mostly right. The gaps are probably around where semantic understanding (reading meaning, not just matching patterns) crosses from automation into agent territory.",
    sorting:    "Developer scenarios are tricky because technical sophistication can look like intelligence. A complex CI/CD pipeline is still automation. An AI that interprets code intent is an agent. The question is always: is judgment involved?",
    start:      "Start with a workflow you already have in your stack — deployment, alerting, backups — and classify it with SI Flow Finder. Working from something concrete will make the framework click faster.",
  },
  sales: {
    fluent:     "You understand where sales processes are truly rule-based and where they require the kind of contextual judgment that only an agent can support. That's a valuable read in a relationship-driven field.",
    developing: "You're getting the fundamentals. The nuance is usually around personalization — does the 'personalization' require reasoning, or is it just variable substitution in a template? That's the key question.",
    sorting:    "Sales is full of processes that feel human and contextual — but many are more systematic than they appear. The ones that tripped you up likely involve a mix of rule-based routing and genuine relationship judgment.",
    start:      "Pick your most repeatable sales motion — lead routing, follow-up sequences, deal stage updates — and run it through SI Flow Finder. Start with the mechanical parts before thinking about where AI fits.",
  },
  marketing: {
    fluent:     "You're distinguishing clearly between scheduled execution and genuine content reasoning. Marketing has both in abundance — and you're reading them correctly.",
    developing: "You're getting the core cases right. The harder ones are likely around personalization and content generation — where the output looks creative but the logic might actually be rule-based.",
    sorting:    "Marketing automation is one of the most mature categories — drip sequences, campaign triggers, reporting pulls. The agent cases are where interpretation of audience behavior or content creation requires real reasoning.",
    start:      "Start with your most reliable repeating process — your newsletter send, your social calendar, your weekly report — and classify it with SI Flow Finder. Marketing has some of the clearest automation wins.",
  },
  healthcare: {
    fluent:     "You're navigating healthcare admin scenarios carefully and correctly. You understand that compliance and sensitivity don't automatically mean AI — many clinical admin processes are highly automatable.",
    developing: "You're reading the routine cases well. The harder ones likely involve processes where the output requires interpretation — reading patient feedback, drafting correspondence, analyzing patterns.",
    sorting:    "Healthcare admin is highly rule-bound in many areas — billing, scheduling, reminders — which makes it great automation territory. Where you're likely getting tripped up is around processes that require reading and interpreting unstructured information.",
    start:      "Start with a scheduling or billing workflow and run it through SI Flow Finder. Healthcare admin has some of the clearest use cases — high volume, consistent rules, well-defined outputs.",
  },
  web3: {
    fluent:     "You're cutting through the technical complexity of web3 workflows and reading the underlying logic clearly. On-chain doesn't automatically mean AI.",
    developing: "You're getting the standard cases. The edge cases likely involve scenarios where data complexity or multi-source synthesis makes something feel more agentic than it is.",
    sorting:    "Web3 workflows can feel inherently complex — but event-driven on-chain logic is often highly automatable. The agent cases are where interpretation, synthesis, or judgment about unstructured information is genuinely required.",
    start:      "Start with a trigger-based workflow — a wallet event, a form submission, a governance outcome — and classify it with SI Flow Finder. Web3 has strong automation fundamentals.",
  },
  arts: {
    fluent:     "You're seeing your practice clearly as a system — and you're reading which parts are routine and which require creative or relational judgment. That's a powerful lens for building sustainable creative infrastructure.",
    developing: "You're getting the business-side cases right. The harder ones are likely where client relationships and creative context make something feel too personal to systematize — but there's often more structure than it seems.",
    sorting:    "Artist workflows have two distinct layers: the business side (invoicing, scheduling, licensing) which is highly automatable, and the creative and relational side which requires genuine judgment. Separate those two layers first.",
    start:      "Start with the most administrative part of your practice — invoicing, file delivery, inquiry responses — and run it through SI Flow Finder. The business side of creative work is full of automation opportunities.",
  },
}

// Bucket-specific miss patterns
const BUCKET_MISS_NOTES = {
  automation: "You may be over-calling automation as AI. Ask: does this require judgment, or is the logic fully definable in advance?",
  agent:      "You may be over-calling AI where automation would work. Ask: is there genuine interpretation happening, or are the rules just complex?",
  not_ready:  "You may be underweighting the 'Not Ready' bucket. Some processes aren't ready for either — and that's a real classification, not a fallback.",
}

export function generateSummary(category, score, answers, scenarios) {
  const tier = getTier(score)
  const tierData = GRADE_TIERS[tier]
  const summary = SUMMARIES[category]?.[tier] || ''

  // Identify which buckets they got wrong most
  const missByBucket = { automation: 0, agent: 0, not_ready: 0 }
  answers.forEach(a => {
    if (!a.correct) {
      const s = scenarios.find(x => x.id === a.id)
      if (s) missByBucket[s.answer]++
    }
  })

  const maxMisses = Math.max(...Object.values(missByBucket))
  const weakestBucket = maxMisses > 0
    ? Object.entries(missByBucket).find(([, v]) => v === maxMisses)?.[0]
    : null

  return {
    tier,
    tierLabel: tierData.label,
    tierColor: tierData.color,
    score,
    total: 15,
    summary,
    weakestBucket,
    weakestNote: weakestBucket ? BUCKET_MISS_NOTES[weakestBucket] : null,
    missByBucket,
  }
}
