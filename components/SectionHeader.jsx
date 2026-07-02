export default function SectionHeader({ eyebrow, title, text, align = "left", light = false }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-extrabold uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-accent"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-heading text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 text-lg leading-8 ${light ? "text-white/78" : "text-text-muted"}`}>{text}</p> : null}
    </div>
  );
}
