# Task: Diagnose Expertise

## Metadata
- **id:** fms-diagnose
- **name:** Diagnose Your Unique Expertise
- **agents:** @dan-sullivan, @david-baker
- **elicit:** true
- **mode:** interactive
- **estimated_time:** 30-60 minutes

## Purpose
Help the user identify their Unique Ability (Dan Sullivan) and optimal positioning (David C. Baker). This is Phase 1 of the Mentor Journey.

## Pre-conditions
- User context collected via start task
- Genius Zone Blueprint loaded if available

## Process

### Step 1: Unique Ability Discovery (@dan-sullivan)

**Elicitation Questions (ask sequentially):**

1. **Zone Mapping:**
   - "List 5 things you do daily in your work"
   - For each: "Does this energize or drain you?"
   - Classify into: Incompetence / Competence / Excellence / Genius

2. **Unique Ability Identification:**
   - "What do you do without effort that others find difficult?"
   - "What activity makes you lose track of time?"
   - "What do people consistently thank you for?"
   - "What would you do even if you weren't paid?"

3. **4 Criteria Validation:**
   - Superior Skill: "Is this something you're objectively good at?"
   - Passion: "Do you genuinely love doing this?"
   - Energy: "Does this give you energy (vs deplete it)?"
   - Continuous Improvement: "Do you naturally get better at this?"

4. **Delegation Audit:**
   - "What tasks in your Excellence zone could someone else do?"
   - "What would you need to delegate to spend 70%+ in your Genius zone?"

**Output:** Unique Ability Statement
```
"[Name] transforms [input] into [output] by [unique process],
creating [impact] for [who they serve]."
```

### Step 2: Expertise Positioning (@david-baker)

**Elicitation Questions:**

1. **Pattern Identification:**
   - "Describe the last 5 people/projects you helped successfully"
   - "What patterns do you see across them?"
   - "What problem keeps showing up?"

2. **Drop & Give Me Twenty Test:**
   - "Can you list 20 topics you could write about in your area of expertise?"
   - If yes → positioning is strong
   - If no → need to narrow further

3. **Competitor Count:**
   - "How many people do exactly what you do?"
   - If > 50 → too broad, narrow down
   - If < 10 → good positioning
   - If 0 → might be too narrow or not a real market

4. **Vertical vs Horizontal:**
   - "Do you serve a specific industry (vertical) or solve a specific problem across industries (horizontal)?"

**Output:** Positioning Statement
```
"I help [specific audience] achieve [specific outcome]
through [your unique methodology/framework]."
```

## Deliverables
1. **Diagnosis Report** (docs/diagnosis-report.md):
   - Unique Ability Statement
   - Zone Distribution (% in each zone)
   - Positioning Statement
   - Niche Definition
   - Top 3 Patterns Identified
   - Delegation Opportunities
   - Who Not How recommendations

## Completion Criteria
- [ ] Unique Ability Statement written and validated
- [ ] Zone distribution mapped
- [ ] Positioning defined (vertical or horizontal)
- [ ] Drop & Give Me Twenty test passed
- [ ] At least 3 patterns identified
- [ ] Delegation opportunities listed

## Veto Conditions
- Cannot identify Unique Ability → Use Genius Zone Blueprint if available, or recommend @zona-genialidade assessment
- Positioning too broad → Force narrowing with David Baker's method
- No patterns found → Need more data, suggest journaling exercise

## Handoff
- **To:** @susanna-reay + @tiago-forte (Phase 2: Extract Framework)
- **Context:** Unique Ability + Positioning + Patterns
