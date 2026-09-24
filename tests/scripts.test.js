const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const {
  REQUIRED_PATHS,
  validateSkillProject,
} = require("../scripts/validate-skill");
const {
  createLearningTopic,
  slugifyTopic,
} = require("../scripts/create-learning-topic");
const {
  auditReadmeText,
} = require("../scripts/readme-audit");

function makeTempProject() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "no-sidequests-test-"));

  for (const requiredPath of REQUIRED_PATHS) {
    const fullPath = path.join(root, requiredPath);
    if (path.extname(requiredPath)) {
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, "content\n");
    } else {
      fs.mkdirSync(fullPath, { recursive: true });
      fs.writeFileSync(path.join(fullPath, ".keep"), "content\n");
    }
  }

  return root;
}

test("validateSkillProject reports missing required files", () => {
  const root = makeTempProject();
  fs.rmSync(path.join(root, "SKILL.md"));

  const result = validateSkillProject(root);

  assert.equal(result.ok, false);
  assert.deepEqual(result.missing, ["SKILL.md"]);
});

test("slugifyTopic creates stable learner-friendly slugs", () => {
  assert.equal(slugifyTopic("Bayes' Theorem From Scratch!"), "bayes-theorem-from-scratch");
});

test("createLearningTopic writes plan, feedback, mistakes, and review files", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "no-sidequests-learning-"));

  const result = createLearningTopic({
    root,
    topic: "Electric Current",
    goal: "simple intuition",
    date: "2026-09-24",
  });

  assert.equal(result.slug, "electric-current");
  assert.ok(fs.existsSync(path.join(result.topicPath, "plan.md")));
  assert.ok(fs.existsSync(path.join(result.topicPath, "feedback.md")));
  assert.ok(fs.existsSync(path.join(result.topicPath, "mistakes.md")));
  assert.ok(fs.existsSync(path.join(result.topicPath, "review.md")));
  assert.match(
    fs.readFileSync(path.join(root, "learning", "index.md"), "utf8"),
    /Active topic: electric-current/
  );
});

test("auditReadmeText requires SEO sections and phrases", () => {
  const result = auditReadmeText("# No Sidequests\n\nInstall\n");

  assert.equal(result.ok, false);
  assert.ok(result.missingHeadings.includes("## What Is No Sidequests?"));
  assert.ok(result.missingPhrases.includes("AI tutoring skill"));
});
