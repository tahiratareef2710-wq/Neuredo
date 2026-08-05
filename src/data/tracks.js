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
      { title: "Git & GitHub", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdwrwnQ2yTlGx0_YMzrNaf_CmCjKenTJ-FpAIg_dh94zPku_A/viewform?usp=header" },
      { title: "CI/CD Workflows", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeuKE_d5QxFPCbaRW--7_zvkVLgYXBmEO-ag2c7GV1_SHXRtQ/viewform?usp=header" },
      { title: "Flutter", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdwrwnQ2yTlGx0_YMzrNaf_CmCjKenTJ-FpAIg_dh94zPku_A/viewform?usp=header" },
      { title: "Web Development", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScCUS2uKWTy7gHN4qAODlG752YLHrtCYLBpQ_Nih-7QNVUFmQ/viewform?usp=header"},
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
      { title: "Maths", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfh51M-Uch9bQ6m36AaARb8XKgnWkjlvMWsytRvQrLrY8xFOQ/viewform?usp=header" },
      { title: "English", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd0jSVYxFRKeZYn8TNazax_NsCNPzxuuuM0BVewgbGtDIIIdA/viewform?usp=header" },
      { title: "Science", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf6pQGXQ-uEGdhaYZXea66ph5rp3brEu9QxagKB3s6u5wCmKQ/viewform?usp=header" },
      { title: "Urdu", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeGeAunzSVnhj7Z6nHOJ1e_BArAPOmhWfKzzEU-XTh8vRAbbw/viewform?usp=header" },
      { title: "Islamiyat", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdxPnC0akR850mfbfMaQNSVGp-xMy2ZjPclklwGaCQigb_SAA/viewform?usp=publish-editor" },
      { title: "Social Studies", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScpVFR3RJA0AfvSuoQyxF6HaibsacqDrf2cJCSx6D5mxuxsQg/viewform?usp=header" },
      { title: "Computer Science", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdHXbjVW4UeVwwnGOoQob6q3ohX9d8-lamPN55XJDq8hME1Cw/viewform?usp=header" },
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
      { title: "Computer Science", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdR2glLosnTHxG6wpMsjSkNb93NdKlLulFrdn4fWVtnGaWbKQ/viewform?usp=header" },
      { title: "Business Studies", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSegQQIa22JcWYL4NykbUubD5zeAKji9baYwcJFaNx2V3SHXhw/viewform?usp=header" },
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
      { title: "Computer Science", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfaNrTlRLoCsn872DGnGPVT7tlynzhGMMlKMD_WG1NMU_flIw/viewform?usp=header" },
      { title: "Business Studies", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSff141DADsF5AKKTJguKv-ED0AB_cfplBb_HOIjagqZLrxYvg/viewform?usp=header" },
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
      { title: "Maths", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSff141DADsF5AKKTJguKv-ED0AB_cfplBb_HOIjagqZLrxYvg/viewform?usp=header" },
      { title: "Computer Science", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdhQ2u3LAL47Y2ywFGCFmLwED2pKPioyeZSr18qc2PneEdEGQ/viewform?usp=publish-editor" },
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
      { title: "Maths", formUrl:  "https://docs.google.com/forms/d/e/1FAIpQLScyDDOCcZe4cD1ET_TOYNsybRPDsxeRFaiqp1HbjBFQGtBi8w/viewform?usp=header"},
      { title: "Computer Science", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScAXm7ltv-yc4TCXxfcs54kpmQnCTuNi5rv-qrtFCGQEO9MFQ/viewform?usp=header" },
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
      { title: "Learn Tajweed", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfD2WOq3m0ruJl0KudiX5nGl6sWWx-aDuzYNCilpx5UOEla4Q/viewform?usp=dialog" },
    ],
  },
];