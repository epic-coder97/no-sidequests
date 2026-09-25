# Learning Materials

Put learner-provided study material here when you want No Sidequests to teach from a specific source.

Recommended formats:

- `.md`
- `.txt`
- pasted notes saved as text
- syllabus files
- question sets

Other formats are fine if the AI tool can read them:

- PDF
- DOCX
- PPT
- images or screenshots
- links copied into a notes file

Example:

```text
learning-materials/
  cbse-class-10-science/
    chapter-6-life-processes.md
    teacher-notes.txt
    exam-questions.md
```

Then ask:

```text
Use No Sidequests to teach me from learning-materials/cbse-class-10-science/
```

If you do not have material, you can still ask a broad topic:

```text
Teach me linear regression.
```

You can also create a starter folder with:

```bash
npm run materials:new "CBSE Class 10 Science"
```
