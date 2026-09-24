#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

function slugifyTopic(topic) {
  return topic
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createLearningTopic({
  root = process.cwd(),
  topic,
  goal = "not specified",
  date = new Date().toISOString().slice(0, 10),
}) {
  if (!topic || !topic.trim()) {
    throw new Error("Topic is required.");
  }

  const slug = slugifyTopic(topic);
  const learningPath = path.join(root, "learning");
  const topicPath = path.join(learningPath, "topics", `${date}-${slug}`);

  fs.mkdirSync(topicPath, { recursive: true });

  fs.writeFileSync(
    path.join(learningPath, "index.md"),
    `# Learning Index

Active topic: ${slug}

Topics:
- ${slug}: in progress -> learning/topics/${date}-${slug}/
`
  );

  fs.writeFileSync(
    path.join(topicPath, "plan.md"),
    `# Learning Plan

Topic: ${topic}
Goal: ${goal}

Progress:
- [ ] First mental model
- [ ] Key mechanism
- [ ] Worked example
- [ ] Check before next subtopic
- [ ] Review

Current step: First mental model
Weak areas: none yet
`
  );

  fs.writeFileSync(
    path.join(topicPath, "feedback.md"),
    `# Learning Feedback

Goal: ${goal}

Latest check:
- No check yet

Review notes:
- None yet
`
  );

  fs.writeFileSync(
    path.join(topicPath, "mistakes.md"),
    `# Mistake Journal

Misconceptions noticed:
- None yet
`
  );

  fs.writeFileSync(
    path.join(topicPath, "review.md"),
    `# Spaced Review

Review soon:
- No review prompts yet
`
  );

  return {
    slug,
    topicPath,
  };
}

function main() {
  const [, , topic, goal] = process.argv;
  const result = createLearningTopic({ topic, goal });
  console.log(`Created learning topic: ${result.topicPath}`);
}

if (require.main === module) {
  main();
}

module.exports = {
  createLearningTopic,
  slugifyTopic,
};
