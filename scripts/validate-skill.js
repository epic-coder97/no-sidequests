#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const REQUIRED_PATHS = [
  "SKILL.md",
  "README.md",
  "LICENSE",
  "package.json",
  "bin/no-sidequests.js",
  "agents",
  "examples",
  "learning-materials",
  "patterns",
  "references",
  "rubrics",
  "workflows",
];

function validateSkillProject(root = process.cwd()) {
  const missing = REQUIRED_PATHS.filter((requiredPath) => {
    return !fs.existsSync(path.join(root, requiredPath));
  });

  return {
    ok: missing.length === 0,
    missing,
  };
}

function main() {
  const result = validateSkillProject();

  if (!result.ok) {
    console.error("Missing required paths:");
    for (const missingPath of result.missing) {
      console.error(`- ${missingPath}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("Skill project structure is valid.");
}

if (require.main === module) {
  main();
}

module.exports = {
  REQUIRED_PATHS,
  validateSkillProject,
};
