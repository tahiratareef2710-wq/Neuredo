import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo.png";
import "./BlogPost.css";

const LAST_UPDATED = "August 2026";
const CONTACT_EMAIL = "neuredoedu@gmail.com";

const PAGES = {
  privacy: {
    title: "Privacy Policy",
    tag: "Legal",
    intro:
      "This explains what information Neuredo collects when you use this site or enquire about a track, how it's used, and the choices you have.",
    body: [
      { type: "h3", text: "1. Information we collect" },
      {
        type: "p",
        text: "When you submit the contact or enquiry form, we collect what you provide directly: your name, email address, phone/WhatsApp number, the track you're interested in, and any details you share about your current level or goals. We do not collect payment information through this site.",
      },
      {
        type: "p",
        text: "Like most websites, our hosting provider automatically logs basic technical data (such as browser type, device, and approximate location from IP address) for security and performance purposes.",
      },
      { type: "h3", text: "2. How we use it" },
      {
        type: "ul",
        items: [
          "To respond to your enquiry and recommend the right track or starting level",
          "To contact you about scheduling, pricing, or onboarding once you express interest",
          "To improve our curriculum and site based on aggregate, anonymised patterns",
          "To meet legal or safety obligations if required",
        ],
      },
      {
        type: "p",
        text: "We do not sell your personal information, and we do not share it with third parties for their own marketing purposes.",
      },
      { type: "h3", text: "3. Children's information" },
      {
        type: "p",
        text: "Some of our tracks (including Quranic Education and O Level coursework) are intended for minors. Where a form is filled out on behalf of a child, we treat the submitting adult as the account contact. If you are a parent or guardian and want to review, correct, or delete information submitted about your child, contact us using the details below.",
      },
      { type: "h3", text: "4. Data retention" },
      {
        type: "p",
        text: "We keep enquiry information for as long as needed to respond to you and, if you enrol, for the duration of your learning relationship with us plus a reasonable period for record-keeping. You can ask us to delete your information at any time, subject to any legal record-keeping requirements.",
      },
      { type: "h3", text: "5. Your rights" },
      {
        type: "p",
        text: "You can ask us what information we hold about you, request a correction, or request deletion, by emailing us at the address below. We'll respond within a reasonable time.",
      },
      { type: "h3", text: "6. Cookies and analytics" },
      {
        type: "p",
        text: "We may use basic, privacy-respecting analytics to understand how visitors use the site (e.g. which pages are popular). This does not involve selling data or third-party ad tracking.",
      },
      { type: "h3", text: "7. Changes to this policy" },
      {
        type: "p",
        text: "We may update this policy as Neuredo grows. Material changes will be reflected by updating the date at the top of this page.",
      },
      { type: "h3", text: "8. Contact" },
      {
        type: "p",
        text: `Questions about this policy or your data can be sent to ${CONTACT_EMAIL}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    tag: "Legal",
    intro:
      "These terms govern your use of the Neuredo website and enquiry/contact forms. By using this site, you agree to them.",
    body: [
      { type: "h3", text: "1. Who we are" },
      {
        type: "p",
        text: "Neuredo is an online education platform offering structured learning across Technical Skills, Soft Skills, O Levels, Quranic Education, and Intermediate Studies.",
      },
      { type: "h3", text: "2. Using this site" },
      {
        type: "p",
        text: "This website is provided for the purpose of learning about Neuredo's tracks and submitting enquiries. You agree to provide accurate information when contacting us, and not to use the site for any unlawful purpose.",
      },
      { type: "h3", text: "3. Enquiries and enrolment" },
      {
        type: "p",
        text: "Submitting the contact form is an enquiry, not an enrolment or a binding agreement. Track availability, scheduling, and pricing will be confirmed with you directly before any commitment is made on either side.",
      },
      { type: "h3", text: "4. Content and curriculum" },
      {
        type: "p",
        text: "Track structures, session counts, and syllabus details shown on this site are indicative and may be adjusted as our curriculum develops. We'll always confirm current details before you enrol.",
      },
      { type: "h3", text: "5. Intellectual property" },
      {
        type: "p",
        text: "The Neuredo name, logo, and original content on this site (including course descriptions and blog posts) belong to Neuredo and may not be copied or reused without permission.",
      },
      { type: "h3", text: "6. Limitation of liability" },
      {
        type: "p",
        text: "We aim to keep this site accurate and available, but we don't guarantee uninterrupted access or that all information is error-free. Neuredo is not liable for indirect or incidental damages arising from use of this site, to the extent permitted by law.",
      },
      { type: "h3", text: "7. Changes to these terms" },
      {
        type: "p",
        text: "We may update these terms as the platform develops. Continued use of the site after changes means you accept the updated terms.",
      },
      { type: "h3", text: "8. Contact" },
      {
        type: "p",
        text: `Questions about these terms can be sent to ${CONTACT_EMAIL}.`,
      },
    ],
  },
};

export default function Legal() {
  const { page } = useParams();
  const data = PAGES[page];

  if (!data) {
    return (
      <div className="article-page">
        <LegalTopBar />
        <div className="container article-notfound">
          <h1>Page not found</h1>
          <p>This page may have moved or been renamed.</p>
          <Link to="/" className="article-back-link">
            <ArrowLeft size={16} /> Back to Neuredo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-page">
      <LegalTopBar />

      <article className="container article">
        <Link to="/" className="article-back-link">
          <ArrowLeft size={16} /> Back to Neuredo
        </Link>

        <div className="article__meta">
          <span className="eyebrow article__tag">{data.tag}</span>
          <span className="article__date">Last updated: {LAST_UPDATED}</span>
        </div>

        <h1 className="article__title">{data.title}</h1>
        <p className="article__excerpt">{data.intro}</p>

        <div className="article__body">
          {data.body.map((block, i) => (
            <LegalBlock key={i} block={block} />
          ))}
        </div>

        <div className="article__footer">
          <Link to="/" className="article-back-link">
            <ArrowLeft size={16} /> Back to Neuredo
          </Link>
        </div>
      </article>
    </div>
  );
}

function LegalBlock({ block }) {
  switch (block.type) {
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

function LegalTopBar() {
  return (
    <div className="article-topbar">
      <div className="container article-topbar__inner">
        <Link to="/" className="article-topbar__brand">
          <img src={logo} alt="Neuredo" />
        </Link>
      </div>
    </div>
  );
}