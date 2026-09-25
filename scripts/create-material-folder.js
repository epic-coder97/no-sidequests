#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { slugifyTopic } = require("./create-learning-topic");

function createMaterialFolder({ root = process.cwd(), name }) {
  if (!name || !name.trim()) {
    throw new Error("Material folder name is required.");
  }

  const slug = slugifyTopic(name);
  const materialPath = path.join(root, "learning-materials", slug);

  fs.mkdirSync(materialPath, { recursive: true });

  const files = {
    "README.md": `# ${name}

Put source material for this topic here.

Suggested files:

- \`source.md\` for the main chapter, notes, transcript, or copied text.
- \`notes.md\` for teacher notes, your own notes, or important context.
- \`questions.md\` for exam questions, homework, or practice prompts.

Ask:

\`\`\`text
Use No Sidequests to teach me from learning-materials/${slug}/
\`\`\`
`,
    "source.md": `# Source

Paste the main material here, or replace this file with the source text.
`,
    "notes.md": `# Notes

Add teacher notes, syllabus points, links, or your own reminders here.
`,
    "questions.md": `# Questions

Add exam questions, homework prompts, or practice questions here.
`,
  };

  for (const [fileName, content] of Object.entries(files)) {
    const filePath = path.join(materialPath, fileName);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
    }
  }

  return {
    slug,
    materialPath,
  };
}

function main() {
  const [, , name] = process.argv;
  const result = createMaterialFolder({ name });
  console.log(`Created material folder: ${result.materialPath}`);
}

if (require.main === module) {
  main();
}

module.exports = {
  createMaterialFolder,
};
