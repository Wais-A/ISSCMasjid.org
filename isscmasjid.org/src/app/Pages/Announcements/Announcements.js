import styles from "./Announcements.module.css";

export default function Announcements() {
  return (
    <section className={styles.announcementsSection}>
      <div className={styles.announcement}>
        <h1 className={styles.announcementTitle}>
          The ISSC Monthly Dinner is Tonight!
        </h1>
        <p className={styles.announcementDate}>April 12, 2024</p>
        <p className={styles.announcementDescription}>
          The monthly dinner hosted by ISSC is scheduled for tonight and will be
          provided by Mohssinine at 6:00 PM.
        </p>
      </div>
    </section>
  );
}
