import { readFileSync } from 'fs';

let input;
try {
  input = JSON.parse(readFileSync(0, 'utf8')); // fd 0 = stdin, works cross-platform
} catch (e) {
  // If we can't parse input, fail open (allow) rather than block legitimate work
  process.exit(0);
}

const cmd = input?.tool_input?.command || '';

// Match the USADEBUSK directory regardless of slash direction or case
const targetPath = /USADEBUSK[\\/]/i;

// Only gate commands that look like git mutations, not every touch of the path
const gitMutationPattern = /\bgit\s+(add|commit|push|pull|merge|rebase|reset|checkout|branch\s+-[dD]|stash|rm)\b/i;

if (targetPath.test(cmd) && gitMutationPattern.test(cmd)) {
  process.stderr.write(
    'BLOCKED: This command targets the USADEBUSK directory and performs a git mutation.\n' +
    'Per CLAUDE.md Hard Constraints, this requires explicit confirmation from Jesse before running.\n' +
    'Command: ' + cmd + '\n'
  );
  process.exit(2);
}

process.exit(0);
