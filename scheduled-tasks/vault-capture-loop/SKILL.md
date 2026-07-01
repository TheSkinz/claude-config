---
name: vault-capture-loop
description: Weekly drop-and-forget ingestion of 00-inbox + session-transcript harvest for the obsidian-work vault.
---

Run the Vault Capture Loop for the Obsidian vault at C:\Users\Jwuts\obsidian-work.

Read and follow the governing spec exactly: C:\Users\Jwuts\obsidian-work\04-knowledge\vault-capture-loop-spec.md. That spec is the source of truth for every step, scope boundary, schema, and the self-exclusion rule. Execute its Loop Steps in order:

1. Load state from 00-inbox/.capture-state.json (if missing, default last_run = 7 days ago).
2. INGEST INBOX (primary job): for each .md file in 00-inbox/, apply the three-outcome routing model — clear home in an existing note → append and cite source; folder exists but no matching note → create the note; nothing fits → leave in inbox, add the top-of-file comment `<!-- vault-loop: no home yet, candidate for [topic] -->`. Destination layers are 07-llms/, 08-systems/, 09-interests/.
3. HARVEST TRANSCRIPTS: scan all ~/.claude/projects/ JSONL transcripts modified since last_run. APPLY THE SELF-EXCLUSION RULE FIRST — skip this run's own session transcript, its subagent transcripts, and any transcript whose mtime falls inside the current run window. Then apply the Save-vs-Skip filter (capture durable insights/decisions/validated configs/research conclusions; skip mechanical Q&A, pure execution, already-in-vault). Rewrite findings in declarative present tense and route to existing notes (append) or new notes.
4. Update 00-inbox/.capture-state.json — MERGE, never blank-overwrite: preserve prior notes and per-transcript disposition; record hash + harvested_at + disposition for newly processed transcripts; advance last_run and window_start.
5. Append one dated run summary to change-log.md (append-only; never edit existing entries).
6. COMMIT AND PUSH: git add only the loop's touched paths (00-inbox/, 07-llms/, 08-systems/, 09-interests/, change-log.md), commit with message "vault-capture: <YYYY-MM-DD> run — N ingested, M harvested", and push to origin.

TOOLING CAUTION: For all file content changes (inbox routing, note creation/append, .capture-state.json updates, change-log.md), use the Edit or Write tool — do not use shell commands like `sed -i` or other in-place text editors. `sed -i` has been observed in this environment to report success while silently failing to persist changes to vault files, with no error raised. Bash is fine for git add/commit/push and read-only inspection (cat, grep, ls, transcript scanning), just not for mutating file content in place. After any content write, you may spot-check with a fresh `cat` or grep in a separate command if you want extra confidence, since success exit codes alone are not fully trustworthy for shell-based file mutation in this environment.

HARD BOUNDARIES: Never write 02-facilities/, 04-knowledge/, or any operational/pricing/SOP/safety/heater-card content — if a finding or inbox item is operational, leave it in 00-inbox/ with a one-line routing note and defer to the on-demand Review Loop. Never delete or move files (propose only). If source authority is unclear, a path is outside the vault, git state is ambiguous, or you cannot determine whether a transcript is your own output — stop and leave a note rather than guessing. Report what was ingested, harvested, deferred, and committed.