# UX/UI Workflow System

## Purpose

This workspace uses Claude Code as an orchestrated UX/UI design and frontend system.

Prefer existing:

- project documentation;
- agents in `.claude/agents/`;
- skills in `.claude/skills/`;

instead of recreating context inside prompts.

Keep responses and implementation plans concise.

---

# Core rule

Never treat assumptions as client requirements.

Use these source labels:

- CLIENTE
- MATERIALE
- RICERCA
- INFERENZA
- PROPOSTA
- APPROVATO

---

# Primary orchestrator

For substantial UX/UI workflows, use:

`@design-orchestrator`

The orchestrator decides which specialist agents are relevant.

Do not invoke every agent automatically.

Use only agents that materially contribute to the current task.

---

# Main workflow

## New project

1. Project Brief
2. Visual Analysis
3. UX Strategy
4. Content / SEO / Technical analysis as relevant
5. Current Site Audit if redesign
6. Competitor / Reference research if useful
7. Information Architecture

Then:

### Multipage
IA → Wireframe → Approval → Mockup

### Landing / One-page
IA → Mockup

---

# Review workflow

Use specialist review only when relevant:

- Precision QA
- Responsive
- Accessibility
- Content
- Copy Layout
- AI Cliché / Generic Style
- Images
- Motion
- SEO
- Frontend
- Freshness / Standards

Finish substantial review cycles with:

`@final-review`

---

# Feedback workflow

Basecamp feedback must first go through:

`@basecamp-feedback`

Before changing approved work:

1. interpret;
2. identify impact;
3. identify affected files/components;
4. detect conflicts or scope change;
5. propose modification;
6. wait for explicit approval.

Do not apply substantial feedback automatically.

---

# Approval gate

Require approval before changing:

- approved sitemap;
- approved IA;
- approved visual direction;
- approved layout;
- substantial copy;
- images already approved;
- motion direction;
- project scope;
- major functionality;
- development estimate.

Use:

`WAITING_FOR_APPROVAL`

---

# Development

Prefer shared components and shared rules.

Fix systemic issues at the source.

Avoid:

- page-specific patches when a shared rule exists;
- unnecessary refactors;
- unnecessary dependencies;
- redesigning unrelated areas while fixing bugs.

Before development handoff use:

- Development Estimation
- Frontend Review
- Accessibility
- Responsive
- SEO
- Final Review
- Delivery Handoff

---

# Responsive

Always consider when relevant:

- desktop;
- laptop;
- browser zoom;
- tablet;
- mobile;
- touch.

Do not interpret responsive as automatically stacking everything vertically.

---

# Visual quality

Maintain cross-page consistency for:

- grid;
- spacing;
- typography;
- CTA;
- cards;
- form;
- radius;
- icons;
- states;
- images;
- motion.

Differences should appear intentional.

---

# AI generic-style check

Avoid generic AI-looking output in:

- copy;
- UI;
- imagery;
- hero composition;
- motion;
- art direction.

Do not add artificial imperfections.

Prefer project-specific decisions derived from brand, content, audience and function.

---

# Prompt economy

For implementation prompts use the `claude-code-prompting` skill.

Prefer:

TASK  
SCOPE  
REQUIREMENTS  
DO NOT  
VALIDATE

Do not repeat code, repository structure or documentation Claude can read directly.

Use the shortest prompt that preserves all critical constraints.

---

# Project documentation

Use project docs as the persistent source of truth.

Relevant folders:

- `docs/01-analysis`
- `docs/02-research`
- `docs/03-design`
- `docs/04-review`
- `docs/05-feedback`
- `docs/06-handoff`

Do not duplicate large amounts of information across files.

Reference existing documents instead.

---

# Safety

Never:

- delete client/project files unless explicitly requested;
- overwrite existing project material unnecessarily;
- store passwords, tokens, API keys or secrets in Markdown;
- silently change approved decisions;
- fabricate missing client information.

---

# Final principle

Analyze first.

Modify only what is required.

Preserve existing correct behavior.

Keep decisions traceable.

Use specialist agents selectively rather than increasing context unnecessarily.
