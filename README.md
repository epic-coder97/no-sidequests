# No Sidequests: An AI Tutoring Skill for Focused Learning

[![npm version](https://img.shields.io/npm/v/no-sidequests.svg)](https://www.npmjs.com/package/no-sidequests)
[![npm downloads](https://img.shields.io/npm/dm/no-sidequests.svg)](https://www.npmjs.com/package/no-sidequests)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent%20Skill-compatible-brightgreen.svg)](https://agentskills.io/)
[![skills.sh](https://skills.sh/b/epic-coder97/no-sidequests)](https://skills.sh/epic-coder97/no-sidequests)

**No Sidequests** turns your AI coding assistant into a focused tutor that teaches one concept at a time.

It is an open-source **AI tutoring skill** for focused learning, programming and technical learning, difficult concepts, active recall, exam preparation, technical interview preparation, and distraction-free learning with AI.

Install with Agent Skills:

```bash
npx skills add epic-coder97/no-sidequests
```

No Sidequests keeps the AI learning assistant calm: less information dumping, better examples, progressive disclosure, misconception repair, confidence-aware feedback, and spaced review.

```text
goal -> light calibration -> teach one idea -> pause -> check before next step -> adapt -> review
```

GitHub: https://github.com/epic-coder97/no-sidequests  
npm: https://www.npmjs.com/package/no-sidequests

## What Is No Sidequests?

No Sidequests is an Agent Skill for AI tools such as Codex, Claude Code, OpenCode, Gemini CLI, and Cursor.

It does not teach a specific subject. Instead, it changes **how the AI teaches any subject**.

The skill asks the AI to:

- explain one meaningful idea at a time,
- avoid unnecessary side topics,
- use small diagrams when structure matters,
- map analogies carefully,
- ask checks before moving to the next subtopic,
- adapt to mistakes and low confidence,
- track weak areas during longer learning sessions.

The result is a focused AI tutor that helps a student build understanding instead of just reading more information.

## Who It Helps

No Sidequests is useful for:

- students learning a difficult topic from scratch,
- self-learners using AI as a tutor,
- developers learning programming concepts,
- exam or interview candidates,
- teachers who want cleaner AI explanations,
- AI tool users who dislike long, overloaded answers.

It is especially helpful when the learner says:

```text
I understand the words, but the idea is not clicking.
```

## Why AI Tutors Overwhelm Students

AI can explain almost anything, but more information is not always more learning.

A student may ask one question and receive definitions, related concepts, exceptions, examples, terminology, next steps, and a summary.

That can be correct and still be hard to learn from.

No Sidequests tells the AI to optimize for **comprehension before coverage**.

## How No Sidequests Teaches

No Sidequests uses learning methods from instructional design, cognitive psychology, and expert teaching practice.

### Lightweight learner calibration

The AI does not ask a long intake form.

It asks only what is needed:

```text
What is the goal?
1. Simple intuition
2. Exam or interview prep
3. Use it in a project
4. Fix confusion
5. Go deeper
```

If the student already gave enough context, the AI starts teaching.

### Progressive disclosure

The AI reveals ideas in the order the learner needs them.

It does not dump the whole field at once.

```text
first mental model -> key mechanism -> worked example -> practice -> review
```

### Active recall

The AI checks understanding before moving forward.

The default rhythm is calm:

```text
Response 1: teach one concept and pause
Response 2: check understanding before the next subtopic
Response 3: adapt and continue
```

This avoids turning every explanation into an immediate quiz.

### Misconception repair

If the student is wrong, the AI does not restart the whole lesson.

It identifies the broken link and repairs that one part:

```text
Mistake: current depends on total charge only
Better model: current depends on charge per unit time
Retry: what happens if the same charge takes twice as long?
```

### Confidence-aware feedback

A correct answer with low confidence needs reinforcement.

An incorrect answer with high confidence may reveal a strong misconception.

No Sidequests treats confidence as learning evidence, not as a grade.

### Spaced review

For longer study sessions, No Sidequests can track review prompts:

```text
learning/
  index.md
  topics/
    YYYY-MM-DD-topic/
      plan.md
      feedback.md
      mistakes.md
      review.md
```

This helps the student revisit weak areas instead of rereading everything.

## Key Features

- AI tutoring skill for focused learning
- Works with Codex, Claude Code, OpenCode, Gemini CLI, and Cursor
- Active recall checks before moving to the next subtopic
- Progressive disclosure instead of information dumping
- Accurate analogies with explicit limits
- Confusion repair workflow
- Mistake journal for repeated misconceptions
- Spaced review prompts for longer learning sessions
- Study from a broad topic or from files in `learning-materials/`
- Material-folder scaffolding for chapters, notes, and question sets
- Low-noise formatting for calmer reading
- Small Node.js installer with no runtime dependencies

## Example: Before and After

Ask:

```text
Teach me electric current. I know basic arithmetic but not circuits.
```

A typical AI answer may immediately introduce current, voltage, resistance, Ohm's law, electrons, units, and circuit diagrams.

No Sidequests starts smaller:

```text
### Electric Current

Current tells us how quickly electric charge passes a point.

**Key idea:** more charge passing each second means more current.

charge passing each second
          |
          v
       current
```

Then it pauses. Before the next subtopic, it checks whether the idea landed.

## Study From Your Own Material

Students can learn from a broad topic:

```text
Teach me linear regression.
```

They can also provide their own material:

```text
Use No Sidequests to teach me from learning-materials/cbse-class-10-science/
```

The default folder for source material is:

```text
learning-materials/
```

Recommended formats are `.md` and `.txt`, but they are not required. Use whatever the AI tool can read: pasted notes, PDFs, DOCX files, slides, screenshots, links, syllabus files, or question sets.

Example:

```text
learning-materials/
  cbse-class-10-science/
    chapter-6-life-processes.md
    teacher-notes.txt
    exam-questions.md
```

When material is provided, No Sidequests treats it as the primary source, maps the topic like an expert teacher, plans analogies and examples, predicts likely misconceptions, and then teaches one concept at a time.

You can create the folder manually, or use the helper command from the project root.

Command option:

```bash
npm run materials:new "CBSE Class 10 Science"
```

Run it from the root of this project, the same folder that contains `package.json`:

```text
no-sidequests/
```

This creates:

```text
learning-materials/
  cbse-class-10-science/
    README.md
    source.md
    notes.md
    questions.md
```

If a student only has a broad topic, that still works. No Sidequests should not force the learner to provide files before starting.

The command is optional, but faster. It also saves tokens because the AI does not need to walk the student through creating each file by hand.

## Install

Requires Node.js 18 or newer.

```bash
npx no-sidequests
```

The installer asks which AI tool you use:

```text
1. Codex
2. Claude Code
3. OpenCode
4. Gemini CLI
5. Cursor
```

Then it asks where to install:

```text
1. Current project
2. User / global
```

After installation, start a new AI session and ask it to teach you something.

## Supported AI Tools

| Tool | Project install | User/global install |
| --- | --- | --- |
| Codex | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |
| Claude Code | `.claude/skills/no-sidequests` | `~/.claude/skills/no-sidequests` |
| OpenCode | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |
| Gemini CLI | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |
| Cursor | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |

## Install with skills.sh

If you use the `skills` CLI:

```bash
npx skills add epic-coder97/no-sidequests
```

## Manual Installation

For Agent Skills-compatible tools that use `.agents/skills`:

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/epic-coder97/no-sidequests.git ~/.agents/skills/no-sidequests
```

For a project-only install:

```bash
mkdir -p .agents/skills
git clone https://github.com/epic-coder97/no-sidequests.git .agents/skills/no-sidequests
```

Claude Code uses `.claude/skills`:

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/epic-coder97/no-sidequests.git ~/.claude/skills/no-sidequests
```

## Teaching Modes

### Focus

The default mode. Teach one concept, pause, check before moving on, and adapt.

### Read-through

A more continuous explanation when the learner wants to read through a topic without stopping after every segment.

### Deep

More technical depth while preserving clear structure.

### Revision

Retrieval first. The AI checks what the student remembers, then reteaches weak areas.

## Project Structure

```text
no-sidequests/
|-- SKILL.md
|-- README.md
|-- LICENSE
|-- package.json
|-- bin/
|   `-- no-sidequests.js
|-- scripts/
|   |-- create-learning-topic.js
|   |-- readme-audit.js
|   `-- validate-skill.js
|-- workflows/
|   |-- focus-session.md
|   |-- study-from-material.md
|   |-- revision-session.md
|   |-- confusion-repair.md
|   `-- spaced-review.md
|-- learning-materials/
|   `-- README.md
|-- examples/
|-- patterns/
|-- references/
`-- rubrics/
```

## Developer Scripts

Run the installer locally:

```bash
npm start
```

Run tests:

```bash
npm test
```

Validate required skill files:

```bash
npm run validate
```

Audit the README for required SEO headings and phrases:

```bash
npm run audit:readme
```

Check what npm will publish:

```bash
npm run pack:check
```

Create a local learning topic scaffold:

```bash
node scripts/create-learning-topic.js "Electric Current" "simple intuition"
```

Create a folder for student material:

```bash
npm run materials:new "CBSE Class 10 Science"
```

## Security

The No Sidequests teaching skill is instruction-based and consists primarily of Markdown resources.

The npm package contains a small Node.js installer that copies the skill files into the skill directory you choose.

It does not:

- send your project files anywhere,
- modify your application source code,
- require runtime dependencies,
- change your AI tool outside the installed skill.

As with any third-party CLI or Agent Skill, inspect the source before running it if you have security concerns.

## FAQ

### What is an AI tutoring skill?

An AI tutoring skill is a set of instructions and resources that changes how an AI assistant teaches. No Sidequests makes the AI teach with clearer sequence, active recall, and less distraction.

### How does No Sidequests help students learn?

It reduces cognitive overload. The AI teaches one idea at a time, pauses, checks understanding before the next subtopic, repairs misconceptions, and creates review prompts for longer study sessions.

### Does No Sidequests work with Codex?

Yes. The installer supports Codex project installs and user/global installs.

### Does it work with Claude Code?

Yes. The installer can install No Sidequests into `.claude/skills/no-sidequests` or `~/.claude/skills/no-sidequests`.

### Does it work with Gemini CLI?

Yes. The npm installer supports Gemini CLI through the shared `.agents/skills` location.

### Is No Sidequests free?

Yes. No Sidequests is open source and released under the MIT License.

### Does No Sidequests send my files anywhere?

No. The installer copies local files into the selected skill directory. It does not upload your project files.

### Can teachers use it?

Yes. Teachers can use No Sidequests as a promptable teaching style for clearer explanations, misconception repair, and review questions.

## Contributing

Contributions are welcome.

Useful contributions include:

- better teaching examples,
- confusion repair patterns,
- analogy failure cases,
- spaced review examples,
- misconception repair examples,
- README and SEO improvements,
- support for additional AI tools.

Keep `SKILL.md` focused. Detailed material should live in supporting resources so agents can load only what they need.

## License

No Sidequests is released under the [MIT License](LICENSE).

## References

- [Agent Skills specification](https://agentskills.io/specification)
- [OpenAI Codex Skills](https://developers.openai.com/codex/skills/)
- [Claude Code Skills](https://code.claude.com/docs/en/skills)
- [OpenCode Agent Skills](https://opencode.ai/docs/skills/)
- [Gemini CLI Agent Skills](https://github.com/google-gemini/gemini-cli/tree/main/docs)
- [Cursor](https://cursor.com/)

**No Sidequests**: learn one concept at a time.
