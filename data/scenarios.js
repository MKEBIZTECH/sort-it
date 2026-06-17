// SORT IT — 135 Scenarios across 9 categories
// Each scenario: id, difficulty (easy/medium/hard), scenario text, answer, explanation

export const CATEGORIES = [
  { id: 'everyday',      label: 'Everyday Life',  emoji: '🏠', description: 'Personal routines, household tasks, daily decisions' },
  { id: 'industrial',    label: 'Industrial',      emoji: '🏭', description: 'Manufacturing, logistics, operations, supply chain' },
  { id: 'administrative',label: 'Administrative',  emoji: '🗂️', description: 'Office ops, HR, compliance, records management' },
  { id: 'developer',     label: 'Developer',       emoji: '💻', description: 'Code workflows, DevOps, APIs, system architecture' },
  { id: 'sales',         label: 'Sales',           emoji: '📈', description: 'Pipelines, outreach, follow-up, deal management' },
  { id: 'marketing',     label: 'Marketing',       emoji: '📣', description: 'Campaigns, content, analytics, audience targeting' },
  { id: 'healthcare',    label: 'Healthcare',      emoji: '🏥', description: 'Admin, scheduling, records, office workflows' },
  { id: 'web3',          label: 'Web3',            emoji: '⛓️', description: 'DAOs, smart contracts, token workflows, on-chain ops' },
  { id: 'arts',          label: 'Arts',            emoji: '🎨', description: 'Creative workflows, business side, client management' },
  { id: 'cybersecurity', label: 'Cybersecurity',   emoji: '🔒', description: 'Threat detection, incident response, access control, security ops' },
]

