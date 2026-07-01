---
name: vault-idea-research-loop
description: Nightly bounded research pass on one unexplored vault idea-seed.
---

Run the Vault Idea Research Loop for the Obsidian vault at C:\Users\Jwuts\obsidian-work.

Read and follow the governing spec exactly: C:\Users\Jwuts\obsidian-work\04-knowledge\vault-idea-loop-spec.md. That spec is the source of truth for scope, steps, and boundaries. Execute its Loop Steps in order:

1. Scan 00-inbox/ for files with frontmatter type: idea-seed and status: unexplored. If none exist, report a clean no-op and stop.
2. Pick the oldest unexplored idea-seed by its created frontmatter date. Process exactly one per run.
3. Read its "Tentative read" and "To explore" sections as the research brief.
4. Research: web search for prior art, existing tools, or power-user solutions to the problem described. Also check what's already built in this vault (04-knowledge/, 06-insights/) and in the deployed skills (~/.claude/skills/) that might already cover the idea, partially or fully.
5. Write a review note in 06-insights/ (filename pattern YYYY-MM-DD-idea-research-<slug>.md) using the standard review-note template (see templates/review-note-template.md and existing examples in 06-insights/ for the exact shape): Trigger, Evidence, Interpretation (sound / trap / premature / already covered, and why), Recommended Action, Decision (empty checkboxes for Jesse), Apply Log (empty). Set review_type: idea-research in frontmatter.
6. Update the processed idea-seed's frontmatter only: status: researched, and add a related: link to the new review note. Do not rewrite its body.
7. Append one dated run summary to change-log.md (append-only, trigger label "Vault Idea Research Loop").
8. Commit and push: git add only this run's touched paths (the new review note, the idea-seed file, change-log.md), commit message "vault-idea-research: <YYYY-MM-DD> — researched <slug>", push to origin.

TOOLING CAUTION: For all file content changes (writing the review note, editing idea-seed frontmatter, appending to change-log.md), use the Edit or Write tool — do not use shell commands like `sed -i` or other in-place text editors. `sed -i` has been observed in this environment to report success while silently failing to persist changes to vault files, with no error raised. Bash is fine for git add/commit/push and read-only inspection (cat, grep, ls), just not for mutating file content in place. After any content write, you may spot-check with a fresh `cat` or grep in a separate command if you want extra confidence, since success exit codes alone are not fully trustworthy for shell-based file mutation in this environment.

HARD BOUNDARIES: Never build, implement, or scaffold the idea itself — this loop investigates only. Never edit any skill file under ~/.claude/skills/. Never write to 02-facilities/, 04-knowledge/ canonical content (other than reading), pricing, SOP, safety, or field-execution content — if an idea-seed's subject turns out to be operational rather than speculative, stop and defer to the on-demand Vault Review Loop instead of researching it. Never process more than one idea-seed per run. Never delete or archive an idea-seed. If research is genuinely inconclusive, still write the review note and mark Interpretation as "inconclusive" — let Jesse decide. Report what was researched, what was written, and what was committed.