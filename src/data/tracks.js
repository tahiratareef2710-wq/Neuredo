// Node positions (x, y in % ) describe how each track sits on the blueprint
// grid in the Tracks section, echoing the node-and-line mark in the logo.

export const tracks = [
  {
    id: "technical-skills",
    index: "01",
    name: "Technical Skills",
    short: "Technical",
    summary:
      "Programming, data literacy and applied tools — built through projects, not slides.",
    node: { x: 18, y: 24 },
    videos: [
      { title: "Setting up your first dev environment", duration: "12:04", level: "Foundation" },
      { title: "Python fundamentals: variables to functions", duration: "18:41", level: "Foundation" },
      { title: "Working with real datasets in Excel & SQL", duration: "22:15", level: "Intermediate" },
      { title: "Building your first web page", duration: "15:37", level: "Intermediate" },
    ],
  },
  {
    id: "soft-skills",
    index: "02",
    name: "Soft Skills",
    short: "Soft Skills",
    summary:
      "Communication, teamwork and critical thinking — the skills that carry every other skill.",
    node: { x: 62, y: 14 },
    videos: [
      { title: "Structuring a clear argument", duration: "09:52", level: "Foundation" },
      { title: "Public speaking without the panic", duration: "16:20", level: "Foundation" },
      { title: "Giving and receiving feedback well", duration: "11:08", level: "Intermediate" },
      { title: "Leading a group project", duration: "14:33", level: "Intermediate" },
    ],
  },
  {
    id: "o-levels",
    index: "03",
    name: "O Levels",
    short: "O Levels",
    summary:
      "Cambridge O Level coursework across core subjects, paced against real past-paper practice.",
    node: { x: 84, y: 46 },
    videos: [
      { title: "Physics: forces and motion, worked examples", duration: "24:10", level: "O Level" },
      { title: "Chemistry: balancing equations from scratch", duration: "19:47", level: "O Level" },
      { title: "English: comprehension technique breakdown", duration: "17:29", level: "O Level" },
      { title: "Maths: past paper walkthrough, Paper 2", duration: "28:03", level: "O Level" },
    ],
  },
  {
    id: "quranic-education",
    index: "04",
    name: "Quranic Education",
    short: "Quranic Edu",
    summary:
      "Tajweed, memorization and tafsir fundamentals, taught with a steady, structured pace.",
    node: { x: 30, y: 68 },
    videos: [
      { title: "Tajweed basics: articulation points", duration: "13:55", level: "Foundation" },
      { title: "Hifz method: building a daily routine", duration: "10:41", level: "Foundation" },
      { title: "Introduction to tafsir: Surah Al-Fatiha", duration: "20:12", level: "Intermediate" },
      { title: "Correcting common recitation mistakes", duration: "15:06", level: "Intermediate" },
    ],
  },
  {
    id: "intermediate-studies",
    index: "05",
    name: "Intermediate Studies",
    short: "Intermediate",
    summary:
      "FSc / ICS-level coursework bridging school and university, subject by subject.",
    node: { x: 70, y: 78 },
    videos: [
      { title: "Calculus: limits and continuity", duration: "26:18", level: "Intermediate" },
      { title: "Statistics: probability distributions", duration: "21:44", level: "Intermediate" },
      { title: "Computer Science: intro to algorithms", duration: "23:59", level: "Intermediate" },
      { title: "Economics: supply and demand in practice", duration: "18:22", level: "Intermediate" },
    ],
  },
];
