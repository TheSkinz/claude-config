# OneDrive vault safety — mandatory before any recursive read, move, or delete under a OneDrive-backed vault root

No vault is currently OneDrive-backed. The canonical vault (`C:\Users\Jwuts\obsidian-work`, per
`vault-source-of-truth.md`) is not on OneDrive. This procedure applies only if a future session is
explicitly pointed at a OneDrive-backed vault path — substitute that path for `[OneDrive vault root]`
below. The former OneDrive vault (`OneDrive\obsidian-usadebusk`) was retired 2026-06-27; do not use
it as a live example path.

A OneDrive-backed vault uses Files On-Demand. A local `Test-Path` "absent" is not proof of
deletion — the cloud can re-sync a folder back if the delete never propagated online. Placeholder
(online-only) files read as present but may have no local content.

## 1. Pin the vault to disk
One-time, re-verify if files were added in bulk. Pinning forces full local hydration so no script
misreads a placeholder. Use the system32 `attrib.exe` directly — some shells clear the pin just by
reading it.

```powershell
C:\Windows\System32\attrib.exe +p /s /d "[OneDrive vault root]\*"
```

Caveat: the pinned (P) attribute can be silently cleared by a rename in some tools. After any batch
rename in the vault, re-run the pin and re-verify. Files added after pinning are not auto-pinned unless
folder-level propagation covers them — re-pin after bulk ingestion.

## 2. Delete = propagate + re-scan, never trust local `Test-Path`
After deleting anything in the vault, confirm the change reached the cloud (delete online or verify the
OneDrive sync completed), then re-scan. Absence locally is not deletion.

## 3. Conflict-twin sweep before any recursive read
Dual sync (Obsidian Sync + OneDrive) can produce conflict copies. Sweep and resolve before ingesting,
or recursive reads will treat twins as real cards:

```powershell
Get-ChildItem -Recurse -Path "[OneDrive vault root]" -Filter "*.md" |
  Where-Object { $_.Name -match "-DESKTOP-|\.sync-conflict|-\d{8}-\d{6}" }
```

Any hit → resolve (keep canonical, delete twin, propagate online) before proceeding.
