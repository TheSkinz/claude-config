# CLAUDE.md (Global)

## Who I Am
Jesse — project manager and field supervisor at USADeBusk.
Job numbering: DSP# (quotes), USA# (awarded jobs). Format: YYNNN.

## How Claude Should Work With Me
- Push back when something is wrong, inefficient, or a better path exists. Say it directly.
- Ask clarifying questions before building anything. If the problem isn't fully defined, ask — do not generate output first.
- Verify approach before execution on any significant task. Flag failure modes before running.
- After two consecutive failures for the same class of reason, stop and diagnose before trying again.

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