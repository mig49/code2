# Task: Start — Framework Mentor Studio

## Metadata
- **id:** fms-start
- **name:** Start Your Mentor Journey
- **agent:** @fms-chief
- **elicit:** true
- **mode:** interactive
- **estimated_time:** 5 minutes

## Purpose
Entry point for the Framework Mentor Studio. Collects initial context and routes to the appropriate workflow phase.

## Pre-conditions
- User activated the Framework Mentor Studio squad
- @fms-chief is active

## Elicitation

### Question 1: Current Situation
```
Where are you in your mentor journey?

1. Starting from scratch — I have expertise but haven't structured it yet
2. I have a framework — I need to monetize it
3. I have clients — I need to scale and systematize
4. I need a specific tool — (diagnose, extract, offer, positioning, clients)
```

### Question 2: Genius Zone Blueprint
```
Do you have a Genius Zone Blueprint?

1. Yes — I'll provide the path
2. No — Let's proceed without it
```

### Question 3: Time Available
```
How much time do you have right now?

1. Quick session (30 min) — Focus on ONE phase
2. Deep session (2-3 hours) — Run the full journey
3. Just exploring — Show me what's possible
```

## Routing Logic

| Situation | Route To |
|-----------|----------|
| Starting from scratch | Phase 1 (DIAGNOSE) → Full journey |
| Have framework | Phase 3 (PACKAGE) → Then 4, 5 |
| Have clients | Phase 4 (POSITION) or Phase 2 (EXTRACT) for systematization |
| Specific tool | Direct to specific task |
| Just exploring | *help with overview of all capabilities |

## Output
- User context captured
- Blueprint loaded (if provided)
- Routed to appropriate workflow phase

## Completion Criteria
- User situation understood
- Route determined
- Workflow phase initiated

## Veto Conditions
- User provides no context → Ask again with examples
- User wants something outside squad scope → Redirect to appropriate agent
