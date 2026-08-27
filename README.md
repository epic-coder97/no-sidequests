# No Sidequests

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent%20Skill-compatible-brightgreen.svg)](https://agentskills.io/)

> **Learn one thing at a time. No sidequests.**

No Sidequests is a portable **Agent Skill for distraction-resistant learning**. It changes *how* an AI teaches: less information dumping, clearer visual structure, better analogies, active recall, and progressive disclosure.

Repository: **https://github.com/epic-coder97/no-sidequests**

```text
one idea → mental model → example → quick check → next idea
```

It works as an instruction-only skill across major Agent Skills-compatible tools. No executable scripts are included.

## Why No Sidequests?

AI can explain almost anything, but explanations often become hard to read because they contain too much at once. No Sidequests tells the model to optimize for **comprehension before coverage**.

It encourages the AI to:

- teach one meaningful conceptual unit at a time;
- keep headings, emphasis, and lists visually restrained;
- turn relationships into small text diagrams when useful;
- connect new ideas to familiar experiences;
- state where an analogy stops being accurate;
- use examples before extra abstraction;
- ask the learner to recall, predict, or explain;
- increase depth only when it helps;
- use current, high-quality sources when research is needed.

### Tiny example

Ask:

> Teach me electric current. I know basic arithmetic but not circuits.

No Sidequests might start with:

```text
### Electric current

Current tells us how quickly electric charge passes a point.

**Key idea:** more charge passing each second means more current.

charge passing each second
            ↓
         current

**Check:**
The same amount of charge passes, but it takes twice as long.
What happens to the current?
```

It does **not** immediately pile voltage, resistance, Ohm's law, units, edge cases, and five related concepts onto the same response.

---

# Install

## Fastest option: GitHub CLI

`gh skill` can install Agent Skills into the correct location for Codex, Claude Code, Cursor, Gemini CLI, OpenCode, GitHub Copilot, and many other supported agents.

First, inspect the skill:

```bash
gh skill preview epic-coder97/no-sidequests SKILL.md
```

Then choose your agent:

```bash
# OpenAI Codex
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

> `gh skill` is currently a GitHub CLI preview feature. Use GitHub CLI 2.90.0 or later.

## One shared manual install

Codex, Cursor, Gemini CLI, OpenCode, and GitHub Copilot all recognize the interoperable `~/.agents/skills` location.

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/epic-coder97/no-sidequests.git ~/.agents/skills/no-sidequests
```

For a project-only install instead:

```bash
mkdir -p .agents/skills
git clone https://github.com/epic-coder97/no-sidequests.git .agents/skills/no-sidequests
```

Claude Code's native location is different:

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/epic-coder97/no-sidequests.git ~/.claude/skills/no-sidequests
```

<details>
<summary><strong>OpenAI Codex details</strong></summary>

Codex discovers personal skills in:

```text
~/.agents/skills/no-sidequests/
```

and repository skills under:

```text
.agents/skills/no-sidequests/
```

Invoke it explicitly with:

```text
$no-sidequests Teach me recursion from first principles.
```

Codex can also select the skill automatically when your request matches its description.

</details>

<details>
<summary><strong>Claude Code details</strong></summary>

Personal skill:

```text
~/.claude/skills/no-sidequests/
```

Project skill:

```text
.claude/skills/no-sidequests/
```

Invoke directly with:

```text
/no-sidequests Teach me gradient descent without overwhelming me.
```

Claude can also activate it automatically from the skill description.

</details>

<details>
<summary><strong>OpenCode details</strong></summary>

OpenCode supports the shared Agent Skills paths:

```text
~/.agents/skills/no-sidequests/
.agents/skills/no-sidequests/
```

and its native paths:

```text
~/.config/opencode/skills/no-sidequests/
.opencode/skills/no-sidequests/
```

The skill is advertised from its name and description and loaded on demand.

</details>

<details>
<summary><strong>Gemini CLI details</strong></summary>

Gemini CLI has its own Git installer:

```bash
gemini skills install https://github.com/epic-coder97/no-sidequests.git
```

Its supported discovery paths include:

```text
~/.gemini/skills/no-sidequests/
~/.agents/skills/no-sidequests/
.gemini/skills/no-sidequests/
.agents/skills/no-sidequests/
```

For a workspace-only native install:

```bash
gemini skills install https://github.com/epic-coder97/no-sidequests.git --scope workspace
```

If the skill was added while Gemini CLI is already open, run:

```text
/skills reload
```

</details>

<details>
<summary><strong>Cursor details</strong></summary>

Cursor discovers skills from:

```text
~/.agents/skills/no-sidequests/
~/.cursor/skills/no-sidequests/
.agents/skills/no-sidequests/
.cursor/skills/no-sidequests/
```

You can invoke No Sidequests from Cursor's `/` skill menu or let Agent choose it automatically.

</details>

<details>
<summary><strong>GitHub Copilot details</strong></summary>

Personal locations include:

```text
~/.agents/skills/no-sidequests/
~/.copilot/skills/no-sidequests/
```

Repository locations include:

```text
.agents/skills/no-sidequests/
.github/skills/no-sidequests/
```

GitHub Copilot CLI can also reload and inspect installed skills through its `/skills` commands.

</details>

<details>
<summary><strong>ChatGPT</strong></summary>

No Sidequests uses the same skill format understood by ChatGPT and Codex. OpenAI recommends **plugins** when you want other people to install a reusable skill broadly across ChatGPT and Codex.

This GitHub repository remains the portable Agent Skill source and can be installed directly by Codex and other compatible agents. Packaging No Sidequests as an OpenAI plugin can be added as a separate distribution layer without changing the core teaching skill.

</details>

## Compatibility

| Host | Personal/global | Project | Installer |
| --- | --- | --- | --- |
| Codex | `~/.agents/skills/no-sidequests` | `.agents/skills/no-sidequests` | `gh skill` |
| Claude Code | `~/.claude/skills/no-sidequests` | `.claude/skills/no-sidequests` | `gh skill` |
| OpenCode | `~/.agents/skills/no-sidequests` | `.agents/skills/no-sidequests` | `gh skill` |
| Gemini CLI | `~/.agents/skills/no-sidequests` | `.agents/skills/no-sidequests` | `gh skill` / `gemini skills install` |
| Cursor | `~/.agents/skills/no-sidequests` | `.agents/skills/no-sidequests` | `gh skill` |
| GitHub Copilot | `~/.agents/skills/no-sidequests` | `.agents/skills/no-sidequests` | `gh skill` |
| ChatGPT | host-managed | host-managed | OpenAI plugin distribution |

GitHub CLI supports many additional hosts. Run `gh skill install --help` to see the current `--agent` values.

---

# Use

Usually, just ask naturally:

```text
Teach me Bayes' theorem from scratch.
```

```text
I understand functions but closures confuse me. Teach me one idea at a time.
```

```text
Explain inflation with a relatable analogy, and tell me where the analogy breaks.
```

```text
Quiz me on what we just covered before we continue.
```

No Sidequests has four teaching modes:

- **Focus** — default; one short learning segment at a time.
- **Read-through** — a more continuous self-contained lesson.
- **Deep** — technical rigor without losing hierarchy.
- **Revision** — retrieval first; reteach only weak areas.

Example:

```text
Use No Sidequests in Focus mode to teach me recursion.
```

## What's inside

```text
no-sidequests/
├── SKILL.md                     # runtime teaching behavior
├── README.md
├── LICENSE                       # MIT license
├── agents/
│   └── openai.yaml              # optional OpenAI display metadata
├── examples/                    # contrasting teaching demonstrations
├── patterns/
│   └── visual-patterns.md       # reusable low-noise visual forms
├── references/
│   ├── learning-science.md      # research basis
│   └── source-selection.md      # research/source rules
└── rubrics/
    └── response-quality.md      # teaching quality self-check
```

The supporting resources are **not meant to be loaded all at once**. `SKILL.md` tells the agent when a particular resource is useful.

## Design principles

1. **Comprehension before coverage.**
2. **One learning job per response.**
3. **Progressive disclosure over information dumping.**
4. **Visible relationships over decorative formatting.**
5. **Analogies with explicit mappings and limits.**
6. **Retrieval and prediction over passive rereading.**
7. **Adapt depth from evidence of understanding.**
8. **Use research when facts are current, uncertain, or contested.**

The detailed research basis is in [`references/learning-science.md`](references/learning-science.md). The evaluation criteria are in [`rubrics/response-quality.md`](rubrics/response-quality.md).

## Security

No Sidequests currently contains **no executable scripts**. It is an instruction-only skill made of Markdown resources plus optional host metadata.

Still, always inspect third-party skills before installing them. With GitHub CLI:

```bash
gh skill preview epic-coder97/no-sidequests SKILL.md
```

## Contributing

Useful contributions include better examples, analogy failure cases, plain-text visual patterns, misconception-repair methods, subject-specific demonstrations, and stronger learning-science references.

Keep the main `SKILL.md` focused. Put detailed material in supporting files so agents can load it only when needed.

## Release checklist

- Preview the published skill with `gh skill preview`.
- Run `gh skill publish . --dry-run` with a current GitHub CLI to validate before release.
- Create a stable release tag such as `v1.0.0` so users can pin installations.
- Test the install on at least Codex, Claude Code, OpenCode, Gemini CLI, and one other `.agents/skills` host.

## License

No Sidequests is released under the [MIT License](LICENSE). You may use, copy, modify, distribute, and build on it, subject to the license terms.

## Official references

- [Agent Skills specification](https://agentskills.io/specification)
- [OpenAI / Codex skills](https://learn.chatgpt.com/docs/build-skills)
- [Claude Code skills](https://code.claude.com/docs/en/skills)
- [OpenCode Agent Skills](https://opencode.ai/docs/skills/)
- [Gemini CLI Agent Skills](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/skills.md)
- [Cursor Agent Skills](https://cursor.com/docs/skills)
- [GitHub Copilot Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [GitHub CLI `gh skill`](https://cli.github.com/manual/gh_skill)

---

**No Sidequests** — less noise, deeper understanding.
