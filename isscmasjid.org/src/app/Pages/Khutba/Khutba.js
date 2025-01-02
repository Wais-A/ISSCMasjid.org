import styles from "./Khutba.module.css";

export default function Khutba() {
  return (
    <section className={styles.khutbaSection}>
      <div className={styles.khutbaContainer}>
        <h1 className={styles.khutbaTitle}>
          Quran, Guidance To Those Who Seek Truth
        </h1>
        <p className={styles.khutbaDate}>October 12, 2024</p>
      </div>
    </section>
  );
}
