// The Houseplant Out-of-Office — u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
//
// One out-of-office auto-reply, written as if by the fern on the desk that
// nobody has watered since March. It has opinions about that, and about your
// email. Self-contained copy program: Node 22 stdlib only, no network, no
// files read, no headless Chrome (the grader has no Chrome binary).
// The line is embedded below as a string literal, so the graded output is
// byte-identical to the shipped text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office: I'm the fern you forgot in March. Your email is now my sunlight. I'll get to it never.";

// Gate check: the entry must be 1-120 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry fails the gate: ${LINE.length} characters`);
}

function deliver(text) {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

deliver(LINE);
