# Demo Script — SAP Business Network × Aera

**Audience:** Mixed (SBN stakeholders + Aera team)
**Duration:** ~7 minutes
**Start:** Open `prototype/SBN_home.html` in browser

---

## Opening (30 sec)

> "Today I want to show you what SAP Business Network looks like with Aera's AI agents embedded — not as a separate tool, but woven into the daily workflow. Two personas, two minutes each."

---

## Story 1 — Maria Chen, Supply Chain Manager (3 min)

**Screen: SBN Home**

> "Maria starts her day on the SBN home screen. The Inbox card already shows something unusual — a forecast commit gap from Volterra. She clicks it directly."

ACTION: Click "Forecast commit gap" row in the Inbox card → exception_detail.html?exc=1

> "This is the exception detail. The AI recommendation is already drafted — a shortage resolution request to Volterra, with all the supply context attached. Maria reviews it, hits Accept."

ACTION: Click Accept button

> "But here's where it gets interesting. Aera doesn't just resolve the exception — it sees a pattern. Volterra's shortfall isn't isolated. It flags a broader reliability risk and hands off to Category Management."

ACTION: Click "View Supplier Reliability Intelligence" in the purple escalation banner

---

## Story 2 — Marcus Reid, Category Manager (3 min)

**Screen: Supplier Reliability Intelligence**

> "Now we're in Marcus's world. Aera's SRI agent has already done the analysis — OTIF dropped from 92 to 81%, Robotech and Volterra together represent 67% of APAC Electronics spend, $31.2M at risk."

ACTION: Point to the score bars and spend concentration chart

> "Marcus looks at the Impacts tab to understand the business exposure."

ACTION: Click Impacts tab

> "The recommendation is clear — renegotiate now. He accepts."

ACTION: Click "Accept & Proceed to Intelligent Sourcing"

---

**Screen: Sourcing Detail — Volterra Renegotiation**

> "Aera hands off to the Intelligent Sourcing agent. The case is already built: copper prices down 14%, contract renewal in 33 days, confidence 95%."

ACTION: Point to the meta row — confidence, saving, optimal timing badge

> "Marcus checks the Signal tab — this is the 'why now'. Copper at an 18-month low, contract expiry coming, OTIF shortfall on record."

ACTION: Click Signal tab

> "Then the Recommendation Breakdown — Aera has modeled four pricing scenarios. Scenario B is recommended: 7–9% reduction, 2-year term, $180–210K saving."

ACTION: Click Recommendation Breakdown tab → point to the highlighted Scenario B row

> "Marcus wants help with the opening position. He asks Joule."

ACTION: Click Joule button → click "Key Leverage Points" chip

> "Joule surfaces the three leverage angles — market signal, performance data, contract timing. Marcus closes the panel."

ACTION: Close Joule panel

> "He's ready. He clicks Send Renegotiation Email."

ACTION: Click Send Renegotiation Email → review the pre-drafted email → click Send Email

> "Done. Aera will monitor for Volterra's response and surface counter-offer analysis."

---

## Close (30 sec)

> "What you just saw: one inbox, three AI agents — Exception Management, Supplier Reliability Intelligence, and Intelligent Sourcing — working in sequence. Maria resolved a supply exception in two clicks. Marcus turned that exception into a $180K savings opportunity. That's the SBN × Aera partnership."

---

## Presenter Notes

- Don't rush the escalation banner moment — it's the narrative hinge between the two stories
- The Joule panel is the most "wow" moment for technical audiences; linger there
- If anyone asks about the other exception rows (exc=2 ASN, exc=3 OC deviations), they are also clickable from the inbox — good for Q&A
- Alternative entry point: click "View All" from Home to show the full unified inbox first, then drill in