export const SCENARIOS = {

  // ── EVERYDAY LIFE ──────────────────────────────────────────────────────────
  everyday: [
    {
      id: 'ev1', difficulty: 'easy',
      scenario: "Every morning at 7am your phone sends you a weather alert if rain is expected that day, so you know to grab an umbrella.",
      answer: 'automation',
      explanation: "Same trigger (7am), same condition check (rain?), same action (send alert). No judgment needed. Classic scheduled automation."
    },
    {
      id: 'ev2', difficulty: 'easy',
      scenario: "You want an app that notices when you're running low on groceries — but your household has rotating meal preferences, dietary changes, and three people with different schedules and no consistent shopping pattern.",
      answer: 'not_ready',
      explanation: "Inconsistent patterns and undefined preferences mean there's no stable process to automate or hand to AI yet. Define your household's rhythm first."
    },
    {
      id: 'ev3', difficulty: 'easy',
      scenario: "Your smart home turns off all the lights and locks the front door automatically when your phone's GPS shows you've left the neighborhood.",
      answer: 'automation',
      explanation: "Location trigger, fixed actions. This runs the same way every time you leave. No interpretation involved."
    },
    {
      id: 'ev4', difficulty: 'easy',
      scenario: "An AI reads your emails and texts each morning and gives you a summary of what needs your attention today, ranked by urgency.",
      answer: 'agent',
      explanation: "Reading unstructured communication, interpreting urgency, and ranking priorities requires contextual judgment that changes every day. That's an agent."
    },
    {
      id: 'ev5', difficulty: 'medium',
      scenario: "Your bill payment app automatically pays your fixed monthly bills — rent, subscriptions, utilities with flat rates — on their due dates from your checking account.",
      answer: 'automation',
      explanation: "Fixed amounts, fixed dates, fixed accounts. Even though money is involved, the logic is entirely rule-based. No decision-making required."
    },
    {
      id: 'ev6', difficulty: 'medium',
      scenario: "You want an AI to help you decide how to spend your discretionary budget each month based on your goals, recent spending, upcoming expenses, and how you're feeling financially.",
      answer: 'agent',
      explanation: "Balancing competing priorities, reading context, and advising based on shifting goals and feelings — this is judgment-heavy reasoning. An agent can assist, but the human stays in charge of final decisions."
    },
    {
      id: 'ev7', difficulty: 'medium',
      scenario: "An app tracks your running workouts and automatically logs distance, pace, and calories to a spreadsheet after each session using your fitness tracker data.",
      answer: 'automation',
      explanation: "Sensor data flows to a defined destination in a defined format. No interpretation — just structured data moving between systems."
    },
    {
      id: 'ev8', difficulty: 'medium',
      scenario: "You want to build a system that plans your weekly meals, generates a shopping list, and adjusts based on what's already in your fridge, your schedule that week, and any dietary changes.",
      answer: 'agent',
      explanation: "Multiple variables (inventory, schedule, preferences) that change weekly and interact with each other. This requires reasoning across context — not a fixed formula."
    },
    {
      id: 'ev9', difficulty: 'medium',
      scenario: "Your family has talked about creating a shared calendar and chore rotation system but everyone has different ideas about fairness and nobody has agreed on the rules yet.",
      answer: 'not_ready',
      explanation: "No agreed process means there's nothing to automate. The human negotiation has to happen first. Automating a contested system doesn't resolve the contest."
    },
    {
      id: 'ev10', difficulty: 'hard',
      scenario: "An app automatically reorders your coffee pods when your smart home detects the container is less than 20% full, using your stored Amazon payment method.",
      answer: 'automation',
      explanation: "Sensor threshold → purchase trigger. Even though it involves a financial transaction, the rule is fully defined. Condition met → action taken. Automation."
    },
    {
      id: 'ev11', difficulty: 'hard',
      scenario: "You want an AI travel assistant that plans trips based on your interests, budget, travel style, and current mood — and adjusts recommendations when you say something doesn't feel right.",
      answer: 'agent',
      explanation: "Preferences shift, mood is subjective, and 'doesn't feel right' requires interpretation. This is conversational reasoning across variable inputs — agent territory."
    },
    {
      id: 'ev12', difficulty: 'hard',
      scenario: "Your home security system sends you a push notification every time motion is detected at your front door between 10pm and 6am.",
      answer: 'automation',
      explanation: "Time window + sensor event = notification. The rule is fixed. It doesn't evaluate who's at the door or whether to be concerned — that judgment stays with you."
    },
    {
      id: 'ev13', difficulty: 'hard',
      scenario: "An AI monitors your teenager's social media for signs of bullying, distress, or dangerous behavior and alerts you if it detects something concerning.",
      answer: 'agent',
      explanation: "Detecting emotional subtext, interpreting tone in context, and distinguishing concerning from normal teenage communication requires nuanced reasoning — not keyword matching."
    },
    {
      id: 'ev14', difficulty: 'hard',
      scenario: "You want to automate your morning routine app, but some mornings you work out, some you meditate, some you do neither, and your schedule changes based on meetings, energy, and season.",
      answer: 'not_ready',
      explanation: "Inconsistency is the signal. You don't have a stable routine — you have a set of options you choose between situationally. Define a baseline routine before trying to automate it."
    },
    {
      id: 'ev15', difficulty: 'hard',
      scenario: "Your smart thermostat learns your temperature preferences over time and automatically adjusts heating and cooling based on time of day, occupancy, and seasonal patterns it has observed.",
      answer: 'agent',
      explanation: "Close call — but learning from observed patterns and adapting behavior over time based on multiple contextual signals crosses from scheduled automation into agentic reasoning."
    },
  ],

  // ── INDUSTRIAL ─────────────────────────────────────────────────────────────
  industrial: [
    {
      id: 'in1', difficulty: 'easy',
      scenario: "When a sensor on a production line detects that a component has failed a quality check, it automatically diverts that item to the rejection bin and logs the failure with a timestamp.",
      answer: 'automation',
      explanation: "Sensor trigger, binary condition (pass/fail), fixed action. This is industrial automation at its most classic — no judgment involved."
    },
    {
      id: 'in2', difficulty: 'easy',
      scenario: "Your warehouse management system automatically generates a purchase order when any SKU's inventory drops below its defined reorder threshold.",
      answer: 'automation',
      explanation: "Rule-based inventory trigger. The threshold is set, the supplier is known, the order format is fixed. This runs the same way for every SKU every time."
    },
    {
      id: 'in3', difficulty: 'easy',
      scenario: "Your manufacturing plant wants to use AI to predict when machines will fail, but maintenance records are incomplete, inconsistent across shifts, and stored in three different formats.",
      answer: 'not_ready',
      explanation: "Predictive maintenance requires clean, consistent historical data. Incomplete and fragmented records mean the foundation isn't there. Standardize data collection first."
    },
    {
      id: 'in4', difficulty: 'medium',
      scenario: "An AI system monitors vibration, temperature, and pressure sensors across your production line in real time, identifies anomaly patterns that precede equipment failure, and alerts maintenance teams with a diagnosis.",
      answer: 'agent',
      explanation: "Correlating multiple data streams, recognizing complex patterns, and producing an interpretive diagnosis — this is multi-sensor reasoning, not threshold alerting."
    },
    {
      id: 'in5', difficulty: 'medium',
      scenario: "Your logistics system automatically assigns incoming shipments to available dock doors based on truck arrival time, shipment size, and priority tier — using rules your operations team defined.",
      answer: 'automation',
      explanation: "The assignment rules are defined. Even with multiple variables, if the logic is 'IF these conditions THEN assign to this dock,' it's conditional automation — not an agent."
    },
    {
      id: 'in6', difficulty: 'medium',
      scenario: "You want AI to optimize your production schedule daily based on machine availability, order priorities, material lead times, labor shifts, and real-time demand signals.",
      answer: 'agent',
      explanation: "Daily variables interacting in complex ways with no fixed formula — this requires reasoning across competing constraints to produce a new plan each day."
    },
    {
      id: 'in7', difficulty: 'medium',
      scenario: "Your facility automatically adjusts conveyor belt speed based on downstream buffer levels — speeding up when the buffer is low, slowing down when it's full.",
      answer: 'automation',
      explanation: "Two states, two responses. This is a feedback control loop — a well-established form of industrial automation with no judgment required."
    },
    {
      id: 'in8', difficulty: 'medium',
      scenario: "Your quality control process currently relies on three different inspectors who each apply different standards, and there's no written inspection protocol.",
      answer: 'not_ready',
      explanation: "Three inspectors, three standards, no protocol — the process isn't defined. Automating or adding AI to an inconsistent human process just scales the inconsistency."
    },
    {
      id: 'in9', difficulty: 'hard',
      scenario: "An AI reviews supplier invoices against purchase orders, flags discrepancies above a defined tolerance, and routes them to the procurement manager with a summary of the issue.",
      answer: 'agent',
      explanation: "Matching documents, interpreting discrepancies, and writing a summary requires reading context across two documents and producing a reasoned output — not just a number comparison."
    },
    {
      id: 'in10', difficulty: 'hard',
      scenario: "Your plant automatically prints shipping labels and packing slips for completed orders using data pulled from your order management system — same format every time.",
      answer: 'automation',
      explanation: "Data in, document out, fixed format. Despite happening in a complex industrial environment, the logic is straightforward document generation triggered by order completion."
    },
    {
      id: 'in11', difficulty: 'hard',
      scenario: "An AI analyzes real-time energy consumption across your facility, identifies inefficiencies, and recommends specific operational changes to reduce costs without impacting output.",
      answer: 'agent',
      explanation: "Interpreting patterns, evaluating tradeoffs, and producing specific recommendations that balance multiple goals — this is advisory reasoning, not monitoring."
    },
    {
      id: 'in12', difficulty: 'hard',
      scenario: "Your ERP system automatically calculates the cost of goods sold for each completed production run by multiplying units produced by the standard cost per unit.",
      answer: 'automation',
      explanation: "A fixed formula applied to known inputs. Even in a complex ERP environment, this is arithmetic automation — the math doesn't require judgment."
    },
    {
      id: 'in13', difficulty: 'hard',
      scenario: "You want to deploy AI for demand forecasting but your sales history has three years of disruptions from supply chain issues, a product line change, and a major customer who left last year.",
      answer: 'not_ready',
      explanation: "Disrupted historical data produces unreliable forecasts. You need to either clean and annotate the data to account for anomalies, or establish a stable baseline period first."
    },
    {
      id: 'in14', difficulty: 'hard',
      scenario: "Your automated guided vehicles (AGVs) follow fixed programmed routes to move materials between stations, stopping when sensors detect an obstacle in the path.",
      answer: 'automation',
      explanation: "Fixed routes, rule-based stopping. Even though this is robotics, the behavior is fully predetermined — no navigation decisions being made in real time."
    },
    {
      id: 'in15', difficulty: 'hard',
      scenario: "An AI system monitors your supply chain for geopolitical events, weather disruptions, and supplier financial health — then proactively recommends sourcing adjustments before disruptions hit.",
      answer: 'agent',
      explanation: "Monitoring unstructured global signals, interpreting risk, and generating proactive recommendations that vary by situation — this is strategic reasoning, not alerting."
    },
  ],

  // ── ADMINISTRATIVE ─────────────────────────────────────────────────────────
  administrative: [
    {
      id: 'ad1', difficulty: 'easy',
      scenario: "When a new employee is hired, HR automatically sends them a welcome email, adds them to the payroll system, and creates their user accounts in the company tools.",
      answer: 'automation',
      explanation: "New hire event triggers a fixed sequence of actions across known systems. Same every time. Classic HR onboarding automation."
    },
    {
      id: 'ad2', difficulty: 'easy',
      scenario: "Every Friday at 4pm the system generates a weekly timesheet summary for each employee and emails it to their manager for review.",
      answer: 'automation',
      explanation: "Scheduled, consistent, same output format every week. The manager does the judgment — the system just assembles and delivers the data."
    },
    {
      id: 'ad3', difficulty: 'easy',
      scenario: "Your office wants AI to handle employee performance reviews, but managers currently rate employees differently and there's no standardized rubric.",
      answer: 'not_ready',
      explanation: "Performance reviews require a defined, agreed-upon standard before any automation or AI can assist. Without a rubric, you'd be delegating inconsistent judgment."
    },
    {
      id: 'ad4', difficulty: 'medium',
      scenario: "An AI reads incoming contracts, flags clauses that deviate from your standard templates, and summarizes the non-standard terms for legal review.",
      answer: 'agent',
      explanation: "Reading legal language, comparing to a standard, and interpreting what's different requires contextual understanding. The summary is a reasoned output — not a rule match."
    },
    {
      id: 'ad5', difficulty: 'medium',
      scenario: "Your compliance system automatically archives all emails older than 7 years to cold storage and sends a deletion confirmation report to the compliance officer.",
      answer: 'automation',
      explanation: "Age threshold → archive action → report. The rule is set by compliance policy. No judgment about which emails to keep — the rule applies uniformly."
    },
    {
      id: 'ad6', difficulty: 'medium',
      scenario: "When an employee submits an expense report, the system checks it against the travel policy, flags any out-of-policy items, and routes it to the appropriate approver based on amount.",
      answer: 'automation',
      explanation: "Policy rules are defined, thresholds are set, routing logic is predetermined. Even with multiple rules, the system applies them consistently — that's conditional automation."
    },
    {
      id: 'ad7', difficulty: 'medium',
      scenario: "An AI assistant reads meeting transcripts, extracts action items, assigns them to the right people based on context, and adds them to the project management tool.",
      answer: 'agent',
      explanation: "Interpreting unstructured conversation to identify commitments and attribute ownership — who said they'd do what — requires understanding of context and intent."
    },
    {
      id: 'ad8', difficulty: 'medium',
      scenario: "Your procurement team wants to automate vendor selection, but the selection criteria change with every purchase and involve informal relationships, budget politics, and unstated preferences.",
      answer: 'not_ready',
      explanation: "Informal, shifting, and politically influenced decisions can't be automated or delegated to AI without first making the criteria explicit and consistent."
    },
    {
      id: 'ad9', difficulty: 'hard',
      scenario: "Your document management system automatically applies retention labels to files based on their folder location and file type — HR files get 7 years, finance gets 10, general gets 3.",
      answer: 'automation',
      explanation: "Classification by location and type with predetermined retention rules. Even though it's applied across thousands of files, the logic is fixed and uniform."
    },
    {
      id: 'ad10', difficulty: 'hard',
      scenario: "An AI reads employee survey responses, identifies emerging themes and morale issues, and produces a summary report for leadership with recommended focus areas.",
      answer: 'agent',
      explanation: "Interpreting qualitative sentiment, recognizing patterns across free-text responses, and synthesizing recommendations requires nuanced language understanding — not categorization."
    },
    {
      id: 'ad11', difficulty: 'hard',
      scenario: "Your office automatically sends lease renewal reminders 90 days before expiration for every office location in your portfolio, with the lease end date pulled from your property database.",
      answer: 'automation',
      explanation: "Date math plus a templated reminder sent to a known contact. Even across a large portfolio this is straightforward scheduled automation."
    },
    {
      id: 'ad12', difficulty: 'hard',
      scenario: "An AI handles first-line responses to employee IT support tickets — answering common questions from your knowledge base and routing complex issues to the right specialist.",
      answer: 'agent',
      explanation: "Reading unstructured problem descriptions, matching to relevant knowledge, deciding what counts as 'complex,' and routing appropriately — this is multi-step contextual triage."
    },
    {
      id: 'ad13', difficulty: 'hard',
      scenario: "Your facilities team wants to use AI to manage office space allocation, but space needs are decided in ad-hoc leadership meetings and the criteria shift with every reorg.",
      answer: 'not_ready',
      explanation: "Ad-hoc, politically driven decisions with shifting criteria aren't ready for AI. Establish a space allocation policy first — then the AI has something to apply."
    },
    {
      id: 'ad14', difficulty: 'hard',
      scenario: "When a contract is fully executed (all signatures collected), the system automatically updates the contract status in your CRM, notifies the account manager, and creates a 90-day check-in task.",
      answer: 'automation',
      explanation: "A clear completion event triggers three fixed downstream actions. No interpretation of the contract contents — just status-triggered workflow execution."
    },
    {
      id: 'ad15', difficulty: 'hard',
      scenario: "An AI reviews job applications against the job description, scores candidates on defined criteria, and produces a ranked shortlist with notes on each candidate's fit.",
      answer: 'agent',
      explanation: "Matching unstructured resumes to nuanced job requirements and producing qualitative notes requires language understanding and interpretive judgment — even with defined criteria."
    },
  ],

  // ── DEVELOPER ──────────────────────────────────────────────────────────────
  developer: [
    {
      id: 'dev1', difficulty: 'easy',
      scenario: "Every time code is pushed to the main branch, your CI/CD pipeline automatically runs the test suite and blocks the merge if any tests fail.",
      answer: 'automation',
      explanation: "Push event → run tests → pass/fail gate. This is the textbook CI/CD automation. No judgment — the tests either pass or they don't."
    },
    {
      id: 'dev2', difficulty: 'easy',
      scenario: "Your monitoring system sends a PagerDuty alert when API error rates exceed 5% over any 5-minute window.",
      answer: 'automation',
      explanation: "Metric threshold → alert trigger. The condition is defined, the action is fixed. Classic observability automation."
    },
    {
      id: 'dev3', difficulty: 'easy',
      scenario: "Your team wants to use AI to decide which technical debt to prioritize, but engineers disagree on what counts as technical debt and there's no shared definition.",
      answer: 'not_ready',
      explanation: "Without a shared definition of technical debt, there's no consistent process to support. Align on criteria first — then you can assess and prioritize systematically."
    },
    {
      id: 'dev4', difficulty: 'medium',
      scenario: "An AI code reviewer reads pull requests, identifies potential bugs and security issues, suggests improvements, and explains its reasoning in plain English comments.",
      answer: 'agent',
      explanation: "Reading code for intent, reasoning about risk, generating contextual explanations — this is multi-step technical judgment that varies with every PR."
    },
    {
      id: 'dev5', difficulty: 'medium',
      scenario: "Your deployment pipeline automatically promotes a build from staging to production if all integration tests pass, performance benchmarks are met, and no open P1 bugs exist.",
      answer: 'automation',
      explanation: "Three conditions, all checkable programmatically, one outcome. Even with multiple gates, the logic is fully defined. Conditional automation — not an agent."
    },
    {
      id: 'dev6', difficulty: 'medium',
      scenario: "An AI analyzes your application's performance metrics, identifies the root cause of a latency spike, and recommends specific code or infrastructure changes to fix it.",
      answer: 'agent',
      explanation: "Correlating metrics, forming a hypothesis about root cause, and producing specific recommendations requires interpretive reasoning across multiple data sources."
    },
    {
      id: 'dev7', difficulty: 'medium',
      scenario: "Your system automatically backs up all production databases to encrypted S3 buckets every night at 2am and sends a completion report to the ops team.",
      answer: 'automation',
      explanation: "Scheduled, consistent, fixed destination, fixed format report. Night after night, the same thing happens regardless of what's in the database."
    },
    {
      id: 'dev8', difficulty: 'hard',
      scenario: "An AI assistant helps developers debug by reading error logs, understanding the codebase context, forming hypotheses about what's failing, and suggesting targeted fixes.",
      answer: 'agent',
      explanation: "Error logs alone don't tell you what's wrong — interpretation requires understanding code context, reasoning about causation, and generating targeted suggestions. That's an agent."
    },
    {
      id: 'dev9', difficulty: 'hard',
      scenario: "Your system automatically rotates API keys every 90 days, updates them in your secrets manager, and redeploys the affected services with zero downtime using a blue/green strategy.",
      answer: 'automation',
      explanation: "Complex sequence, but every step is predetermined. The 90-day trigger, the rotation process, and the deployment strategy are all defined. This is sophisticated automation."
    },
    {
      id: 'dev10', difficulty: 'hard',
      scenario: "You want to build an AI that reads your entire codebase and answers developer questions about how the system works, what a function does, and where to make changes for a given feature.",
      answer: 'agent',
      explanation: "Contextual code understanding, natural language Q&A, and reasoning about where to make changes requires an agent with codebase context — not a search tool."
    },
    {
      id: 'dev11', difficulty: 'hard',
      scenario: "Your GitHub bot automatically adds labels to new issues based on keywords in the title — 'bug' if the title contains 'error' or 'broken,' 'feature' if it contains 'add' or 'support.'",
      answer: 'automation',
      explanation: "Keyword matching to label assignment. Even though it's operating on natural language, the logic is purely rule-based. Semantic understanding is not involved."
    },
    {
      id: 'dev12', difficulty: 'hard',
      scenario: "An AI writes unit tests for functions that don't have test coverage yet, infers the expected behavior from the function name and code, and opens a PR with the tests.",
      answer: 'agent',
      explanation: "Inferring expected behavior from code requires understanding intent — what should this function do? That's not extractable by rule. It requires reasoning about the code's purpose."
    },
    {
      id: 'dev13', difficulty: 'hard',
      scenario: "Your on-call system automatically escalates a PagerDuty alert to the secondary on-call engineer if the primary doesn't acknowledge within 15 minutes.",
      answer: 'automation',
      explanation: "Timer + acknowledgment check + escalation action. Even in a high-stakes ops environment, the logic is a simple time-based rule. Automation."
    },
    {
      id: 'dev14', difficulty: 'hard',
      scenario: "You want AI to help architect a new microservices system, but the team hasn't agreed on service boundaries, data ownership, or which existing monolith components to extract first.",
      answer: 'not_ready',
      explanation: "Architectural decisions require human alignment first. AI can help explore options, but it can't make foundational design decisions for a system whose requirements aren't settled."
    },
    {
      id: 'dev15', difficulty: 'hard',
      scenario: "An AI monitors your API's usage patterns, detects when a client is exhibiting behavior consistent with credential stuffing or abuse, and automatically rate-limits their key while alerting the security team.",
      answer: 'agent',
      explanation: "Distinguishing abuse patterns from heavy legitimate use requires behavioral interpretation, not just threshold checking. The 'consistent with credential stuffing' judgment is the agent's job."
    },
  ],

  // ── SALES ──────────────────────────────────────────────────────────────────
  sales: [
    {
      id: 'sa1', difficulty: 'easy',
      scenario: "When a prospect fills out a demo request form, they're automatically added to your CRM, assigned to a sales rep based on territory, and sent a calendar link to book a time.",
      answer: 'automation',
      explanation: "Form submission triggers three fixed actions in a defined sequence. Territory assignment rules are set. No sales judgment required at this stage."
    },
    {
      id: 'sa2', difficulty: 'easy',
      scenario: "Your CRM automatically sends a follow-up email 48 hours after a demo if the prospect hasn't responded, using a standard template.",
      answer: 'automation',
      explanation: "Time-based trigger, condition check (no response), templated action. This is the most common form of sales automation — and still effective."
    },
    {
      id: 'sa3', difficulty: 'easy',
      scenario: "Your sales team wants AI to take over relationship-building with enterprise accounts, but reps each manage relationships differently and there's no defined enterprise sales process.",
      answer: 'not_ready',
      explanation: "Relationship-building without a defined process can't be systematized. Document what good enterprise relationship management looks like before adding any AI layer."
    },
    {
      id: 'sa4', difficulty: 'medium',
      scenario: "An AI reads a prospect's LinkedIn, recent company news, and your past interaction history — then generates a personalized outreach email tailored to their current business situation.",
      answer: 'agent',
      explanation: "Synthesizing multiple sources, interpreting relevance, and producing a contextually tailored message requires reasoning — not template filling."
    },
    {
      id: 'sa5', difficulty: 'medium',
      scenario: "Your CRM automatically updates a deal's stage from 'Proposal Sent' to 'Awaiting Decision' when a contract document is opened by the prospect for the first time.",
      answer: 'automation',
      explanation: "Document open event → stage update. The trigger is trackable and the action is fixed. No sales judgment — just status tracking automation."
    },
    {
      id: 'sa6', difficulty: 'medium',
      scenario: "An AI listens to sales call recordings, scores reps on talk/listen ratio, question quality, and objection handling — then provides coaching feedback after each call.",
      answer: 'agent',
      explanation: "Evaluating conversation quality and generating coaching feedback requires interpreting communication nuance against defined but subjective criteria."
    },
    {
      id: 'sa7', difficulty: 'medium',
      scenario: "When a deal is marked 'Closed Won' in your CRM, the system automatically creates a kickoff project in your PM tool, notifies the customer success team, and generates a welcome email.",
      answer: 'automation',
      explanation: "CRM status change triggers a defined sequence across tools. Even across three systems, the logic is: deal closed → do these three things."
    },
    {
      id: 'sa8', difficulty: 'hard',
      scenario: "Your AI analyzes your CRM data and identifies which deals in the pipeline are most likely to close this quarter based on activity patterns, deal age, and engagement signals.",
      answer: 'agent',
      explanation: "Combining multiple signals into a probability assessment and ranking deals requires pattern recognition and interpretive reasoning across varied data — not a formula."
    },
    {
      id: 'sa9', difficulty: 'hard',
      scenario: "Your sales ops team wants to automate commission calculations but reps have negotiated different commission structures, there are exceptions for legacy accounts, and the rules change each quarter.",
      answer: 'not_ready',
      explanation: "Exceptions, inconsistency, and quarterly rule changes mean there's no stable logic to automate. Standardize commission structures before trying to systematize calculations."
    },
    {
      id: 'sa10', difficulty: 'hard',
      scenario: "An AI monitors your competitor's pricing pages, product announcements, and review sites — then alerts your sales team when a competitor makes a move relevant to an active deal.",
      answer: 'agent',
      explanation: "Determining relevance to a specific deal requires contextual judgment — not just pattern detection. Which competitor move matters for which deal involves reasoning across two separate contexts."
    },
    {
      id: 'sa11', difficulty: 'hard',
      scenario: "Your system automatically sends a re-engagement sequence to any lead that went cold (no activity in 90 days) — three emails over two weeks using pre-written templates.",
      answer: 'automation',
      explanation: "Time-based dormancy trigger + fixed sequence + pre-written content. The personalization is minimal. This is scheduled sequence automation."
    },
    {
      id: 'sa12', difficulty: 'hard',
      scenario: "An AI joins your sales calls, takes notes, extracts next steps and commitments, and automatically creates follow-up tasks in your CRM attributed to the right people.",
      answer: 'agent',
      explanation: "Extracting commitments from conversation requires understanding who said what and what constitutes a commitment — not just transcription. Attributing to 'the right people' requires contextual reasoning."
    },
    {
      id: 'sa13', difficulty: 'hard',
      scenario: "Your sales enablement system automatically routes inbound leads to different nurture tracks based on the industry and company size fields they filled in on the form.",
      answer: 'automation',
      explanation: "Form field values → routing rules. Even with multiple tracks, the logic is IF industry = X AND size = Y THEN route to track Z. Defined conditional automation."
    },
    {
      id: 'sa14', difficulty: 'hard',
      scenario: "An AI reviews a prospect's procurement requirements document and drafts a compliant proposal response, mapping your capabilities to their stated evaluation criteria.",
      answer: 'agent',
      explanation: "Reading and interpreting a requirements document, matching against capabilities, and writing a contextual response — this is multi-step document reasoning and synthesis."
    },
    {
      id: 'sa15', difficulty: 'hard',
      scenario: "Your sales team's win/loss analysis relies on exit interviews, but nobody follows up consistently, the questions change, and responses aren't tracked anywhere systematically.",
      answer: 'not_ready',
      explanation: "No consistent process, no consistent data. You can't analyze or automate a signal you're not reliably collecting. Standardize the win/loss interview first."
    },
  ],

  // ── MARKETING ──────────────────────────────────────────────────────────────
  marketing: [
    {
      id: 'mk1', difficulty: 'easy',
      scenario: "Every time someone subscribes to your email list, they automatically receive a welcome email sequence: immediate welcome, Day 3 intro to your work, Day 7 first resource.",
      answer: 'automation',
      explanation: "Subscription trigger + fixed time delays + pre-written emails. This is drip sequence automation — one of the most common and well-understood forms."
    },
    {
      id: 'mk2', difficulty: 'easy',
      scenario: "Your analytics dashboard automatically pulls data from Google Analytics, your ad platforms, and your CRM every Monday morning and emails a consolidated report to the marketing team.",
      answer: 'automation',
      explanation: "Scheduled data aggregation from defined sources into a fixed report format. The humans interpret the data — the system just assembles and delivers it."
    },
    {
      id: 'mk3', difficulty: 'easy',
      scenario: "Your marketing team wants AI to define your brand voice and content strategy, but leadership hasn't aligned on the brand positioning and there are three competing visions internally.",
      answer: 'not_ready',
      explanation: "Brand alignment is a human decision that requires internal consensus first. AI can help execute a defined strategy — it can't resolve a leadership disagreement about what the brand is."
    },
    {
      id: 'mk4', difficulty: 'medium',
      scenario: "An AI analyzes your top-performing content, identifies patterns in what resonates with your audience, and generates a list of content ideas with recommended formats and angles.",
      answer: 'agent',
      explanation: "Pattern recognition across content performance plus creative ideation requires interpretive reasoning — what works and why isn't a formula you can hardcode."
    },
    {
      id: 'mk5', difficulty: 'medium',
      scenario: "Your ad platform automatically pauses campaigns whose cost-per-click exceeds a threshold you've set, and emails you a notification when it does.",
      answer: 'automation',
      explanation: "Metric threshold → pause action → notification. The rule is yours; the system enforces it consistently. No marketing judgment at execution time."
    },
    {
      id: 'mk6', difficulty: 'medium',
      scenario: "An AI segments your email list based on behavioral signals — open rates, click patterns, purchase history — and personalizes subject lines and content blocks for each segment.",
      answer: 'agent',
      explanation: "Dynamic segmentation based on behavioral patterns plus content personalization that varies by segment requires reasoning about what matters to whom. Not static rule-based segmentation."
    },
    {
      id: 'mk7', difficulty: 'medium',
      scenario: "When someone abandons their cart on your e-commerce site, they automatically receive a reminder email after 1 hour, a discount offer after 24 hours, and a final reminder after 72 hours.",
      answer: 'automation',
      explanation: "Abandonment trigger, three fixed time-delayed emails, pre-written content. Cart abandonment sequences are automation fundamentals."
    },
    {
      id: 'mk8', difficulty: 'hard',
      scenario: "An AI monitors brand mentions across social media, news sites, and forums — identifies sentiment shifts, surfaces emerging narratives, and drafts a recommended response strategy for your comms team.",
      answer: 'agent',
      explanation: "Monitoring unstructured content, interpreting sentiment in context, recognizing narrative patterns, and recommending strategy — this is multi-source reasoning with a strategic output."
    },
    {
      id: 'mk9', difficulty: 'hard',
      scenario: "Your marketing automation platform tags contacts with 'high intent' when they visit your pricing page more than twice in a week and open at least two emails in the same period.",
      answer: 'automation',
      explanation: "Two behavioral conditions checked against defined thresholds produce a tag. Even though it's modeling intent, the logic is fully rule-based — no inference required."
    },
    {
      id: 'mk10', difficulty: 'hard',
      scenario: "An AI writes first drafts of blog posts based on a topic brief, adapting tone and depth to your defined brand voice and the target audience's knowledge level.",
      answer: 'agent',
      explanation: "Adapting tone, calibrating depth, and writing coherently within brand voice requires language reasoning — not template filling. Even with a brief, the output varies by judgment."
    },
    {
      id: 'mk11', difficulty: 'hard',
      scenario: "Your system automatically pulls the last three months of campaign performance data and formats it into your standard quarterly board report template.",
      answer: 'automation',
      explanation: "Data extraction + template population. The board report format is fixed. Even if the data tells an interesting story, the system doesn't interpret it — it formats it."
    },
    {
      id: 'mk12', difficulty: 'hard',
      scenario: "You want to personalize your website homepage for each visitor based on their industry, traffic source, and previous visits — showing different headlines and CTAs to different audiences.",
      answer: 'agent',
      explanation: "Dynamic content selection based on multiple visitor signals that interact in complex ways — and where the right combination isn't always obvious — crosses into agent-driven personalization."
    },
    {
      id: 'mk13', difficulty: 'hard',
      scenario: "Your influencer marketing program wants AI to manage relationships, negotiate rates, and decide which influencers to work with — but you've never run an influencer program and have no benchmarks.",
      answer: 'not_ready',
      explanation: "No benchmarks, no prior relationships, no defined criteria for selection. Build your first few campaigns manually to establish what good looks like before systematizing anything."
    },
    {
      id: 'mk14', difficulty: 'hard',
      scenario: "An AI A/B tests subject lines by sending variants to small list segments, analyzing open rates, and automatically promoting the winner to the full list after 4 hours.",
      answer: 'agent',
      explanation: "Close call. The testing logic could be automated — but determining when statistical significance is meaningful and promoting accordingly involves judgment about reliability thresholds that aren't always fixed."
    },
    {
      id: 'mk15', difficulty: 'hard',
      scenario: "Your social media scheduler automatically publishes approved posts at optimal times based on your audience's historical engagement patterns for each platform.",
      answer: 'automation',
      explanation: "The posts are approved by humans. The timing optimization applies a learned pattern consistently. No content decisions are being made — just optimized scheduling of pre-approved content."
    },
  ],

  // ── HEALTHCARE (ADMIN / OFFICE) ────────────────────────────────────────────
  healthcare: [
    {
      id: 'hc1', difficulty: 'easy',
      scenario: "Your clinic automatically sends appointment reminder texts to patients 48 hours and 2 hours before their scheduled visit.",
      answer: 'automation',
      explanation: "Scheduled time-based triggers, fixed message templates, known recipients from the appointment system. Medical context doesn't change the logic — this is standard scheduling automation."
    },
    {
      id: 'hc2', difficulty: 'easy',
      scenario: "When a patient checks in at the front desk, the system automatically notifies the assigned provider via the internal messaging system that the patient has arrived.",
      answer: 'automation',
      explanation: "Check-in event → notification to a defined recipient. Same every time. This is a simple event-triggered notification."
    },
    {
      id: 'hc3', difficulty: 'easy',
      scenario: "Your billing team wants to use AI to handle insurance authorization decisions, but your authorization criteria vary by payer, change frequently, and aren't fully documented.",
      answer: 'not_ready',
      explanation: "Variable, undocumented criteria that change by payer are not ready for automation or AI. Document and standardize your authorization criteria per payer before adding any system."
    },
    {
      id: 'hc4', difficulty: 'medium',
      scenario: "An AI reads incoming patient intake forms, identifies incomplete fields or inconsistencies in the patient-reported history, and flags them for the front desk to follow up before the appointment.",
      answer: 'agent',
      explanation: "Detecting inconsistencies in free-text and structured responses requires understanding what a complete, consistent intake looks like — and what deviates from it. That's interpretive."
    },
    {
      id: 'hc5', difficulty: 'medium',
      scenario: "Your system automatically generates and sends a superbill to patients after their visit, pulling procedure codes, diagnosis codes, and provider information from the visit record.",
      answer: 'automation',
      explanation: "Structured data from visit record → formatted billing document → delivered to patient. Fixed format, defined data sources. Document generation automation."
    },
    {
      id: 'hc6', difficulty: 'medium',
      scenario: "An AI monitors your clinic's scheduling patterns, identifies recurring no-show slots by day and time, and recommends overbooking rates for each slot type to optimize utilization.",
      answer: 'agent',
      explanation: "Pattern recognition across scheduling data plus contextual recommendations that vary by slot type and day requires reasoning — not just averaging."
    },
    {
      id: 'hc7', difficulty: 'medium',
      scenario: "When an insurance claim is denied, the system automatically assigns it to the appropriate billing specialist based on payer type and denial code, and creates a task with the deadline.",
      answer: 'automation',
      explanation: "Denial event + routing rules by payer and denial code + task creation. The rules are defined. Even in a complex billing environment, this is conditional routing automation."
    },
    {
      id: 'hc8', difficulty: 'hard',
      scenario: "An AI reads prior authorization request letters from insurance companies, identifies what additional documentation is being requested, and drafts a response for the billing team to review.",
      answer: 'agent',
      explanation: "Reading insurance correspondence, interpreting what's being asked in context, and drafting a responsive document requires language understanding and contextual judgment."
    },
    {
      id: 'hc9', difficulty: 'hard',
      scenario: "Your practice management system automatically calculates each patient's estimated out-of-pocket cost before their appointment based on their verified insurance benefits and the scheduled procedure codes.",
      answer: 'automation',
      explanation: "Benefits data + procedure codes + calculation formula = estimate. Even with insurance complexity, if the inputs are verified and the formula is defined, this is financial calculation automation."
    },
    {
      id: 'hc10', difficulty: 'hard',
      scenario: "An AI reviews patient satisfaction survey responses, identifies themes in complaints and compliments, and produces a monthly summary report with recommended operational improvements.",
      answer: 'agent',
      explanation: "Interpreting qualitative patient feedback, recognizing patterns, and generating actionable recommendations requires language reasoning across variable, unstructured input."
    },
    {
      id: 'hc11', difficulty: 'hard',
      scenario: "Your referral management system automatically faxes referral packets to the specialist's office when a referral order is placed, including the patient's demographics and relevant visit notes.",
      answer: 'automation',
      explanation: "Referral order event → compile defined documents → transmit to known destination. Even with fax (yes, still used in healthcare), the logic is fixed document assembly and delivery."
    },
    {
      id: 'hc12', difficulty: 'hard',
      scenario: "You want AI to handle patient complaint escalations, but your clinic has no written complaint policy, escalation criteria differ between front desk staff, and serious complaints have been handled inconsistently.",
      answer: 'not_ready',
      explanation: "Inconsistent human handling of a sensitive, high-stakes process is a clear signal to stop and standardize before adding any AI. Document the policy first."
    },
    {
      id: 'hc13', difficulty: 'hard',
      scenario: "An AI assistant helps your front desk staff answer common patient questions about billing, insurance coverage, and appointment policies by pulling from your documented FAQ and policy library.",
      answer: 'agent',
      explanation: "Answering questions about policies requires understanding what the patient is actually asking (often not how they phrase it) and finding the relevant policy. That's contextual retrieval and reasoning."
    },
    {
      id: 'hc14', difficulty: 'hard',
      scenario: "Your credentialing system automatically tracks provider license expiration dates and sends renewal reminders at 180, 90, and 30 days before expiration.",
      answer: 'automation',
      explanation: "Date-based calculations from a known data field, fixed reminder schedule, templated notifications. Compliance context doesn't change the simplicity of the underlying logic."
    },
    {
      id: 'hc15', difficulty: 'hard',
      scenario: "An AI analyzes your clinic's revenue cycle data — claim submission times, denial rates by payer, payment posting lag — and identifies the specific process bottlenecks costing the most per month.",
      answer: 'agent',
      explanation: "Connecting multiple revenue cycle metrics to identify root-cause bottlenecks and quantify their cost requires cross-functional reasoning — not just reporting the numbers."
    },
  ],

  // ── WEB3 ───────────────────────────────────────────────────────────────────
  web3: [
    {
      id: 'w31', difficulty: 'easy',
      scenario: "Every time a new member joins your DAO Discord, they automatically get assigned a @newcomer role and receive a welcome DM with the onboarding doc link.",
      answer: 'automation',
      explanation: "Same trigger, same action, every time. No judgment needed. This is a textbook trigger → action automation."
    },
    {
      id: 'w32', difficulty: 'easy',
      scenario: "Your protocol sends a weekly on-chain activity summary email to all wallet holders — total transactions, gas spent, top interactions — pulled from indexed chain data.",
      answer: 'automation',
      explanation: "Consistent data source, consistent format, consistent schedule. This runs the same way every week regardless of what the data says."
    },
    {
      id: 'w33', difficulty: 'easy',
      scenario: "Your team wants to automate community moderation but everyone has a different idea of what counts as a violation and you've had three mods give three different rulings on the same post.",
      answer: 'not_ready',
      explanation: "Inconsistent human judgment means the process itself isn't defined. Document your moderation policy first — then consider automation or AI."
    },
    {
      id: 'w34', difficulty: 'easy',
      scenario: "When a user posts a support question in Discord, an AI reads the message, searches your docs, drafts a contextual reply, and routes to a human if it can't find a good answer.",
      answer: 'agent',
      explanation: "Reading intent, searching context, making a judgment call, deciding whether to escalate — multiple steps with variable paths. That's an agent."
    },
    {
      id: 'w35', difficulty: 'medium',
      scenario: "When a smart contract event fires indicating a liquidation threshold has been crossed, your system automatically sends an alert to the affected wallet address via email and push notification.",
      answer: 'automation',
      explanation: "On-chain event with a clear condition → fixed alert to known contact. Even with blockchain complexity, the logic is: condition met → send alert."
    },
    {
      id: 'w36', difficulty: 'medium',
      scenario: "An AI reads incoming partnership proposals sent to your DAO email, scores them against your stated criteria, drafts a preliminary assessment, and routes high-potential ones to the partnerships lead.",
      answer: 'agent',
      explanation: "Reading unstructured proposals, applying criteria with nuance, making a routing decision — this requires interpretation and judgment that varies per proposal."
    },
    {
      id: 'w37', difficulty: 'medium',
      scenario: "Your DAO wants an AI to handle contributor compensation decisions, but you haven't agreed on evaluation criteria and the last three payout rounds generated significant internal conflict.",
      answer: 'not_ready',
      explanation: "Disputed human decisions can't be delegated to AI. Resolve your compensation framework first."
    },
    {
      id: 'w38', difficulty: 'medium',
      scenario: "Your treasury management tool automatically rebalances token allocations at the end of each month according to a fixed percentage split approved by the DAO.",
      answer: 'automation',
      explanation: "The rules are set by DAO vote. The execution is mechanical — calculate the target split, make the trades. Automation."
    },
    {
      id: 'w39', difficulty: 'hard',
      scenario: "Every week, your AI scans on-chain data, identifies wallets inactive for 30+ days, and sends them a personalized re-engagement email referencing their last activity.",
      answer: 'automation',
      explanation: "Tricky — the email feels personalized. But the logic is fixed: inactive 30 days → pull last activity → fill template → send. The personalization is a mail merge, not judgment."
    },
    {
      id: 'w310', difficulty: 'hard',
      scenario: "An AI monitors your liquidity pools, detects unusual volume patterns that deviate from the 30-day average by more than two standard deviations, and flags them with a brief explanation.",
      answer: 'agent',
      explanation: "Producing a 'brief explanation' of why something is unusual requires reasoning about context — not just detecting the statistical anomaly. That crosses into agent territory."
    },
    {
      id: 'w311', difficulty: 'hard',
      scenario: "You want to build a system that automatically assigns contributor reputation scores based on on-chain participation, GitHub commits, and Discord activity using a weighted formula your team agreed on.",
      answer: 'automation',
      explanation: "Complex inputs, but the formula is fixed and agreed on. Known inputs + defined weights + calculated output = sophisticated automation."
    },
    {
      id: 'w312', difficulty: 'hard',
      scenario: "A bot automatically closes GitHub issues with no activity for 90 days and adds a 'stale' label, unless the issue is tagged 'critical' — in which case it pings the original author instead.",
      answer: 'automation',
      explanation: "Two fully defined branches: IF stale AND NOT critical → close. IF critical → ping. Conditional automation — not an agent."
    },
    {
      id: 'w313', difficulty: 'hard',
      scenario: "Your DAO's AI drafts the weekly newsletter by pulling top governance activity, notable contributor posts, and treasury movements — then a human editor reviews before it goes out.",
      answer: 'agent',
      explanation: "Selecting what's 'top' or 'notable' requires editorial judgment that changes week to week. The human review doesn't make the selection process automation."
    },
    {
      id: 'w314', difficulty: 'hard',
      scenario: "An AI reviews smart contract code submitted by external developers, identifies potential vulnerabilities, explains the risks in plain English, and recommends whether to approve or reject the PR.",
      answer: 'agent',
      explanation: "Security review requires contextual reasoning — understanding intent, comparing against patterns, weighing risk. The approve/reject recommendation is a judgment call."
    },
    {
      id: 'w315', difficulty: 'hard',
      scenario: "Your community has a rough idea that AI could help with onboarding new members, but nobody has documented what the current onboarding process looks like and 30-day retention is inconsistent.",
      answer: 'not_ready',
      explanation: "A rough idea isn't a process. Inconsistent retention signals the current approach isn't working or defined. Map what good onboarding looks like before any AI touches it."
    },
  ],

  // ── ARTS ───────────────────────────────────────────────────────────────────
  arts: [
    {
      id: 'ar1', difficulty: 'easy',
      scenario: "When someone purchases a digital print from your online store, they automatically receive a download link, a receipt, and a thank-you email with care instructions.",
      answer: 'automation',
      explanation: "Purchase event triggers three fixed, pre-written communications. No creative judgment — just reliable post-purchase delivery automation."
    },
    {
      id: 'ar2', difficulty: 'easy',
      scenario: "Your newsletter goes out every other Tuesday at 9am — you write it in advance and your email platform sends it automatically at the scheduled time.",
      answer: 'automation',
      explanation: "Scheduled delivery of pre-written content. You do the creative work; the automation handles the send timing."
    },
    {
      id: 'ar3', difficulty: 'easy',
      scenario: "You want AI to handle your creative direction and decide what work to make next, but you haven't defined what success looks like for your practice or what your artistic goals are this year.",
      answer: 'not_ready',
      explanation: "Creative direction requires a defined artistic vision to guide decisions. Without knowing what you're trying to achieve, no AI can make meaningful directional recommendations."
    },
    {
      id: 'ar4', difficulty: 'medium',
      scenario: "An AI reviews your client inquiry emails, identifies the project type being requested, checks your availability, and drafts a personalized response with your rates and next steps.",
      answer: 'agent',
      explanation: "Reading unstructured client requests, interpreting project fit, and drafting a contextually appropriate response requires judgment that varies with every inquiry."
    },
    {
      id: 'ar5', difficulty: 'medium',
      scenario: "Your invoicing system automatically generates and sends client invoices on the project milestone dates you set, with payment terms and your banking details pre-filled.",
      answer: 'automation',
      explanation: "Scheduled trigger, fixed template, pre-defined payment data. Invoice generation is administrative automation — entirely separable from the creative work."
    },
    {
      id: 'ar6', difficulty: 'medium',
      scenario: "An AI analyzes which of your posts across Instagram and your newsletter perform best, identifies patterns in content, format, and timing, and recommends what to create and when to post.",
      answer: 'agent',
      explanation: "Pattern recognition across performance data combined with creative recommendations requires interpretive reasoning — what works and why isn't a formula."
    },
    {
      id: 'ar7', difficulty: 'medium',
      scenario: "When a client signs a project contract through your e-signature tool, the system automatically creates a project folder in your cloud storage and sends the client their onboarding questionnaire.",
      answer: 'automation',
      explanation: "Contract signature event → two fixed actions in known tools. No judgment about what kind of project it is — the same thing happens for every signed contract."
    },
    {
      id: 'ar8', difficulty: 'hard',
      scenario: "An AI helps you write grant applications by reading the funder's guidelines, understanding your artistic practice from your portfolio and past statements, and drafting tailored narratives for each grant.",
      answer: 'agent',
      explanation: "Reading funder intent, understanding your practice, and writing a contextually tailored narrative that connects the two — this is multi-document reasoning with a creative output."
    },
    {
      id: 'ar9', difficulty: 'hard',
      scenario: "Your licensing system automatically watermarks images before sending them to clients and removes the watermark only after payment is confirmed by your payment processor.",
      answer: 'automation',
      explanation: "Two states, two actions: unpaid → watermarked, paid → clean file. Even though it involves file manipulation, the logic is a payment condition check."
    },
    {
      id: 'ar10', difficulty: 'hard',
      scenario: "You want AI to manage client relationships and communication for your studio, but different clients get very different treatment and you've never articulated the difference between how you handle collectors versus commercial clients.",
      answer: 'not_ready',
      explanation: "Unarticulated differentiation can't be delegated. Define how you treat different client types before systematizing communication or adding AI to client management."
    },
    {
      id: 'ar11', difficulty: 'hard',
      scenario: "An AI monitors copyright registries and image search tools for unauthorized use of your work online, flags potential infringement, and compiles a report for your review.",
      answer: 'agent',
      explanation: "Identifying 'potential infringement' requires comparing found images against your work and making a judgment about similarity and context — not just returning exact matches."
    },
    {
      id: 'ar12', difficulty: 'hard',
      scenario: "Your studio automatically backs up all project files to cloud storage every night and sends you a confirmation with a file count and total storage used.",
      answer: 'automation',
      explanation: "Scheduled backup, fixed destination, fixed summary format. Even creative files are just files — the backup logic doesn't care what's in them."
    },
    {
      id: 'ar13', difficulty: 'hard',
      scenario: "An AI reads your collected notes, sketches descriptions, and inspiration references and helps you identify conceptual threads that could develop into a new series or body of work.",
      answer: 'agent',
      explanation: "Finding conceptual connections across unstructured creative material and surfacing meaningful threads requires interpretive reasoning about artistic intent — this is a genuine thinking partner role."
    },
    {
      id: 'ar14', difficulty: 'hard',
      scenario: "Your online store automatically applies a 15% discount code for returning customers who haven't purchased in more than 6 months when they log in.",
      answer: 'automation',
      explanation: "Customer login + time-since-last-purchase check + conditional discount application. Rule-based loyalty logic — the discount criteria are fully defined."
    },
    {
      id: 'ar15', difficulty: 'hard',
      scenario: "An AI helps you price commission work by analyzing your time estimates, material costs, comparable market rates, and the specific client relationship — then suggesting a price range and explaining the reasoning.",
      answer: 'agent',
      explanation: "Pricing creative work involves multiple factors that interact differently for each commission, especially the 'client relationship' variable. Synthesizing these into a reasoned price range is judgment-based."
    },
  ],

  // ── CYBERSECURITY ──────────────────────────────────────────────────────────
  cybersecurity: [
    {
      id: 'cy1', difficulty: 'easy',
      scenario: "When your firewall detects a connection attempt from an IP address on your blocklist, it automatically drops the connection and logs the attempt with a timestamp.",
      answer: 'automation',
      explanation: "IP match against a defined list, fixed action of drop and log. No judgment involved. Classic firewall rule automation."
    },
    {
      id: 'cy2', difficulty: 'easy',
      scenario: "Your system automatically forces a password reset for any account that hasn't changed its password in 90 days, per your defined security policy.",
      answer: 'automation',
      explanation: "Date threshold leads to fixed action. The policy is set; the system enforces it consistently for every account. No judgment required."
    },
    {
      id: 'cy3', difficulty: 'easy',
      scenario: "Your security team wants AI to handle incident response decisions, but you don't have a documented incident response plan and the last three incidents were each handled completely differently.",
      answer: 'not_ready',
      explanation: "Inconsistent human handling of incidents means the process isn't defined. Document your incident response plan first, then automation or AI has something to apply."
    },
    {
      id: 'cy4', difficulty: 'easy',
      scenario: "An AI reviews flagged login attempts, considers the user's typical behavior, location, and device history, and decides whether to allow, challenge with MFA, or block the attempt.",
      answer: 'agent',
      explanation: "Weighing multiple contextual signals like behavior, location, and device to make a risk judgment requires reasoning, not a fixed rule. That's adaptive authentication, an agent's job."
    },
    {
      id: 'cy5', difficulty: 'medium',
      scenario: "Your system automatically quarantines any email attachment that matches a known malware hash from your threat intelligence feed.",
      answer: 'automation',
      explanation: "Hash match against a known list leads to fixed action. Even though it's security critical, the logic is deterministic, no interpretation needed."
    },
    {
      id: 'cy6', difficulty: 'medium',
      scenario: "An AI reads incoming phishing reports submitted by employees, determines whether each one is a genuine threat or a false positive, and escalates real threats to the security team with a risk summary.",
      answer: 'agent',
      explanation: "Distinguishing real phishing from false positives requires reading intent and context in the reported email, not just matching known signatures. That's interpretive judgment."
    },
    {
      id: 'cy7', difficulty: 'medium',
      scenario: "Your vulnerability scanner automatically runs every Sunday at midnight against all production servers and emails a report of newly discovered CVEs to the security team.",
      answer: 'automation',
      explanation: "Scheduled trigger, fixed scan, fixed report format. The humans interpret the CVEs, the system just runs the scan and delivers the data."
    },
    {
      id: 'cy8', difficulty: 'medium',
      scenario: "Your company wants AI to set access permission policies, but different department heads have wildly different ideas about who should have access to what, and there's no approved access control policy yet.",
      answer: 'not_ready',
      explanation: "Conflicting, undefined access criteria can't be automated or delegated to AI. Get department heads aligned on an access control policy first."
    },
    {
      id: 'cy9', difficulty: 'medium',
      scenario: "An AI monitors network traffic, correlates patterns across multiple data sources, and determines whether unusual activity represents a likely breach in progress, then decides whether to trigger an automatic lockdown.",
      answer: 'agent',
      explanation: "Correlating multiple data sources and judging likelihood of an active breach requires nuanced reasoning under uncertainty, not a simple threshold check."
    },
    {
      id: 'cy10', difficulty: 'medium',
      scenario: "Your system automatically disables any employee account the moment HR marks them as terminated in the HR system, revoking all access within seconds.",
      answer: 'automation',
      explanation: "Termination event leads to fixed access revocation. The trigger and action are both clearly defined. No judgment, speed and consistency are the whole point here."
    },
    {
      id: 'cy11', difficulty: 'hard',
      scenario: "Your system automatically locks an account after 5 failed login attempts within 10 minutes, and sends a notification to the account owner.",
      answer: 'automation',
      explanation: "Tricky because it feels protective and smart, but the logic is a simple counter and threshold. 5 failures in 10 minutes leads to lock plus notify. No judgment about intent."
    },
    {
      id: 'cy12', difficulty: 'hard',
      scenario: "An AI reviews your codebase for hardcoded secrets, API keys, and credentials before each deployment, explains the risk of each finding in context, and recommends whether the deploy should be blocked.",
      answer: 'agent',
      explanation: "Finding patterns that look like secrets could be regex based, but explaining risk in context and recommending a block or allow decision requires judgment about severity and exploitability, not just pattern matching."
    },
    {
      id: 'cy13', difficulty: 'hard',
      scenario: "Your SOC wants to automate threat hunting, but analysts each use different methodologies, document findings inconsistently, and there's significant disagreement about what counts as a true positive.",
      answer: 'not_ready',
      explanation: "Inconsistent methodology and disputed definitions mean threat hunting isn't standardized yet. Align on what counts as a true positive and document the methodology before adding automation or AI."
    },
    {
      id: 'cy14', difficulty: 'hard',
      scenario: "Your system automatically rotates all database credentials every 30 days, updates them across all connected services, and verifies each service reconnects successfully before considering the rotation complete.",
      answer: 'automation',
      explanation: "Complex multi step sequence, but every step is predetermined: rotate, update, verify, confirm. No judgment calls, just a more elaborate fixed procedure. Sophisticated automation."
    },
    {
      id: 'cy15', difficulty: 'hard',
      scenario: "An AI investigates a security alert by pulling logs from multiple systems, forming a hypothesis about what happened, checking that hypothesis against additional evidence, and writing an incident summary with a recommended remediation.",
      answer: 'agent',
      explanation: "Forming and testing a hypothesis across multiple evidence sources, then synthesizing a reasoned summary, this is investigative reasoning, the core of what makes something agentic rather than automated."
    },
  ],

}
