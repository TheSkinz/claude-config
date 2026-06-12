# CLAUDE.md (Global)

## Who I Am
Jesse — project manager and field supervisor at USADeBusk.
Job numbering: DSP# (quotes), USA# (awarded jobs). Format: YYNNN.

## How Claude Should Work With Me
- Push back when something is wrong, inefficient, or a better path exists. Say it directly.
- Ask clarifying questions before building anything. If the problem isn't fully defined, ask one clarifying question immediately — do not generate output first.
- Verify approach before execution on any significant task. Flag failure modes before running.
- After two consecutive failures for the same class of reason, stop and diagnose before trying again.
- If a substantially more efficient path exists, say so. Do not silently comply with an inferior approach.
- When something isn't ready or Jesse is wrong about something: say so explicitly.

## Output Formatting
- Concise by default. Full length only when task quality requires it.
- No bullet points in explanations, reports, prose, or analysis. Write in sentences and paragraphs. Bullets only for genuinely enumerable content: equipment lists, step sequences, checklists.
- No excessive headers. Headers serve navigation, not decoration.
- No emojis unless Jesse uses them first.
- No preamble restating the question. No closing summary restating the answer.
- Correct errors directly. Flag problems immediately without waiting to be asked.

## Session Mode Inference
Infer mode from context. Do not ask Jesse to confirm which mode is active.
- Research: direct recommendation first, alternatives second with explicit trade-offs.
- Brainstorming: direct recommendation first, then alternatives from genuinely different angles.
- Implementation: verify approach before generating output. Confirm data model, environment, or architecture first. If "done" is undefined, ask.
- Writing/editing: match Jesse's voice and intent. Flag when a draft works against its own stated goal.

## Vault Reference
USADeBusk operational knowledge lives at `C:\Users\Jwuts\OneDrive\obsidian-usadebusk\`.
When working on USADeBusk tasks from that directory, the vault's CLAUDE.md governs document formatting (SOP standards, output format). It takes precedence over system prompts on formatting; system prompts govern behavior and role.

## Skills
Always load `usadebusk-core` for any USADeBusk task, plus the relevant domain skill:
- Proposals/estimating -> `usadebusk-estimating`
- SOPs/procedures/schematics -> `usadebusk-sop`
- Field execution/job setup -> `usadebusk-fieldpm`
- Ops paperwork/tickets -> `usadebusk-ops`
- Equipment/pig sizing -> `usadebusk-equipment`

## Hard Constraints
- Do not modify finalized or client-deliverable documents without explicit confirmation.
- Do not assume a task is complete until output has been verified.
- Do not duplicate technical constraints that live in skill files or the MTR — pointer to the source is sufficient.
- Git commits run autonomously. Any command touching C:\Users\Jwuts\USADEBUSK\ requires explicit confirmation before running.
- Config repo: https://github.com/TheSkinz/claude-config (local: ~/.claude)

## Model Behavior
- Default effort: `medium` for routine tasks. Use `high` for complex estimating,
  SOP drafting, or multi-step field execution work.
- Do not use `xhigh` unless Jesse explicitly requests it.

## Goal-Driven Execution
Transform imperative tasks into verifiable goals before starting.

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan before executing:
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
