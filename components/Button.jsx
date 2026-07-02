import Link from "next/link";

const styles = {
  primary:
    "bg-accent text-white shadow-[0_14px_30px_rgba(234,118,75,0.25)] hover:-translate-y-0.5 hover:bg-accent/90",
  secondary:
    "bg-white text-primary ring-1 ring-primary/15 hover:-translate-y-0.5 hover:bg-pale-blue",
  ghost:
    "bg-primary/8 text-primary hover:-translate-y-0.5 hover:bg-primary/12",
  light:
    "bg-white text-primary hover:-translate-y-0.5 hover:bg-cream",
};

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const classes = `focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition duration-200 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
