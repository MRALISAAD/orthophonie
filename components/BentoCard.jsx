export default function BentoCard({ icon, title, text, className = "", dark = false }) {
  return (
    <article className={`group rounded-[30px] p-7 shadow-soft ring-1 ring-primary/8 transition duration-200 hover:-translate-y-1 ${dark ? "bg-primary text-white" : "bg-white"} ${className}`}>
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${dark ? "bg-white/12" : "bg-pale-blue"}`}>{icon}</div>
      <h3 className={`font-heading text-2xl font-black ${dark ? "text-white" : "text-primary"}`}>{title}</h3>
      <p className={`mt-3 leading-7 ${dark ? "text-white/78" : "text-text-muted"}`}>{text}</p>
    </article>
  );
}
