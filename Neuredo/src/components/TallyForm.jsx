import { useEffect } from "react";

export default function TallyForm() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;

      script.onload = () => {
        if (window.Tally) window.Tally.loadEmbeds();
      };

      document.body.appendChild(script);
    } else if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/obZ7gX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="700"
      frameBorder="0"
      title="Contact Form"
      style={{
        border: "none",
        width: "100%",
        minHeight: "700px",
      }}
    />
  );
}