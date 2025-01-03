import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe}
        src="https://masjidbox.com/prayer-times/islamic-society-of-schuylkill-county"
        title="Prayer Times"
        loading="lazy" // Optimized for better performance
      ></iframe>
    </div>
  );
}
