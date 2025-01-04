import NavBar from "../Navigation/Navigation";
import Image from "next/image";
import Logo from "@/../public/images/Logo-white.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      {/* Main Header Content */}
      {/* Mobile NavBar - Only visible on mobile */}
      <section className={styles.headerSection}>
        <div className={styles.NavBarSection}>
          <div className="block lg:hidden NavBarSection">
            <NavBar />
          </div>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              <Image className={styles.logo} src={Logo} alt="Logo" />
            </div>
            <div className={styles.textContainer}>
              <h1 className={`${styles.titleText} ${styles.inTheNameOfAllah}`}>
                ﷽
              </h1>
              <h1 className={`${styles.titleText} ${styles.arabicTitle}`}>
                الجمعية الاسلامية لمقاطعة سكولكل
              </h1>
              <h1 className={`${styles.titleText} ${styles.englishTitle}`}>
                Islamic Society of Schuylkill County
              </h1>
              <h6 className={`${styles.titleText} ${styles.tagline}`}>
                Promoting Peace through the teachings of Prophet Muhammad
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop NavBar - Only visible on desktop */}
      <div className="hidden lg:block">
        <NavBar />
      </div>
    </header>
  );
}
