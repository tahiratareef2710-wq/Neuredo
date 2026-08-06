// Each post's `content` is a simple array of blocks rendered by BlogPost.jsx:
//   { type: "p", text }               — paragraph
//   { type: "h3", text }              — subheading
//   { type: "ul", items: [text, ...] } — bullet list
//   { type: "quote", text }           — pull quote
//
// Keeping it as plain data (no markdown parser) so it's easy to edit directly.

export const blogPosts = [
  {
    id: 1,
    slug: "skills-as-a-network-not-a-syllabus",
    tag: "Method",
    title: "Why we teach skills as a network, not a syllabus",
    excerpt:
      "A syllabus moves in one direction. Skills don't. Here's the thinking behind Neuredo's track structure and why sections connect instead of queue.",
    date: "Jul 2026",
    readTime: "6 min",
    content: [
      {
        type: "p",
        text: "Most learning platforms are built like a syllabus: unit one, then unit two, then unit three, in a straight line toward a final exam. It's a familiar shape, and it's easy to build a product around. It's also not how anyone actually gets good at something.",
      },
      {
        type: "p",
        text: "When we sat down to design Neuredo's learning tracks, we started from a different question. Not \"what order should a student cover this in\", but \"what does this student actually need right now, and what else does that connect to\". A student working through O Level Computer Science past papers is doing something structurally identical to a student debugging their first Git merge conflict — both are learning to read an error, isolate the cause, and fix it without guessing. Put those two students in separate silos and they each have to learn that skill from scratch. Let the tracks acknowledge the overlap, and progress in one quietly reinforces the other.",
      },
      {
        type: "h3",
        text: "A network has no single starting point",
      },
      {
        type: "p",
        text: "That's the real difference between a syllabus and a network. A syllabus assumes everyone starts at the same point and needs the same sequence. A network assumes people arrive with different backgrounds, different gaps, and different goals — and that the fastest way through is rarely a straight line.",
      },
      {
        type: "p",
        text: "In practice, this is why Neuredo now runs seven distinct tracks — Technical Skills, Academic Tuition for grades 4–8, O Levels, A Levels, Matriculation, Intermediate, and Quranic Studies — instead of one long curriculum. Each track is self-contained enough to start cold, but built so that a student moving between them, say from Matriculation Maths into Technical Skills' web development courses, isn't starting over. The underlying habits — structured practice, honest feedback, showing your work — transfer directly.",
      },
      {
        type: "h3",
        text: "What this looks like day to day",
      },
      {
        type: "p",
        text: "Concretely, it means a few things stay constant across every track, whatever subject or skill sits on top of them:",
      },
      {
        type: "ul",
        items: [
          "Every track opens with the smallest possible first step — a form, a first subject, a first course — rather than a long onboarding sequence.",
          "Progress is visible and self-paced. Nobody is waiting on a fixed weekly schedule to move forward.",
          "Feedback loops are short. Whether it's a past paper or a pull request, the gap between attempt and correction stays tight.",
        ],
      },
      {
        type: "quote",
        text: "The goal isn't to finish a syllabus. It's to build habits that keep working long after the syllabus is done.",
      },
      {
        type: "p",
        text: "We'll keep writing about the specifics of each track as they grow — what a first month in Tajweed looks like, how we structure O Level revision, what actually helps a grade 6 student stick with tuition. But the shape underneath all of it is this: skills as a network, not a queue.",
      },
    ],
  },
  {
    id: 2,
    slug: "o-and-a-level-computer-science-revision-plan",
    tag: "O & A Levels",
    title: "A realistic revision plan for O & A Level Computer Science",
    excerpt:
      "Past papers first, theory second. A structure that works whether you're six months out or six weeks out, for both O Level and A Level Computer Science.",
    date: "Jun 2026",
    readTime: "7 min",
    content: [
      {
        type: "p",
        text: "Computer Science is one of the few O and A Level subjects where students routinely walk into the exam knowing the theory cold and still lose marks — not because they didn't understand the concept, but because they'd never practiced writing it down under exam conditions. The fix isn't more theory. It's more past papers, done earlier and more deliberately than most students attempt.",
      },
      {
        type: "h3",
        text: "Start with a past paper, not a textbook chapter",
      },
      {
        type: "p",
        text: "The instinct is to read the syllabus front to back before touching a past paper. We push students to invert that. Sit a past paper — even a partial one, even with the textbook open — in the first week, before any structured revision. It tells you immediately which topics you're weak on, and more usefully, which command words trip you up: \"describe\", \"explain\", and \"justify\" are graded differently, and no amount of reading fixes that if you've never practiced the distinction.",
      },
      {
        type: "h3",
        text: "A structure that scales from 12 weeks to 4",
      },
      {
        type: "p",
        text: "The exact plan depends on how much time is left, but the shape stays the same:",
      },
      {
        type: "ul",
        items: [
          "Weeks 1–2: One past paper per topic area, marked honestly against the actual scheme, not from memory.",
          "Weeks 3–6: Targeted theory review on whatever the past papers exposed — algorithms and pseudocode, data representation, and system architecture are the usual weak spots.",
          "Weeks 7–10: Full timed papers, one every few days, with a short debrief after each: what cost the most marks, and why.",
          "Final stretch: Past papers only, spaced out, with rest days built in rather than cramming until the last night.",
        ],
      },
      {
        type: "p",
        text: "If there are only four weeks left, the same structure compresses — theory review shrinks to the two or three weakest topics, and timed papers start almost immediately. What doesn't change is the order: diagnose with a real paper before deciding what to study.",
      },
      {
        type: "h3",
        text: "Where A Level actually differs from O Level",
      },
      {
        type: "p",
        text: "Students moving from O Level to A Level Computer Science often expect a jump in difficulty and instead find a jump in depth. The topics look familiar — programming constructs, databases, networking — but the exam expects you to reason about trade-offs, not just define terms. \"Why would you choose a linked list over an array here\" is an A Level question; \"what is a linked list\" is an O Level one. Revision has to shift accordingly: less definition-drilling, more working through worked comparisons and justifying a choice out loud.",
      },
      {
        type: "quote",
        text: "The exam rewards students who've practiced explaining a decision, not just recalling a definition.",
      },
      {
        type: "p",
        text: "None of this requires expensive resources. Past papers, a mark scheme, and an honest self-assessment go further than another round of note-taking. If you're working through our O Level or A Level Computer Science subject on Neuredo, this is the exact structure we build sessions around.",
      },
    ],
  },
  {
    id: 3,
    slug: "learning-tajweed-first-month-as-a-beginner",
    tag: "Quranic Studies",
    title: "Learning Tajweed as a complete beginner: the first month",
    excerpt:
      "No prior recitation experience needed. What the first four weeks actually look like, and why the pace is slower than most beginners expect — on purpose.",
    date: "Jun 2026",
    readTime: "5 min",
    content: [
      {
        type: "p",
        text: "The most common question we get from adults starting Tajweed is some version of: \"is it too late for me to start from zero?\" It isn't, but the honest answer is that the first month will feel slower than expected, and that's by design, not a sign of struggling.",
      },
      {
        type: "h3",
        text: "Week one: the mouth before the mind",
      },
      {
        type: "p",
        text: "Tajweed starts with articulation points — where and how each letter is physically formed. This is almost entirely muscle memory, not memorization, and it's the part beginners tend to rush past to get to actual recitation. We don't let them. A week spent getting comfortable with the letters that don't exist in everyday spoken language pays for itself many times over once recitation starts, because it prevents habits that are much harder to unlearn later than to build correctly the first time.",
      },
      {
        type: "h3",
        text: "Weeks two and three: short surahs, repeated",
      },
      {
        type: "p",
        text: "Once articulation is steady, we move to short, familiar surahs — not because they're easy content, but because their familiarity frees up attention for the actual Tajweed rules being layered in: elongation, nasalization, and the basic stopping rules. Repetition here isn't about speed; a student reciting the same short passage slowly and correctly for a week is progressing faster than one rushing through new material with uncorrected mistakes.",
      },
      {
        type: "h3",
        text: "Week four: correction becomes the routine",
      },
      {
        type: "p",
        text: "By the fourth week, the shift is from \"learning new rules\" to \"catching your own mistakes before a teacher has to.\" That self-correction habit is the actual milestone of the first month — more than any specific rule mastered, it's what determines whether progress continues after the structured sessions taper off.",
      },
      {
        type: "ul",
        items: [
          "Consistency matters more than duration — ten focused minutes daily outperforms one long weekly session.",
          "Recording yourself, even briefly, catches mistakes the ear misses in the moment.",
          "Progress isn't linear. A rule that felt solid one week often needs revisiting the next — that's normal, not a setback.",
        ],
      },
      {
        type: "quote",
        text: "The goal of the first month isn't fluency. It's building the habit of noticing your own mistakes.",
      },
      {
        type: "p",
        text: "If you're an absolute beginner considering where to start, this is the exact pace we build the Learn Tajweed track around — slower at the start than most people expect, so that everything built afterward sits on a correct foundation.",
      },
    ],
  },
  {
    id: 4,
    slug: "what-actually-helps-grades-4-to-8-tuition",
    tag: "Academic Tuition",
    title: "What actually moves the needle in grades 4–8 tuition",
    excerpt:
      "It's rarely more homework. A look at what actually changes outcomes for students in grades 4 through 8, across every core subject.",
    date: "May 2026",
    readTime: "6 min",
    content: [
      {
        type: "p",
        text: "Parents looking into tuition for a grade 4–8 student almost always ask the same underlying question, phrased different ways: \"how many hours a week will fix this?\" It's a reasonable question, and it's usually the wrong lever. Hours matter far less than what happens inside them.",
      },
      {
        type: "h3",
        text: "The gap is usually a foundation gap, not a current-topic gap",
      },
      {
        type: "p",
        text: "A grade 7 student struggling with fractions in a word problem is often not struggling with fractions — they're struggling with a grade 4 or 5 concept that was never fully solid, and every topic built on top of it since has been slightly shaky as a result. Effective tuition at this age spends real time diagnosing where the actual gap sits, even if that means stepping back a year or two below the current grade level, rather than drilling the current chapter harder.",
      },
      {
        type: "h3",
        text: "Across subjects, the pattern repeats",
      },
      {
        type: "p",
        text: "This isn't specific to Maths. In English, a student who struggles with comprehension in grade 6 often has a vocabulary gap from earlier grades, not a reading-speed problem. In Science, shaky grasp of a grade 5 concept like states of matter quietly undermines grade 7 chemistry. The subject changes; the underlying issue — an earlier foundation that never fully set — usually doesn't.",
      },
      {
        type: "ul",
        items: [
          "A short diagnostic conversation at the start of tuition, not just a placement test score, usually reveals more than the score alone.",
          "Subjects like Urdu, Islamiyat, and Social Studies benefit from the same foundation-first approach as Maths and Science — comprehension gaps compound the same way.",
          "Confidence and competence move together at this age; a student who feels behind often disengages before a genuine skill gap even shows up on paper.",
        ],
      },
      {
        type: "h3",
        text: "What actually changes outcomes",
      },
      {
        type: "p",
        text: "In practice, the sessions that move the needle most for grades 4 through 8 share three things: they start by finding the real gap rather than assuming it matches the current syllabus chapter, they keep sessions short enough that a student stays engaged rather than checked out by minute thirty, and they check for understanding by having the student explain the concept back, not just complete another worksheet.",
      },
      {
        type: "quote",
        text: "More hours rarely fixes a foundation gap. Finding the gap does.",
      },
      {
        type: "p",
        text: "This is the approach behind Neuredo's Academic Tuition track for grades 4 through 8 — Maths, English, Science, Urdu, Islamiyat, Social Studies, and Computer Science, all built around finding the actual gap first.",
      },
    ],
  },
];