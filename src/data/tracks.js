// Node positions (x, y in %) describe how each track sits on the blueprint
// grid in the Tracks section, echoing the node-and-line mark in the logo.
//
// Every track now uses the same shape: a short list of items (courses or
// subjects), each pointing at a Google Form. Swap the `formUrl` placeholders
// below for the real form links whenever they're ready — until then the UI
// shows a disabled "Form coming soon" state instead of a dead link.

const FORM_PLACEHOLDER = "";

export const tracks = [
  {
    id: "technical-skills",
    index: "01",
    name: "Technical Skills",
    short: "Technical",
    summary:
      "Programming, workflows and applied tools — built through real projects, not slides.",
    cta: "View Courses",
    node: { x: 12, y: 22 },
    items: [
      { title: "Git & GitHub", formUrl: FORM_PLACEHOLDER },
      { title: "CI/CD Workflows", formUrl: FORM_PLACEHOLDER },
      { title: "Flutter", formUrl: FORM_PLACEHOLDER },
      { title: "Web Development", formUrl: FORM_PLACEHOLDER },
    ],
  },
  {
    id: "academic-tuition",
    index: "02",
    name: "Academic Tuition (Grades 4–8)",
    short: "Grades 4–8",
    summary:
      "One-on-one and group tuition for grades 4 through 8, across every core subject.",
    cta: "View Subjects",
    node: { x: 50, y: 8 },
    items: [
      { title: "Maths", formUrl: FORM_PLACEHOLDER },
      { title: "English", formUrl: FORM_PLACEHOLDER },
      { title: "Science", formUrl: FORM_PLACEHOLDER },
      { title: "Urdu", formUrl: FORM_PLACEHOLDER },
      { title: "Islamiyat", formUrl: FORM_PLACEHOLDER },
      { title: "Social Studies", formUrl: FORM_PLACEHOLDER },
      { title: "Computer Science", formUrl: FORM_PLACEHOLDER },
    ],
  },
  {
    id: "o-levels",
    index: "03",
    name: "O Levels",
    short: "O Levels",
    summary:
      "Cambridge O Level coursework, paced against real past-paper practice.",
    cta: "View Subjects",
    node: { x: 88, y: 24 },
    items: [
      { title: "Computer Science", formUrl: FORM_PLACEHOLDER },
      { title: "Business Studies", formUrl: FORM_PLACEHOLDER },
    ],
  },
  {
    id: "a-levels",
    index: "04",
    name: "A Levels",
    short: "A Levels",
    summary:
      "Cambridge A Level depth for students building toward university applications.",
    cta: "View Subjects",
    node: { x: 94, y: 60 },
    items: [
      { title: "Computer Science", formUrl: FORM_PLACEHOLDER },
      { title: "Business Studies", formUrl: FORM_PLACEHOLDER },
    ],
  },
  {
    id: "matriculation",
    index: "05",
    name: "Matriculation",
    short: "Matric",
    summary:
      "Matriculation-level coursework bridging school and university, subject by subject.",
    cta: "View Subjects",
    node: { x: 68, y: 84 },
    items: [
      { title: "Maths", formUrl: FORM_PLACEHOLDER },
      { title: "Computer Science", formUrl: FORM_PLACEHOLDER },
    ],
  },
  {
    id: "intermediate",
    index: "06",
    name: "Intermediate",
    short: "Intermediate",
    summary:
      "Intermediate (FSc) coursework for science-stream students, with structured practice and support.",
    cta: "View Subjects",
    node: { x: 34, y: 84 },
    items: [
      { title: "Maths", formUrl: FORM_PLACEHOLDER },
      { title: "Computer Science", formUrl: FORM_PLACEHOLDER },
    ],
  },
  {
    id: "quranic-studies",
    index: "07",
    name: "Quranic Studies",
    short: "Quranic Studies",
    summary:
      "Helping beginners learn to recite the Quran correctly, with a steady, structured pace.",
    cta: "View Subjects",
    node: { x: 6, y: 60 },
    items: [
      { title: "Learn Tajweed", formUrl: FORM_PLACEHOLDER },
    ],
  },
];