import styles from "./AtAGlance.module.css";

type Tone = "default" | "accent" | "good" | "warn";

export type AtAGlanceItem = {
  label: string;
  value: string;
  note: string;
  tone?: Tone;
};

export default function AtAGlance({ items }: { items: AtAGlanceItem[] }) {
  return (
    <section className={styles.wrap} aria-label="At a glance">
      {items.map((item) => (
        <article
          className={`${styles.card} ${item.tone && item.tone !== "default" ? styles[item.tone] : ""}`}
          key={`${item.label}-${item.value}`}
        >
          <span className={styles.label}>{item.label}</span>
          <strong className={styles.value}>{item.value}</strong>
          <span className={styles.note}>{item.note}</span>
        </article>
      ))}
    </section>
  );
}
