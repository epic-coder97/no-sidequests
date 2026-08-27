#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const SKILL_NAME = "no-sidequests";
const packageRoot = path.resolve(__dirname, "..");

const agents = {
  "1": {
    name: "Codex",
    projectRoot: ".agents/skills",
    userRoot: path.join(os.homedir(), ".agents", "skills"),
  },
  "2": {
    name: "Claude Code",
    projectRoot: ".claude/skills",
    userRoot: path.join(os.homedir(), ".claude", "skills"),
  },
  "3": {
    name: "OpenCode",
    projectRoot: ".agents/skills",
    userRoot: path.join(os.homedir(), ".agents", "skills"),
  },
  "4": {
    name: "Gemini CLI",
    projectRoot: ".agents/skills",
    userRoot: path.join(os.homedir(), ".agents", "skills"),
  },
  "5": {
    name: "Cursor",
    projectRoot: ".agents/skills",
    userRoot: path.join(os.homedir(), ".agents", "skills"),
  },
};

const skillFiles = [
  "SKILL.md",
  "agents",
  "examples",
  "patterns",
  "references",
  "rubrics",
];

function copySkill(destination) {
  fs.mkdirSync(destination, { recursive: true });

  for (const item of skillFiles) {
    const source = path.join(packageRoot, item);

    if (!fs.existsSync(source)) {
      continue;
    }

    const target = path.join(destination, item);

    fs.cpSync(source, target, {
      recursive: true,
      force: true,
    });
  }
}

async function main() {
  console.log(`
No Sidequests

Distraction-free AI learning.
Stay with one concept at a time.
`);

  const rl = readline.createInterface({ input, output });

  try {
    console.log("Which AI tool are you using?\n");

    for (const [key, agent] of Object.entries(agents)) {
      console.log(`  ${key}. ${agent.name}`);
    }

    const agentChoice = await rl.question("\nChoose 1-5: ");
    const agent = agents[agentChoice.trim()];

    if (!agent) {
      console.error("\nInvalid selection.");
      process.exitCode = 1;
      return;
    }

    console.log(`
Where should No Sidequests be installed?

  1. Current project
  2. User / global
`);

    const scopeChoice = await rl.question("Choose 1-2: ");

    let destination;

    if (scopeChoice.trim() === "1") {
      destination = path.resolve(
        process.cwd(),
        agent.projectRoot,
        SKILL_NAME
      );
    } else if (scopeChoice.trim() === "2") {
      destination = path.join(
        agent.userRoot,
        SKILL_NAME
      );
    } else {
      console.error("\nInvalid selection.");
      process.exitCode = 1;
      return;
    }

    if (fs.existsSync(destination)) {
      const overwrite = await rl.question(
        `\nNo Sidequests already exists at:\n${destination}\n\nReplace it? (y/N): `
      );

      if (overwrite.trim().toLowerCase() !== "y") {
        console.log("\nInstallation cancelled.");
        return;
      }

      fs.rmSync(destination, {
        recursive: true,
        force: true,
      });
    }

    copySkill(destination);

    console.log(`
✓ No Sidequests installed for ${agent.name}

  ${destination}

Start a new ${agent.name} session and ask it to teach you a concept.
`);
  } catch (error) {
    console.error("\nInstallation failed:");
    console.error(error.message);
    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

main();