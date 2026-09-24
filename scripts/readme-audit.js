#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const REQUIRED_HEADINGS = [
  "## What Is No Sidequests?",
  "## Who It Helps",
  "## How No Sidequests Teaches",
  "## Key Features",
  "## FAQ",
];

const REQUIRED_PHRASES = [
  "AI tutoring skill",
  "AI learning assistant",
  "active recall",
  "progressive disclosure",
  "spaced review",
  "Codex",
  "Claude Code",
  "Gemini CLI",
];

function auditReadmeText(text) {
  const missingHeadings = REQUIRED_HEADINGS.filter((heading) => {
    return !text.includes(heading);
  });
  const lowerText = text.toLowerCase();
  const missingPhrases = REQUIRED_PHRASES.filter((phrase) => {
    return !lowerText.includes(phrase.toLowerCase());
  });

  return {
    ok: missingHeadings.length === 0 && missingPhrases.length === 0,
    missingHeadings,
    missingPhrases,
  };
}

function main() {
  const readmePath = path.join(process.cwd(), "README.md");
  const result = auditReadmeText(fs.readFileSync(readmePath, "utf8"));

  if (!result.ok) {
    if (result.missingHeadings.length) {
      console.error("Missing SEO headings:");
      for (const heading of result.missingHeadings) {
        console.error(`- ${heading}`);
      }
    }

    if (result.missingPhrases.length) {
      console.error("Missing SEO phrases:");
      for (const phrase of result.missingPhrases) {
        console.error(`- ${phrase}`);
      }
    }

    process.exitCode = 1;
    return;
  }

  console.log("README SEO audit passed.");
}

if (require.main === module) {
  main();
}

module.exports = {
  auditReadmeText,
};
