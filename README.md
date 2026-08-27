# No Sidequests

[![npm version](https://img.shields.io/npm/v/no-sidequests.svg)](https://www.npmjs.com/package/no-sidequests)
[![npm downloads](https://img.shields.io/npm/dm/no-sidequests.svg)](https://www.npmjs.com/package/no-sidequests)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent%20Skill-compatible-brightgreen.svg)](https://agentskills.io/)

> **Learn one thing at a time. No sidequests.**

No Sidequests is an open-source **Agent Skill for distraction-resistant learning**.

It changes how an AI teaches: less information dumping, clearer visual structure, better analogies, active recall, and progressive disclosure.

```text
one idea → mental model → example → quick check → next idea
```

Instead of trying to explain an entire topic at once, No Sidequests helps the AI stay with the concept you are currently trying to understand.

**GitHub:** https://github.com/epic-coder97/no-sidequests
**npm:** https://www.npmjs.com/package/no-sidequests

---

## Install

### The easiest way

Requires **Node.js 18 or newer**.

```bash
npx no-sidequests
```

The installer will ask:

```text
Which AI tool are you using?

  1. Codex
  2. Claude Code
  3. OpenCode
  4. Gemini CLI
  5. Cursor
```

Then choose where you want the skill installed:

```text
1. Current project
2. User / global
```

No Sidequests will copy the skill into the appropriate skills directory.

That's it.

Start a new session in your AI tool and ask it to teach you something.

---

## What does the npm installer do?

The npm package is only an installer for the No Sidequests skill.

It:

* copies `SKILL.md` and its supporting resources into your selected skills directory;
* lets you choose between project-level and user-level installation;
* asks before replacing an existing No Sidequests installation.

It does **not**:

* modify your application source code;
* send your project files anywhere;
* require runtime dependencies;
* change the behavior of your AI outside the installed skill.

The teaching skill itself is made from Markdown instructions, examples, patterns, research notes, and optional host metadata.

---

## Supported by the npm installer

| Tool        | Project install                | User/global install              |
| ----------- | ------------------------------ | -------------------------------- |
| Codex       | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |
| Claude Code | `.claude/skills/no-sidequests` | `~/.claude/skills/no-sidequests` |
| OpenCode    | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |
| Gemini CLI  | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |
| Cursor      | `.agents/skills/no-sidequests` | `~/.agents/skills/no-sidequests` |

For other Agent Skills-compatible tools, use one of the manual installation methods below.

---

# Why No Sidequests?

AI can explain almost anything, but when you are learning, more information is not always more useful.

You might ask about one concept and receive definitions, related concepts, caveats, examples, tables, terminology, and suggestions for what to learn next — all in the same answer.

The information may be correct, but now you have to decide what to focus on while you are also trying to understand it.

No Sidequests asks the AI to optimize for **comprehension before coverage**.

It encourages the AI to:

* teach one meaningful conceptual unit at a time;
* keep headings, emphasis, and lists visually restrained;
* use small text diagrams when relationships are easier to see than describe;
* connect unfamiliar ideas to familiar experiences;
* explain where an analogy stops being accurate;
* use examples before adding more abstraction;
* ask the learner to recall, predict, or explain;
* increase depth as understanding develops;
* avoid introducing related concepts before they become useful.

The goal is not simply shorter answers.

Sometimes a good explanation is short. Sometimes it needs to be detailed.

The important part is that the information arrives in an order that helps you build the idea.

---

## A tiny example

Ask:

> Teach me electric current. I know basic arithmetic but not circuits.

Instead of immediately introducing voltage, resistance, Ohm's law, units, electron flow, and several related concepts, No Sidequests might begin with:

```text
### Electric current

Current tells us how quickly electric charge passes a point.

**Key idea:** more charge passing each second means more current.

charge passing each second
            ↓
         current

**Check**

The same amount of charge passes,
but it takes twice as long.

What happens to the current?
```

Then it waits.

The next concept can come after the first one makes sense.

---

# Use

Usually, just ask naturally.

```text
Teach me Bayes' theorem from scratch.
```

```text
I understand functions but closures confuse me.
```

```text
Explain inflation using a relatable analogy.
Tell me where the analogy breaks.
```

```text
Quiz me on what we just covered before continuing.
```

You can also explicitly ask for No Sidequests:

```text
Use No Sidequests to teach me recursion.
```

---

## Teaching modes

No Sidequests includes four modes.

### Focus

The default.

One learning segment at a time with frequent opportunities to think before continuing.

```text
Use No Sidequests in Focus mode to teach me recursion.
```

### Read-through

A more continuous, self-contained explanation when you want to read through a topic without stopping after every segment.

### Deep

More technical depth and rigor while preserving a clear hierarchy.

### Revision

Retrieval first.

The tutor checks what you already know and spends more time on weak areas rather than reteaching everything.

---

# What makes it different?

## One learning job at a time

A response does not need to simultaneously:

* introduce the concept;
* explain every mechanism;
* cover edge cases;
* provide five examples;
* correct misconceptions;
* quiz you;
* introduce the next topic.

Sometimes the current job is simply to establish intuition.

Sometimes it is to fix one misunderstanding.

Sometimes it is to work through an example.

No Sidequests tries to determine what is useful **now**.

---

## Analogies that actually map to the concept

AI can produce very relatable analogies that still leave you with the wrong mental model.

No Sidequests asks the AI to make the mapping explicit.

For example:

```text
familiar thing        → technical concept
familiar relationship → technical relationship
change in analogy     → corresponding real change
```

It should also explain where the analogy stops being accurate.

An analogy is there to support understanding, not replace the actual concept.

---

## Lower visual noise

No Sidequests treats presentation as part of teaching.

It discourages responses where everything competes for attention through:

* excessive headings;
* unnecessary bullet lists;
* constant bold text;
* decorative callouts;
* large tables when a small relationship would work;
* repeated summaries.

Formatting should help the learner know where to look.

---

## Active recall instead of endless explanation

Sometimes the best next step is not another paragraph.

No Sidequests can ask you to:

* predict what happens next;
* explain the idea in your own words;
* identify which example matches the concept;
* solve a small variation;
* recall something without looking back.

If the answer reveals a misunderstanding, the tutor focuses on that specific gap rather than restarting the whole lesson.

---

# Manual installation

Don't want to use npm? You can install No Sidequests directly from GitHub.

## Shared Agent Skills location

Codex, OpenCode, Gemini CLI, Cursor, and other compatible tools can use the shared `.agents/skills` location.

### User/global

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/epic-coder97/no-sidequests.git ~/.agents/skills/no-sidequests
```

### Current project

```bash
mkdir -p .agents/skills
git clone https://github.com/epic-coder97/no-sidequests.git .agents/skills/no-sidequests
```

---

## Claude Code

Claude Code uses `.claude/skills`.

### User/global

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/epic-coder97/no-sidequests.git ~/.claude/skills/no-sidequests
```

### Current project

```bash
mkdir -p .claude/skills
git clone https://github.com/epic-coder97/no-sidequests.git .claude/skills/no-sidequests
```

---

## GitHub CLI

If your GitHub CLI supports `gh skill`, you can also install directly from the repository.

Preview the skill first:

```bash
gh skill preview epic-coder97/no-sidequests SKILL.md
```

Examples:

```bash
# Codex
gh skill install epic-coder97/no-sidequests SKILL.md --agent codex --scope user

# Claude Code
gh skill install epic-coder97/no-sidequests SKILL.md --agent claude-code --scope user

# OpenCode
gh skill install epic-coder97/no-sidequests SKILL.md --agent opencode --scope user

# Gemini CLI
gh skill install epic-coder97/no-sidequests SKILL.md --agent gemini-cli --scope user

# Cursor
gh skill install epic-coder97/no-sidequests SKILL.md --agent cursor --scope user

# GitHub Copilot
gh skill install epic-coder97/no-sidequests SKILL.md --agent github-copilot --scope user
```

---

## Gemini CLI

Gemini CLI also supports installing skills directly from a Git repository:

```bash
gemini skills install https://github.com/epic-coder97/no-sidequests.git
```

For a workspace-only install:

```bash
gemini skills install https://github.com/epic-coder97/no-sidequests.git --scope workspace
```

If Gemini CLI was already running when the skill was installed:

```text
/skills reload
```

---

# What's inside?

```text
no-sidequests/
├── SKILL.md
├── README.md
├── LICENSE
├── package.json
├── bin/
│   └── no-sidequests.js
├── agents/
│   └── openai.yaml
├── examples/
├── patterns/
│   └── visual-patterns.md
├── references/
│   ├── learning-science.md
│   └── source-selection.md
└── rubrics/
    └── response-quality.md
```

### `SKILL.md`

Contains the core runtime teaching behavior.

### `examples/`

Contrasting demonstrations such as:

* good vs. overloaded explanations;
* good vs. misleading analogies;
* novice vs. advanced explanations;
* math examples;
* misconception repair.

### `patterns/`

Reusable low-noise visual structures for relationships such as:

```text
cause → effect
```

```text
input → process → output
```

```text
A
↓
B
↓
C
```

### `references/`

The research and source-selection guidance behind the skill.

### `rubrics/`

A lightweight quality check for deciding whether an explanation has become noisy, overloaded, unclear, or poorly sequenced.

---

## Resources are loaded progressively

The supporting files are **not intended to be loaded all at once**.

`SKILL.md` tells the agent when a particular resource is useful.

For example, analogy examples are useful when constructing or evaluating an analogy, while research guidance is useful when the subject requires current or externally verified information.

The architecture follows the same principle as the teaching style:

**use the information that is useful for the current task rather than loading everything just because it exists.**

---

# Design principles

1. **Comprehension before coverage.**
2. **One learning job per response.**
3. **Progressive disclosure over information dumping.**
4. **Visible relationships over decorative formatting.**
5. **Analogies with explicit mappings and limits.**
6. **Retrieval and prediction over passive rereading.**
7. **Adapt depth based on evidence of understanding.**
8. **Use research when facts are current, uncertain, or contested.**

The research basis is documented in:

[`references/learning-science.md`](references/learning-science.md)

The evaluation criteria are documented in:

[`rubrics/response-quality.md`](rubrics/response-quality.md)

---

# Development

Clone the repository:

```bash
git clone https://github.com/epic-coder97/no-sidequests.git
cd no-sidequests
```

Run the installer locally:

```bash
npm start
```

Or make the CLI available locally with:

```bash
npm link
no-sidequests
```

Check exactly what npm will publish:

```bash
npm pack --dry-run
```

You can also test the publish normalization without actually publishing:

```bash
npm publish --dry-run
```


---

# Security

The No Sidequests **teaching skill** is instruction-based and consists primarily of Markdown resources.

The npm package additionally contains a small Node.js installer:

```text
bin/no-sidequests.js
```

The installer copies the included skill files into the skills directory you choose.

It does not need access to your project contents beyond creating the selected skill directory, and it does not send project data to an external service.

As with any third-party CLI or Agent Skill, you should inspect the source before running it if you have security concerns.

The installer source is available here:

[`bin/no-sidequests.js`](bin/no-sidequests.js)

---

# Contributing

Contributions are welcome.

Useful contributions include:

* better teaching examples;
* analogy failure cases;
* plain-text visual patterns;
* misconception-repair approaches;
* subject-specific demonstrations;
* improvements to the installer;
* support for additional AI tools;
* stronger learning-science references.

Keep the main `SKILL.md` focused. Detailed material should generally live in supporting resources so agents can load it only when needed.

---

# License

No Sidequests is released under the [MIT License](LICENSE).

You may use, copy, modify, distribute, and build on it subject to the license terms.

---

# References

* [Agent Skills specification](https://agentskills.io/specification)
* [OpenAI Codex Skills](https://developers.openai.com/codex/skills/)
* [Claude Code Skills](https://code.claude.com/docs/en/skills)
* [OpenCode Agent Skills](https://opencode.ai/docs/skills/)
* [Gemini CLI Agent Skills](https://github.com/google-gemini/gemini-cli/tree/main/docs)
* [Cursor](https://cursor.com/)
* [GitHub Copilot Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)

---

**No Sidequests** — distraction-resistant learning, one concept at a time.
