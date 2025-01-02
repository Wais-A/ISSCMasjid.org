
import Announcements from "@/app/Pages/Announcements/Announcements";
import styles from "./HomePage.module.css";
import Khutba from "@/app/Pages/Khutba/Khutba";

export default function HomePage() {
  return (
    <section className={styles.homePage}>
      <div className={styles.contentContainer}>
        <div className={`${styles.section} ${styles.announcementsSection}`}>
          <h1 className={styles.sectionTitle}>
            <span className={styles.titleDivider}>━━━━</span>
            Announcements
            <span className={styles.titleDivider}>━━━━</span>
          </h1>
          <Announcements />
        </div>
        <div className={`${styles.section} ${styles.updatesSection}`}>
          <h1 className={styles.sectionTitle}>
            <span className={styles.titleDivider}>━━━━━</span>
            Updates
            <span className={styles.titleDivider}>━━━━━</span>
          </h1>
          <Khutba />
        </div>
      </div>
    </section>
  );
}
